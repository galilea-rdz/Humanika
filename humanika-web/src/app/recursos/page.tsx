import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, FileText, BookOpen, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Recursos',
  description: 'Próximamente: blog técnico, guías descargables y recursos sobre NOM-035, riesgos psicosociales y salud mental organizacional.',
};

const comingSoon = [
  { icon: BookOpen, title: 'Blog técnico', desc: 'Artículos sobre NOM-035, riesgos psicosociales y liderazgo organizacional.' },
  { icon: Download, title: 'Checklist NOM-035', desc: 'Guía descargable para evaluar el nivel de cumplimiento de tu empresa.' },
  { icon: FileText, title: 'Guías de implementación', desc: 'Documentos técnicos para gestores de RH y EHS.' },
];

export default function Recursos() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-gradient-to-br from-[#0d2a5e] to-[#1a5cb8] py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h1 className="font-sora text-4xl font-bold text-white mb-4">Recursos</h1>
            <p className="text-white/70 text-lg max-w-2xl">
              Contenido técnico para responsables de RH, EHS y líderes organizacionales que buscan información fundamentada.
            </p>
          </div>
        </section>
        <section className="py-24 bg-[#F8F9FB]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-[#EBF2FF] text-[#1a5cb8] text-sm font-semibold rounded-full mb-6">
                Próximamente
              </span>
              <h2 className="font-sora text-2xl font-bold text-[#0F1923]">
                Estamos preparando contenido de valor para tu organización
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {comingSoon.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm opacity-75">
                  <div className="w-10 h-10 bg-[#EBF2FF] rounded-lg flex items-center justify-center mb-4">
                    <Icon size={18} className="text-[#1a5cb8]" />
                  </div>
                  <h3 className="font-sora font-semibold text-[#0F1923] mb-2">{title}</h3>
                  <p className="text-sm text-[#5A6478]">{desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-[#5A6478] mb-6">¿Necesitas información ahora? Habla directamente con un especialista.</p>
              <Link
                href="/diagnostico-gratuito"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00C2A0] text-white font-semibold rounded-md hover:bg-[#00a88a] transition-colors"
              >
                Diagnóstico gratuito <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
