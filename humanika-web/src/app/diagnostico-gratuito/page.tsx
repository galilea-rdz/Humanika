import type { Metadata } from "next";
import Link from "next/link";
import DiagnosticForm from "@/components/DiagnosticForm";
import { CheckCircle2, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Diagnóstico Gratuito",
  description: "Solicita tu diagnóstico organizacional gratuito. En 30 minutos identificamos los principales factores de riesgo psicosocial y te presentamos un plan de acción.",
};

const benefits = [
  "Sin costo ni compromiso",
  "Sesión de 30 minutos con especialista",
  "Identificación de brechas NOM-035",
  "Plan de acción inicial personalizado",
  "Confidencialidad garantizada",
  "Respuesta en menos de 24 horas hábiles",
];

export default function DiagnosticoGratuitoPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* Minimal header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-sora font-bold text-xl text-[#1173E4]">
            Humanika
          </Link>
          <a href="tel:+528182074338" className="flex items-center gap-2 text-sm text-[#5A6478] hover:text-[#1173E4] transition-colors">
            <Phone className="w-4 h-4" />
            +52 81 8207 4338
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="inline-block px-3 py-1 bg-[#D6E8FF] text-[#1173E4] text-xs font-semibold rounded-full mb-6">
              Sin costo · Sin compromiso
            </span>
            <h1 className="font-sora text-4xl md:text-5xl font-bold text-[#191616] leading-tight mb-6">
              Diagnóstico organizacional gratuito
            </h1>
            <p className="text-[#5A6478] text-lg leading-relaxed mb-10">
              En 30 minutos identificamos los principales factores de riesgo psicosocial en tu organización y te presentamos un plan de acción inicial. Sin costo, sin compromiso.
            </p>

            <h2 className="font-sora font-bold text-[#191616] mb-5">Lo que incluye:</h2>
            <ul className="flex flex-col gap-4 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00C2A0] mt-0.5 flex-shrink-0" />
                  <span className="text-[#191616]">{b}</span>
                </li>
              ))}
            </ul>

            <div className="bg-white border border-gray-100 rounded-[8px] p-6">
              <p className="text-sm text-[#5A6478] leading-relaxed">
                <strong className="text-[#191616]">¿Por qué es gratuito?</strong> Creemos que el primer paso para transformar una organización es el diagnóstico. Queremos que conozcas la calidad de nuestro trabajo antes de tomar cualquier decisión.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-[8px] shadow-sm border border-gray-100 p-8">
            <h2 className="font-sora text-xl font-bold text-[#191616] mb-2">
              Solicita tu diagnóstico
            </h2>
            <p className="text-sm text-[#5A6478] mb-6">
              Completa el formulario y un especialista te contactará en menos de 24 horas hábiles.
            </p>
            <DiagnosticForm />
          </div>
        </div>
      </main>
    </div>
  );
}
