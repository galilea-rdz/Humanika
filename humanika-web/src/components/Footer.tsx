import Link from 'next/link';
import { ExternalLink, Mail, Phone, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0F1923] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-sora font-bold text-xl text-white">Humanika</span>
            </Link>
            <p className="text-[#5A6478] text-sm leading-relaxed mb-6">
              Salud mental organizacional que genera resultados.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contacto@humanika.mx"
                className="flex items-center gap-2 text-sm text-[#5A6478] hover:text-white transition-colors"
              >
                <Mail size={14} />
                contacto@humanika.mx
              </a>
              <a
                href="tel:+528182074338"
                className="flex items-center gap-2 text-sm text-[#5A6478] hover:text-white transition-colors"
              >
                <Phone size={14} />
                +52 81 8207 4338
              </a>
              <a
                href="https://wa.me/528182074338"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#5A6478] hover:text-white transition-colors"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/company/humanika"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#5A6478] hover:text-white transition-colors"
              >
                <ExternalLink size={14} />
                LinkedIn
              </a>
              <span className="flex items-center gap-2 text-sm text-[#5A6478]">
                <MapPin size={14} />
                Monterrey, N.L. · Servicio nacional
              </span>
            </div>
          </div>

          {/* Soluciones */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#5A6478] mb-4">Soluciones</h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: 'NOM-035 STPS', href: '/soluciones/nom-035' },
                { name: 'Evaluaciones Psicológicas', href: '/soluciones/evaluaciones-psicologicas' },
                { name: 'Programas de Bienestar', href: '/soluciones/programas-bienestar' },
                { name: 'Intervención en Crisis', href: '/soluciones/intervencion-crisis' },
                { name: 'Capacitación Corporativa', href: '/soluciones/capacitacion' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[#5A6478] hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#5A6478] mb-4">Recursos</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <span className="text-sm text-[#5A6478] opacity-50">Blog (próximamente)</span>
              </li>
              <li>
                <span className="text-sm text-[#5A6478] opacity-50">Guías descargables (próximamente)</span>
              </li>
              <li>
                <Link href="/casos-de-exito" className="text-sm text-[#5A6478] hover:text-white transition-colors">
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <Link href="/diagnostico-gratuito" className="text-sm text-[#5A6478] hover:text-white transition-colors">
                  Diagnóstico Gratuito
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#5A6478] mb-4">Legal</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/privacidad" className="text-sm text-[#5A6478] hover:text-white transition-colors">
                  Aviso de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/aviso-legal" className="text-sm text-[#5A6478] hover:text-white transition-colors">
                  Aviso Legal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#1e2d3d] flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-xs text-[#5A6478]">
            © {new Date().getFullYear()} Humanika. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="/privacidad" className="text-xs text-[#5A6478] hover:text-white transition-colors">
              Privacidad
            </Link>
            <Link href="/aviso-legal" className="text-xs text-[#5A6478] hover:text-white transition-colors">
              Aviso Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
