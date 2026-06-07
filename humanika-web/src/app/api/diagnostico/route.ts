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

const rateLimit = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimit.get(ip);
  if (!record || record.resetAt < now) {
    rateLimit.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return true;
  }
  if (record.count >= 5) return false;
  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (!checkRateLimit(ip)) {
    return Response.json({ error: "Demasiadas solicitudes." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Solicitud invalida." }, { status: 400 });
  }

  const result = schema.safeParse(body);
  if (!result.success) {
    return Response.json({ error: "Datos invalidos." }, { status: 422 });
  }

  const data = result.data;
  if (data._honeypot) return Response.json({ success: true });

  const resendApiKey = process.env.RESEND_API_KEY;
  const notificationEmail = process.env.NOTIFICATION_EMAIL;

  if (!resendApiKey || !notificationEmail) {
    return Response.json(
      { error: "Config incompleta", debug: { hasKey: !!resendApiKey, hasEmail: !!notificationEmail } },
      { status: 500 }
    );
  }

  const emailText = `
Nueva solicitud de diagnostico organizacional

Nombre: ${data.nombre}
Puesto: ${data.puesto}
Empresa: ${data.empresa}
Colaboradores: ${data.colaboradores}
Email: ${data.email}
Telefono: ${data.telefono}
Desafio: ${data.desafio || "No especificado"}

Fecha: ${new Date().toLocaleString("es-MX", { timeZone: "America/Monterrey" })}
  `.trim();

  try {
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Humanika <onboarding@resend.dev>",
        to: [notificationEmail],
        subject: `Nueva solicitud: ${data.nombre} - ${data.empresa}`,
        text: emailText,
      }),
    });

    const resendBody = await resendRes.json();

    if (!resendRes.ok) {
      console.error("Resend error:", JSON.stringify(resendBody));
      return Response.json(
        { error: "Resend error", debug: resendBody },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Resend fetch failed:", err);
    return Response.json({ error: "Error de conexion" }, { status: 500 });
  }
}
