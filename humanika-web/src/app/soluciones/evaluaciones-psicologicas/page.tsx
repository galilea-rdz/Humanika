import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Evaluaciones Psicológicas',
  description: 'Evaluaciones psicológicas organizacionales con rigor técnico. Diagnóstico de clima laboral, riesgos psicosociales y bienestar de colaboradores para empresas en México.',
};

const types = [
  { title: 'Evaluación de factores de riesgo psicosocial', desc: 'Diagnóstico técnico alineado a NOM-035 con análisis estadístico e interpretación clínica.' },
  { title: 'Encuesta de clima organizacional', desc: 'Medición de dimensiones clave: comunicación, liderazgo, carga de trabajo, relaciones interpersonales.' },
  { title: 'Evaluación de bienestar individual', desc: 'Detección de indicadores de burnout, estrés crónico y malestar psicológico en colaboradores.' },
  { title: 'Evaluación de competencias emocionales', desc: 'Diagnóstico de habilidades de regulación emocional y resiliencia en líderes y mandos medios.' },
];

export default function Evaluaciones() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-gradient-to-br from-[#0d2a5e] to-[#1a5cb8] py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <span className="inline-block px-3 py-1 bg-white/10 text-white/80 text-xs font-semibold rounded-full mb-6">Soluciones / Evaluaciones</span>
            <h1 className="font-sora text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
              Evaluaciones psicológicas con metodología clínica
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mb-8">
              Más de 2,000 evaluaciones aplicadas en entornos industriales y corporativos. Datos que informan decisiones de RH reales.
            </p>
            <Link href="/diagnostico-gratuito" className="inline-flex items-center gap-2 px-7 py-4 bg-[#00C2A0] text-white font-semibold rounded-md hover:bg-[#00a88a] transition-colors">
              Solicitar evaluación <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-sora text-2xl font-bold text-[#0F1923] mb-10 text-center">Tipos de evaluación</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {types.map((t) => (
                <div key={t.title} className="p-6 bg-[#F8F9FB] border-l-4 border-[#1a5cb8] rounded-r-xl">
                  <h3 className="font-sora font-semibold text-[#0F1923] mb-3">{t.title}</h3>
                  <p className="text-sm text-[#5A6478] leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#F8F9FB]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="font-sora text-2xl font-bold text-[#0F1923] mb-6 text-center">Lo que recibes</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Reporte técnico con resultados y análisis estadístico','Identificación de áreas de riesgo y grupos vulnerables','Recomendaciones específicas por área o departamento','Presentación ejecutiva para dirección y RH','Seguimiento post-evaluación para validar mejoras'].map(d => (
                <li key={d} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#00C2A0] flex-shrink-0 mt-0.5" />
                  <span className="text-[#5A6478] text-sm">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 bg-[#1a5cb8]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-sora text-2xl font-bold text-white mb-4">¿Cuándo fue la última vez que mediste el bienestar de tu equipo?</h2>
            <Link href="/diagnostico-gratuito" className="inline-flex items-center gap-2 px-7 py-4 bg-[#00C2A0] text-white font-semibold rounded-md hover:bg-[#00a88a] transition-colors mt-4">
              Diagnóstico gratuito <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
