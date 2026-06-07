import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Programas de Bienestar',
  description: 'Programas de bienestar organizacional diseñados con base en diagnóstico psicológico. No son talleres genéricos: cada programa responde a los datos reales de tu organización.',
};

const programs = [
  { title: 'Programa de manejo del estrés laboral', desc: 'Intervención estructurada para reducir el estrés crónico con técnicas validadas clínicamente.' },
  { title: 'Programa de prevención de burnout', desc: 'Detección temprana y plan de acción para equipos de alto riesgo.' },
  { title: 'Programa de salud mental integral', desc: 'Atención psicológica individual, talleres grupales y seguimiento continuo.' },
  { title: 'Programa de fortalecimiento de liderazgo', desc: 'Desarrollo de competencias de liderazgo saludable en mandos medios y directivos.' },
];

export default function ProgramasBienestar() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-gradient-to-br from-[#0A3A7A] to-[#1173E4] py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <span className="inline-block px-3 py-1 bg-white/10 text-white/80 text-xs font-semibold rounded-full mb-6">Soluciones / Bienestar</span>
            <h1 className="font-sora text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
              Programas de bienestar que generan resultados medibles
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mb-8">
              Cada programa está diseñado con base en el diagnóstico de tu organización. Sin soluciones de talla única.
            </p>
            <Link href="/diagnostico-gratuito" className="inline-flex items-center gap-2 px-7 py-4 bg-[#00C2A0] text-white font-semibold rounded-md hover:bg-[#00a88a] transition-colors">
              Conoce tu diagnóstico <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <h2 className="font-sora text-2xl font-bold text-[#191616] mb-4">No son talleres de wellness genéricos</h2>
              <p className="text-[#5A6478] leading-relaxed">
                Humanika diseña cada programa a partir de los datos de tu organización. Comenzamos con un diagnóstico, identificamos los factores críticos, y construimos una intervención específica con indicadores de seguimiento.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programs.map((p) => (
                <div key={p.title} className="p-6 bg-[#FDFDFD] border-l-4 border-[#00C2A0] rounded-r-xl">
                  <h3 className="font-sora font-semibold text-[#191616] mb-3">{p.title}</h3>
                  <p className="text-sm text-[#5A6478] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#1173E4]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-sora text-2xl font-bold text-white mb-4">Diseñemos el programa correcto para tu organización</h2>
            <Link href="/diagnostico-gratuito" className="inline-flex items-center gap-2 px-7 py-4 bg-[#00C2A0] text-white font-semibold rounded-md hover:bg-[#00a88a] transition-colors mt-4">
              Comenzar con un diagnóstico <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
