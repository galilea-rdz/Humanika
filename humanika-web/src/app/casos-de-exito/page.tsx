import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Casos de Éxito',
  description: 'Próximamente: casos de éxito reales de Humanika en empresas mexicanas. Resultados medibles en NOM-035, bienestar organizacional y reducción de riesgos psicosociales.',
};

export default function CasosDeExito() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-32 bg-[#FDFDFD]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="w-16 h-16 bg-[#D6E8FF] rounded-full flex items-center justify-center mx-auto mb-8">
              <Clock size={28} className="text-[#1173E4]" />
            </div>
            <h1 className="font-sora text-3xl md:text-4xl font-bold text-[#191616] mb-6">
              Casos de Éxito
            </h1>
            <p className="text-[#5A6478] text-lg leading-relaxed mb-4">
              Estamos documentando casos reales de transformación organizacional con métricas concretas y resultados verificables.
            </p>
            <p className="text-[#5A6478] mb-10">
              Esta sección estará disponible próximamente con estudios de caso de empresas en manufactura, sector corporativo y organizaciones con requerimientos NOM-035.
            </p>
            <Link
              href="/diagnostico-gratuito"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1173E4] text-white font-semibold rounded-md hover:bg-[#0D5CC4] transition-colors"
            >
              Solicita tu diagnóstico gratuito
              <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
