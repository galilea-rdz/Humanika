import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Intervención en Crisis',
  description: 'Intervención psicológica en crisis para organizaciones. Respuesta inmediata ante situaciones de violencia laboral, accidentes, conflictos graves o pérdidas en el equipo.',
};

const scenarios = [
  'Fallecimiento o accidente grave de un colaborador',
  'Situaciones de violencia o acoso laboral severo',
  'Conflictos interpersonales que escalan a crisis',
  'Eventos traumáticos en el entorno de trabajo',
  'Situaciones de estrés agudo colectivo',
  'Crisis de salud mental individual con impacto en el equipo',
];

export default function IntervencionCrisis() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-gradient-to-br from-[#0d2a5e] to-[#1a5cb8] py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <span className="inline-block px-3 py-1 bg-white/10 text-white/80 text-xs font-semibold rounded-full mb-6">Soluciones / Intervención en Crisis</span>
            <h1 className="font-sora text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
              Intervención en crisis: respuesta especializada cuando más se necesita
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mb-8">
              Respuesta profesional e inmediata ante situaciones críticas en el entorno laboral. Contención, evaluación y plan de acción.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/528182074338" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-4 bg-[#25D366] text-white font-semibold rounded-md hover:bg-[#1fba58] transition-colors">
                Contacto urgente por WhatsApp
              </a>
              <Link href="/diagnostico-gratuito" className="inline-flex items-center gap-2 px-7 py-4 bg-white/10 border border-white/30 text-white font-medium rounded-md hover:bg-white/20 transition-colors">
                Más información
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="font-sora text-2xl font-bold text-[#0F1923] mb-6">¿En qué situaciones intervenimos?</h2>
                <ul className="flex flex-col gap-3">
                  {scenarios.map(s => (
                    <li key={s} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#1a5cb8] flex-shrink-0 mt-2" />
                      <span className="text-[#5A6478]">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <div className="p-6 bg-[#F8F9FB] rounded-xl border-l-4 border-[#1a5cb8]">
                  <h3 className="font-sora font-semibold text-[#0F1923] mb-3">Fase 1: Contención</h3>
                  <p className="text-sm text-[#5A6478]">Evaluación inmediata de la situación, contención emocional y estabilización del equipo afectado.</p>
                </div>
                <div className="p-6 bg-[#F8F9FB] rounded-xl border-l-4 border-[#1a5cb8]">
                  <h3 className="font-sora font-semibold text-[#0F1923] mb-3">Fase 2: Evaluación y plan</h3>
                  <p className="text-sm text-[#5A6478]">Diagnóstico del impacto en el equipo y diseño de plan de intervención y recuperación.</p>
                </div>
                <div className="p-6 bg-[#F8F9FB] rounded-xl border-l-4 border-[#1a5cb8]">
                  <h3 className="font-sora font-semibold text-[#0F1923] mb-3">Fase 3: Seguimiento</h3>
                  <p className="text-sm text-[#5A6478]">Acompañamiento post-crisis para asegurar la recuperación y prevenir recurrencias.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F8F9FB]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="w-14 h-14 bg-[#EBF2FF] rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone size={24} className="text-[#1a5cb8]" />
            </div>
            <h2 className="font-sora text-2xl font-bold text-[#0F1923] mb-4">¿Estás en una situación urgente?</h2>
            <p className="text-[#5A6478] mb-8">Contáctanos directamente. Respondemos en tiempo real.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/528182074338" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#25D366] text-white font-semibold rounded-md hover:bg-[#1fba58] transition-colors">
                WhatsApp
              </a>
              <a href="tel:+528182074338" className="inline-flex items-center justify-center px-7 py-4 border border-gray-200 text-[#0F1923] font-medium rounded-md hover:bg-white transition-colors">
                +52 81 8207 4338
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
