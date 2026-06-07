import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Target, Eye, Shield, BarChart2, Lock, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    'Humanika es una consultoría especializada en salud mental organizacional, NOM-035 y prevención de riesgos psicosociales con más de 5 años de experiencia en el entorno corporativo e industrial de México.',
};

const values = [
  {
    icon: Shield,
    title: 'Rigor técnico',
    desc: 'Todas nuestras intervenciones están fundamentadas en evaluación psicológica y metodología clínica validada.',
  },
  {
    icon: Lock,
    title: 'Confidencialidad',
    desc: 'La información de tu organización y colaboradores está protegida con los más altos estándares de privacidad.',
  },
  {
    icon: BarChart2,
    title: 'Orientación a resultados',
    desc: 'Medimos el impacto de cada intervención con indicadores concretos. Sin resultados no hay éxito.',
  },
  {
    icon: Users,
    title: 'Experiencia sectorial',
    desc: 'Conocemos el entorno industrial y corporativo mexicano. Nuestras soluciones no son genéricas.',
  },
];

export default function Nosotros() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-gradient-to-br from-[#0A3A7A] to-[#1173E4] py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-sora text-4xl md:text-5xl font-bold text-white mb-6">
                Quiénes somos
              </h1>
              <p className="text-white/70 text-xl leading-relaxed">
                Humanika es una consultoría especializada en salud mental organizacional con más de 5 años transformando entornos laborales en México con metodología, evidencia y resultados medibles.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-8 bg-[#FDFDFD] rounded-xl border-l-4 border-[#1173E4]">
                <div className="w-10 h-10 bg-[#D6E8FF] rounded-lg flex items-center justify-center mb-6">
                  <Target size={20} className="text-[#1173E4]" />
                </div>
                <h2 className="font-sora text-xl font-bold text-[#191616] mb-3">Misión</h2>
                <p className="text-[#5A6478] leading-relaxed">
                  Transformar entornos organizacionales a través de la salud mental fundamentada en evidencia, generando organizaciones más productivas, humanas y resilientes.
                </p>
              </div>
              <div className="p-8 bg-[#FDFDFD] rounded-xl border-l-4 border-[#00C2A0]">
                <div className="w-10 h-10 bg-[#D6E8FF] rounded-lg flex items-center justify-center mb-6">
                  <Eye size={20} className="text-[#1173E4]" />
                </div>
                <h2 className="font-sora text-xl font-bold text-[#191616] mb-3">Visión</h2>
                <p className="text-[#5A6478] leading-relaxed">
                  Ser la consultoría de referencia en salud mental organizacional en el sector industrial de México, reconocida por la solidez técnica y el impacto real en los resultados de negocio.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#FDFDFD]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-sora text-3xl font-bold text-[#191616] mb-4">Nuestros valores</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-[#D6E8FF] rounded-lg flex items-center justify-center mb-5">
                    <Icon size={18} className="text-[#1173E4]" />
                  </div>
                  <h3 className="font-sora font-semibold text-[#191616] mb-3">{title}</h3>
                  <p className="text-sm text-[#5A6478] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#1173E4]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-sora text-3xl font-bold text-white mb-6">
              ¿Listo para conocernos?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Agenda una sesión de diagnóstico gratuito y descubre cómo Humanika puede transformar tu organización.
            </p>
            <Link
              href="/diagnostico-gratuito"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00C2A0] text-white font-semibold rounded-md hover:bg-[#00a88a] transition-colors"
            >
              Solicitar diagnóstico gratuito
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
