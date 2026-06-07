'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import HumanikaLogo from '@/components/HumanikaLogo';

const solutions = [
  { name: 'NOM-035 STPS', href: '/soluciones/nom-035' },
  { name: 'Evaluaciones Psicológicas', href: '/soluciones/evaluaciones-psicologicas' },
  { name: 'Programas de Bienestar', href: '/soluciones/programas-bienestar' },
  { name: 'Intervención en Crisis', href: '/soluciones/intervencion-crisis' },
  { name: 'Capacitación Corporativa', href: '/soluciones/capacitacion' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <HumanikaLogo height={40} color={scrolled ? '#191616' : 'white'} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Soluciones dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-[#191616] hover:text-primary transition-colors">
                Soluciones
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {solutionsOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  {solutions.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm text-[#191616] hover:bg-[#D6E8FF] hover:text-primary transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/nosotros" className="text-sm font-medium text-[#191616] hover:text-primary transition-colors">
              Nosotros
            </Link>
            <Link href="/recursos" className="text-sm font-medium text-[#5A6478] hover:text-primary transition-colors">
              Recursos
            </Link>
            <Link href="/casos-de-exito" className="text-sm font-medium text-[#5A6478] hover:text-primary transition-colors">
              Casos de Éxito
            </Link>
            <Link href="/contacto" className="text-sm font-medium text-[#191616] hover:text-primary transition-colors">
              Contacto
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex">
            <Link
              href="/diagnostico-gratuito"
              className="inline-flex items-center px-5 py-2.5 bg-[#00C2A0] text-white text-sm font-semibold rounded-md hover:bg-[#00a88a] transition-colors"
            >
              Diagnóstico Gratuito →
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-[#191616]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 pb-6 pt-4">
          <nav className="flex flex-col gap-1">
            <div className="mb-2">
              <p className="text-xs font-semibold text-[#5A6478] uppercase tracking-wider mb-2">Soluciones</p>
              {solutions.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block py-2 pl-3 text-sm text-[#191616] hover:text-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  {s.name}
                </Link>
              ))}
            </div>
            {[
              { name: 'Nosotros', href: '/nosotros' },
              { name: 'Recursos', href: '/recursos' },
              { name: 'Casos de Éxito', href: '/casos-de-exito' },
              { name: 'Contacto', href: '/contacto' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2.5 text-sm font-medium text-[#191616] border-t border-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <Link
              href="/diagnostico-gratuito"
              className="block text-center py-3 bg-[#00C2A0] text-white text-sm font-semibold rounded-md"
              onClick={() => setMenuOpen(false)}
            >
              Diagnóstico Gratuito →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
