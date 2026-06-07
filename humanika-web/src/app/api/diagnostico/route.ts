import { NextRequest } from "next/server";
import { z } from "zod";

const schema = z.object({
  nombre: z.string().min(2),
  puesto: z.string().min(2),
  empresa: z.string().min(2),
  colaboradores: z.string().min(1),
  email: z.string().email(),
  telefono: z.string().min(8),
  desafio: z.string().max(250).optional(),
  _honeypot: z.string().max(0).optional(),
});

// Simple in-memory rate limiting
const rateLimit = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const maxRequests = 5;

  const record = rateLimit.get(ip);
  if (!record || record.resetAt < now) {
    rateLimit.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (record.count >= maxRequests) return false;
  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  // Rate limiting
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (!checkRateLimit(ip)) {
    return Response.json(
      { error: "Demasiadas solicitudes. Por favor intenta más tarde." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  const result = schema.safeParse(body);
  if (!result.success) {
    return Response.json({ error: "Datos inválidos.", details: result.error.flatten() }, { status: 422 });
  }

  const data = result.data;

  // Honeypot check
  if (data._honeypot) {
    return Response.json({ success: true }); // silently reject spam
  }

  const errors: string[] = [];

  // Send to Airtable
  const airtableApiKey = process.env.AIRTABLE_API_KEY;
  const airtableBaseId = process.env.AIRTABLE_BASE_ID;
  const airtableTableName = process.env.AIRTABLE_TABLE_NAME || "Prospectos";

  if (airtableApiKey && airtableBaseId) {
    try {
      const airtableRes = await fetch(
        `https://api.airtable.com/v0/${airtableBaseId}/${encodeURIComponent(airtableTableName)}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${airtableApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: {
              Nombre: data.nombre,
              Puesto: data.puesto,
              Empresa: data.empresa,
              Colaboradores: data.colaboradores,
              Email: data.email,
              Telefono: data.telefono,
              Desafio: data.desafio || "",
              Fecha: new Date().toISOString(),
            },
          }),
        }
      );
      if (!airtableRes.ok) {
        const errText = await airtableRes.text();
        console.error("Airtable error:", errText);
        errors.push("airtable");
      }
    } catch (err) {
      console.error("Airtable request failed:", err);
      errors.push("airtable");
    }
  }

  // Send notification email via Resend
  const resendApiKey = process.env.RESEND_API_KEY;
  const notificationEmail = process.env.NOTIFICATION_EMAIL || "contacto@humanika.mx";

  if (resendApiKey) {
    try {
      const emailBody = `
Nueva solicitud de diagnóstico organizacional

Nombre: ${data.nombre}
Puesto: ${data.puesto}
Empresa: ${data.empresa}
Colaboradores: ${data.colaboradores}
Email: ${data.email}
Teléfono: ${data.telefono}
Desafío: ${data.desafio || "No especificado"}

Fecha: ${new Date().toLocaleString("es-MX", { timeZone: "America/Monterrey" })}
      `.trim();

      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Humanika Web <noreply@humanika.mx>",
          to: [notificationEmail],
          subject: `Nueva solicitud de diagnóstico: ${data.nombre} — ${data.empresa}`,
          text: emailBody,
        }),
      });

      if (!resendRes.ok) {
        const errText = await resendRes.text();
        console.error("Resend error:", errText);
        errors.push("email");
      }
    } catch (err) {
      console.error("Resend request failed:", err);
      errors.push("email");
    }
  }

  // Even if integrations fail, return success to user (we log errors server-side)
  return Response.json({ success: true, errors: errors.length > 0 ? errors : undefined });
}
