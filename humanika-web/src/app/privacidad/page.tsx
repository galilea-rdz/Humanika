import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description: "Aviso de privacidad de Humanika conforme a la LFPDPPP. Conoce cómo tratamos tus datos personales.",
};

export default function PrivacidadPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="font-sora text-3xl md:text-4xl font-bold text-[#191616] mb-2">
              Aviso de Privacidad
            </h1>
            <p className="text-[#5A6478] text-sm mb-10">Última actualización: junio 2025</p>

            <div className="prose prose-sm max-w-none text-[#5A6478] space-y-8">
              <section>
                <h2 className="font-sora text-xl font-bold text-[#191616] mb-3">Responsable del tratamiento</h2>
                <p>
                  <strong>Humanika</strong> (en adelante "el Responsable"), con domicilio en Monterrey, Nuevo León, México, y correo electrónico de contacto <a href="/contacto" className="text-[#1173E4] underline">nuestra página de contacto</a>, es responsable del tratamiento de sus datos personales de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento.
                </p>
              </section>

              <section>
                <h2 className="font-sora text-xl font-bold text-[#191616] mb-3">Datos personales recabados</h2>
                <p>El Responsable podrá recabar los siguientes datos personales:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Nombre completo</li>
                  <li>Puesto o rol dentro de la organización</li>
                  <li>Nombre de la empresa</li>
                  <li>Correo electrónico</li>
                  <li>Número de teléfono / WhatsApp</li>
                  <li>Información sobre la organización (número de colaboradores, principales desafíos)</li>
                </ul>
              </section>

              <section>
                <h2 className="font-sora text-xl font-bold text-[#191616] mb-3">Finalidades del tratamiento</h2>
                <p><strong>Finalidades primarias:</strong></p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Atender solicitudes de información sobre los servicios de Humanika.</li>
                  <li>Agendar y llevar a cabo el diagnóstico organizacional gratuito.</li>
                  <li>Dar seguimiento a propuestas y proyectos de consultoría.</li>
                  <li>Facturación y cumplimiento de obligaciones contractuales.</li>
                </ul>
                <p className="mt-3"><strong>Finalidades secundarias:</strong></p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Envío de información relevante sobre salud mental organizacional y NOM-035.</li>
                  <li>Invitaciones a eventos o webinars relacionados con bienestar laboral.</li>
                </ul>
                <p className="mt-3">Si no deseas que sus datos sean tratados para las finalidades secundarias, puede manifestarlo enviando un correo a <a href="/contacto" className="text-[#1173E4] underline">nuestra página de contacto</a>.</p>
              </section>

              <section>
                <h2 className="font-sora text-xl font-bold text-[#191616] mb-3">Transferencia de datos</h2>
                <p>
                  Sus datos personales no serán transferidos a terceros sin su consentimiento, salvo en los casos previstos en el artículo 37 de la LFPDPPP.
                </p>
              </section>

              <section>
                <h2 className="font-sora text-xl font-bold text-[#191616] mb-3">Derechos ARCO</h2>
                <p>
                  Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (derechos ARCO) al tratamiento de sus datos personales. Para ejercer estos derechos, envíe su solicitud a <a href="/contacto" className="text-[#1173E4] underline">nuestra página de contacto</a> con el asunto "Derechos ARCO", indicando su nombre completo, correo electrónico y la acción solicitada.
                </p>
                <p className="mt-2">
                  Responderemos su solicitud en un plazo máximo de 20 días hábiles contados a partir de la recepción.
                </p>
              </section>

              <section>
                <h2 className="font-sora text-xl font-bold text-[#191616] mb-3">Cookies y tecnologías de rastreo</h2>
                <p>
                  Nuestro sitio web puede utilizar cookies para mejorar la experiencia de navegación y recopilar estadísticas de uso. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
                </p>
              </section>

              <section>
                <h2 className="font-sora text-xl font-bold text-[#191616] mb-3">Modificaciones al aviso de privacidad</h2>
                <p>
                  El Responsable se reserva el derecho de modificar este aviso de privacidad en cualquier momento. Los cambios serán publicados en este sitio web y, de ser significativos, notificados por correo electrónico.
                </p>
              </section>

              <section>
                <h2 className="font-sora text-xl font-bold text-[#191616] mb-3">Contacto</h2>
                <p>
                  Para cualquier consulta relacionada con el tratamiento de sus datos personales, puede contactarnos en:
                  <br />
                  Correo: <a href="/contacto" className="text-[#1173E4] underline">nuestra página de contacto</a>
                  <br />
                  Teléfono: +52 1 81 8207 4338
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
