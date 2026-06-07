import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CheckCircle2, LucideIcon } from "lucide-react";

interface ProcessStep {
  title: string;
  description: string;
}

interface SolucionTemplateProps {
  badge: string;
  title: string;
  description: string;
  deliverables: string[];
  processSteps: ProcessStep[];
  icon: LucideIcon;
}

export default function SolucionTemplate({
  badge,
  title,
  description,
  deliverables,
  processSteps,
  icon: Icon,
}: SolucionTemplateProps) {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0d2a5e] via-[#1a5cb8] to-[#0d4a8c] py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <span className="inline-block px-3 py-1 bg-white/10 text-white/80 text-xs font-semibold rounded-full mb-6">
              {badge}
            </span>
            <div className="flex items-start gap-6">
              <div className="hidden md:flex w-16 h-16 bg-white/10 rounded-full items-center justify-center flex-shrink-0 mt-2">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="font-sora text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  {title}
                </h1>
                <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-sora text-2xl md:text-3xl font-bold text-[#0F1923] mb-6">
                  ¿Qué incluye este servicio?
                </h2>
                <ul className="flex flex-col gap-4">
                  {deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00C2A0] flex-shrink-0 mt-0.5" />
                      <span className="text-[#5A6478] leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#F8F9FB] rounded-[8px] p-8 border border-gray-100">
                <h3 className="font-sora font-bold text-[#0F1923] mb-4">¿Listo para comenzar?</h3>
                <p className="text-[#5A6478] text-sm leading-relaxed mb-6">
                  Solicita tu diagnóstico gratuito y descubre cómo este servicio puede transformar tu organización.
                </p>
                <Link
                  href="/diagnostico-gratuito"
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-[#00C2A0] text-white font-semibold rounded-[6px] hover:bg-[#00a88a] transition-colors text-sm"
                >
                  Solicitar diagnóstico gratuito →
                </Link>
                <p className="text-xs text-[#5A6478] text-center mt-3">
                  Sin costo · Sin compromiso · Respuesta en 24h
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-[#F8F9FB]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-sora text-2xl md:text-3xl font-bold text-[#0F1923] mb-12 text-center">
              Proceso de trabajo
            </h2>
            <div className="flex flex-col gap-6 max-w-3xl mx-auto">
              {processSteps.map((step, i) => (
                <div key={step.title} className="flex gap-5 bg-white rounded-[8px] p-6 shadow-sm border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-[#1a5cb8] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F1923] mb-1">{step.title}</h3>
                    <p className="text-sm text-[#5A6478] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#1a5cb8]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-sora text-2xl md:text-3xl font-bold text-white mb-4">
              Da el primer paso hoy
            </h2>
            <p className="text-white/70 mb-8">
              Agenda tu diagnóstico gratuito y recibe un plan de acción personalizado para tu organización.
            </p>
            <Link
              href="/diagnostico-gratuito"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#00C2A0] text-white font-semibold rounded-[6px] hover:bg-[#00a88a] transition-colors"
            >
              Solicitar diagnóstico gratuito →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
