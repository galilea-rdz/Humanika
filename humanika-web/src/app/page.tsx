import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DiagnosticForm from '@/components/DiagnosticForm';
import StatCounter from '@/components/StatCounter';
import {
  TrendingDown, UserMinus, Flame, AlertTriangle,
  MessageSquareX, BarChart2, BrainCircuit, ShieldAlert,
  CheckCircle2, ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Consultoría en Salud Mental Organizacional | NOM-035 México',
  description:
    'Humanika: consultoría especializada en NOM-035, salud mental laboral y prevención de riesgos psicosociales para empresas en México. +2,000 evaluaciones aplicadas.',
};

const problems = [
  {
    icon: TrendingDown,
    title: 'Alta rotación',
    desc: 'Costo oculto que erosiona la productividad y el conocimiento institucional.',
  },
  {
    icon: UserMinus,
    title: 'Ausentismo recurrente',
    desc: 'Indicador temprano de factores psicosociales no gestionados.',
  },
  {
    icon: Flame,
    title: 'Burnout y agotamiento',
    desc: 'Afecta el desempeño individual y el clima del equipo completo.',
  },
  {
    icon: AlertTriangle,
    title: 'Incumplimiento NOM-035',
    desc: 'Riesgo legal y reputacional con consecuencias ante la STPS.',
  },
  {
    icon: MessageSquareX,
    title: 'Conflictos internos',
    desc: 'Deterioran la cultura y generan pasivos laborales.',
  },
  {
    icon: BarChart2,
    title: 'Sin datos de clima laboral',
    desc: 'Decisiones de RH sin evidencia ni métricas confiables.',
  },
  {
    icon: BrainCircuit,
    title: 'Estrés laboral crónico',
    desc: 'Impacta calidad, seguridad industrial y resultados.',
  },
  {
    icon: ShieldAlert,
    title: 'Violencia o acoso laboral',
    desc: 'Riesgo legal, humano y de reputación para la empresa.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Diagnóstico',
    desc: 'Identificamos los factores de riesgo psicosocial con evidencia técnica. Evaluaciones psicológicas, encuestas NOM-035, entrevistas.',
  },
  {
    num: '02',
    title: 'Intervención',
    desc: 'Diseñamos e implementamos soluciones específicas para tu organización: capacitación, programas de bienestar, atención psicológica, intervención grupal.',
  },
  {
    num: '03',
    title: 'Seguimiento',
    desc: 'Medimos el impacto y ajustamos para asegurar resultados sostenibles en el tiempo.',
  },
];

const industries = [
  'Manufactura',
  'Sector corporativo multinacional',
  'Empresas medianas con certificaciones ISO',
  'Organizaciones con requerimientos NOM-035 activos',
];

