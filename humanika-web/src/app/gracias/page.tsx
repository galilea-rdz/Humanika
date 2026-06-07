import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, ExternalLink, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Gracias por tu solicitud",
  description: "Hemos recibido tu solicitud de diagnóstico. Un especialista de Humanika te contactará en menos de 24 horas hábiles.",
};

export default function GraciasPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col">
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/" className="font-sora font-bold text-xl text-[#1173E4]">
            Humanika
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-xl w-full text-center">
          <div className="w-20 h-20 bg-[#e8f9f6] rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-[#00C2A0]" />
          </div>

          <h1 className="font-sora text-3xl md:text-4xl font-bold text-[#191616] mb-4">
            ¡Solicitud recibida!
          </h1>
          <p className="text-[#5A6478] text-lg leading-relaxed mb-10">
            Gracias por confiar en Humanika. Hemos recibido tu solicitud de diagnóstico organizacional.
          </p>

          {/* Next steps */}
          <div className="bg-white rounded-[8px] border border-gray-100 shadow-sm p-8 mb-8 text-left">
            <h2 className="font-sora font-bold text-[#191616] mb-6">¿Qué sigue?</h2>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#D6E8FF] flex items-center justify-center flex-shrink-0 text-sm font-bold text-[#1173E4]">1</div>
                <div>
                  <p className="font-medium text-[#191616] mb-1">Revisión de tu solicitud</p>
                  <p className="text-sm text-[#5A6478]">Un especialista revisará la información que compartiste.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#D6E8FF] flex items-center justify-center flex-shrink-0 text-sm font-bold text-[#1173E4]">2</div>
                <div>
                  <p className="font-medium text-[#191616] mb-1 flex items-center gap-2">
                    Contacto en menos de 24 horas
                    <Clock className="w-4 h-4 text-[#5A6478]" />
                  </p>
                  <p className="text-sm text-[#5A6478]">Te contactaremos por correo o WhatsApp para agendar tu sesión.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#D6E8FF] flex items-center justify-center flex-shrink-0 text-sm font-bold text-[#1173E4]">3</div>
                <div>
                  <p className="font-medium text-[#191616] mb-1">Sesión de diagnóstico (30 min)</p>
                  <p className="text-sm text-[#5A6478]">Identificamos los principales factores de riesgo y te presentamos un plan inicial.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.linkedin.com/company/humanika"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1173E4] text-white font-semibold rounded-[6px] hover:bg-[#0D5CC4] transition-colors text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Síguenos en LinkedIn
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-200 text-[#5A6478] font-semibold rounded-[6px] hover:border-[#1173E4] hover:text-[#1173E4] transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
