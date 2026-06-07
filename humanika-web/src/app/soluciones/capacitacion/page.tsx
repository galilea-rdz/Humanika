import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Capacitación Corporativa',
  description: 'Capacitación corporativa en salud mental organizacional, NOM-035, manejo del estrés y liderazgo saludable para empresas en México.',
};

const workshops = [
  { title: 'Identificación de factores de riesgo psicosocial', target: 'Líderes, supervisores y personal de RH', duration: '4–8 horas' },
  { title: 'Manejo del estrés laboral', target: 'Colaboradores en general', duration: '4–6 horas' },
  { title: 'Liderazgo saludable y gestión emocional', target: 'Mandos medios y directivos', duration: '8–16 horas' },
  { title: 'Prevención de violencia y acoso laboral', target: 'Todo el personal', duration: '4 horas' },
  { title: 'Primeros auxilios psicológicos en el trabajo', target: 'Líderes y personal de seguridad', duration: '8 horas' },
  { title: 'NOM-035: obligaciones y cumplimiento', target: 'Gerentes, RH y EHS', duration: '3–4 horas' },
];

export default function Capacitacion() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-gradient-to-br from-[#0A3A7A] to-[#1173E4] py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <span className="inline-block px-3 py-1 bg-white/10 text-white/80 text-xs font-semibold rounded-full mb-6">Soluciones / Capacitación</span>
            <h1 className="font-sora text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
              Capacitación corporativa en salud mental organizacional
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mb-8">
              Formación técnica y práctica para líderes y colaboradores, diseñada desde la metodología clínica y el conocimiento del entorno laboral mexicano.
            </p>
            <Link href="/diagnostico-gratuito" className="inline-flex items-center gap-2 px-7 py-4 bg-[#00C2A0] text-white font-semibold rounded-md hover:bg-[#00a88a] transition-colors">
              Solicitar cotización <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-sora text-2xl font-bold text-[#191616] mb-10 text-center">Talleres disponibles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workshops.map((w) => (
                <div key={w.title} className="bg-[#FDFDFD] rounded-xl p-6 border border-gray-100">
                  <h3 className="font-sora font-semibold text-[#191616] mb-3">{w.title}</h3>
                  <div className="flex flex-col gap-1.5 text-xs text-[#5A6478]">
                    <span><strong>Dirigido a:</strong> {w.target}</span>
                    <span><strong>Duración:</strong> {w.duration}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-[#5A6478] mt-8">
              Todos los talleres se pueden adaptar en formato, duración y modalidad (presencial o en línea) según las necesidades de tu organización.
            </p>
          </div>
        </section>

        <section className="py-16 bg-[#1173E4]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-sora text-2xl font-bold text-white mb-4">¿Qué taller necesita tu equipo?</h2>
            <p className="text-white/70 mb-8">Cuéntanos tu situación y diseñamos la propuesta más adecuada para tu organización.</p>
            <Link href="/diagnostico-gratuito" className="inline-flex items-center gap-2 px-7 py-4 bg-[#00C2A0] text-white font-semibold rounded-md hover:bg-[#00a88a] transition-colors">
              Solicitar propuesta <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