const benefits = [
  'Sin costo ni compromiso',
  'Sesión de 30 minutos con especialista',
  'Identificación de brechas NOM-035',
  'Plan de acción inicial personalizado',
  'Confidencialidad garantizada',
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0A3A7A] via-[#1173E4] to-[#0B4FC2]">
          {/* Geometric background shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-white/5 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#00C2A0]/10 -translate-x-1/3 translate-y-1/3" />
            <div className="absolute top-0 left-1/2 w-px h-full bg-white/5" />
            <div className="absolute top-1/3 right-1/4 w-48 h-48 border border-white/10 rounded-full" />
            <div className="absolute bottom-1/4 right-1/3 w-24 h-24 border border-[#00C2A0]/20 rotate-45" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 w-full">
            <div className="max-w-3xl">
              <div className="flex gap-6 mb-8">
                <span className="inline-flex items-center px-3 py-1 bg-white/10 text-white/80 text-xs font-medium rounded-full">
                  Consultoría NOM-035
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-[#00C2A0]/20 text-[#00C2A0] text-xs font-medium rounded-full">
                  Monterrey · Servicio nacional
                </span>
              </div>

              <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Convierte el bienestar de tu equipo en{' '}
                <span className="text-[#00C2A0]">resultados medibles.</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
                Consultoría especializada en NOM-035, salud mental laboral y prevención de riesgos psicosociales para empresas en México.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/diagnostico-gratuito"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#00C2A0] text-white font-semibold rounded-md hover:bg-[#00a88a] transition-colors text-base"
                >
                  Solicita tu diagnóstico gratuito
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="#soluciones"
                  className="inline-flex items-center justify-center px-7 py-4 border border-white/30 text-white font-medium rounded-md hover:bg-white/10 transition-colors text-base"
                >
                  Ver soluciones
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-white/60">
                <span>+2,000 evaluaciones</span>
                <span className="hidden sm:block">·</span>
                <span>+700 colaboradores atendidos</span>
                <span className="hidden sm:block">·</span>
                <span>Experiencia en manufactura</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Sección 1: Problemas ─────────────────────────────── */}
        <section id="problemas" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-sora text-3xl md:text-4xl font-bold text-[#191616] mb-4">
                ¿Reconoces alguno de estos problemas<br className="hidden md:block" /> en tu organización?
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {problems.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="group p-6 bg-[#FDFDFD] border-l-4 border-[#1173E4] rounded-r-lg hover:shadow-md hover:bg-white transition-all duration-200"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#D6E8FF] mb-4 group-hover:bg-[#1173E4] transition-colors">
                    <Icon size={18} className="text-[#1173E4] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-sora font-semibold text-[#191616] mb-2">{title}</h3>
                  <p className="text-sm text-[#5A6478] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-14 text-center">
              <p className="text-[#5A6478] mb-6 text-lg">
                Si identificas uno o más de estos escenarios, Humanika puede ayudarte.
              </p>
              <Link
                href="/diagnostico-gratuito"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1173E4] text-white font-semibold rounded-md hover:bg-[#0D5CC4] transition-colors"
              >
                Habla con un especialista
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Sección 2: Metodología ──────────────────────────── */}
        <section id="soluciones" className="py-24 bg-[#FDFDFD]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-sora text-3xl md:text-4xl font-bold text-[#191616] mb-4">
                Metodología Humanika: de la evidencia a la acción
              </h2>
            </div>
            <div className="relative">
              <div className="hidden lg:block absolute top-12 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-[#1173E4]/20" />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {steps.map((step, i) => (
                  <div key={step.num} className="relative">
                    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 h-full">
                      <span className="font-sora text-5xl font-bold text-[#D6E8FF] leading-none block mb-4">
                        {step.num}
                      </span>
                      <h3 className="font-sora text-xl font-bold text-[#1173E4] mb-4 uppercase tracking-wide">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#5A6478] leading-relaxed">{step.desc}</p>
                    </div>
                    {i < 2 && (
                      <div className="hidden lg:flex absolute top-12 -right-4 z-10 w-8 h-8 bg-white border border-[#1173E4]/20 rounded-full items-center justify-center">
                        <ArrowRight size={14} className="text-[#1173E4]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-[#5A6478] mt-10 max-w-2xl mx-auto">
              Cada intervención se diseña con base en los datos de tu organización. Sin soluciones genéricas.
            </p>
          </div>
        </section>

        {/* ── Sección 3: Resultados ───────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-sora text-3xl md:text-4xl font-bold text-[#191616] mb-4">
                Resultados que hablan por sí solos
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
              <StatCounter value={2000} prefix="+" label="Evaluaciones psicológicas aplicadas" />
              <StatCounter value={700} prefix="+" label="Colaboradores atendidos directamente" />
              <StatCounter value={2300} prefix="+" label="Sesiones realizadas" />
              <StatCounter value={5} suffix="+" label="Años de experiencia en entornos corporativos" />
            </div>

            <div className="mb-12">
              <p className="text-center text-xs font-semibold text-[#5A6478] uppercase tracking-wider mb-5">
                Experiencia en sectores
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {industries.map((ind) => (
                  <span
                    key={ind}
                    className="px-4 py-2 bg-[#D6E8FF] text-[#1173E4] text-sm font-medium rounded-full"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            <div className="max-w-3xl mx-auto bg-[#FDFDFD] border border-[#D6E8FF] rounded-xl p-8 text-center">
              <p className="text-[#191616] leading-relaxed">
                <strong>Humanika no ofrece talleres de wellness genéricos.</strong> Cada intervención está sustentada en evaluación psicológica, metodología clínica y conocimiento del entorno laboral mexicano.
              </p>
            </div>
          </div>
        </section>

        {/* ── Sección 4: Formulario Diagnóstico ──────────────── */}
        <section id="diagnostico" className="py-24 bg-[#FDFDFD]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left: info */}
              <div>
                <h2 className="font-sora text-3xl md:text-4xl font-bold text-[#191616] mb-4">
                  Solicita tu diagnóstico organizacional gratuito
                </h2>
                <p className="text-[#5A6478] text-lg mb-10">
                  En 30 minutos identificamos los principales factores de riesgo psicosocial en tu organización y te presentamos un plan de acción inicial.
                </p>
                <ul className="flex flex-col gap-4">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-[#00C2A0] mt-0.5 flex-shrink-0" />
                      <span className="text-[#191616] font-medium">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: form */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <DiagnosticForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
