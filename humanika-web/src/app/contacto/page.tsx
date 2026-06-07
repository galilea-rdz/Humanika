import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DiagnosticForm from "@/components/DiagnosticForm";
import { Mail, Phone, MessageCircle, ExternalLink, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contáctanos para conocer más sobre nuestros servicios de consultoría en salud mental organizacional. Monterrey, N.L. — Servicio nacional.",
};

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-gradient-to-br from-[#0d2a5e] via-[#1a5cb8] to-[#0d4a8c] py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="font-sora text-4xl md:text-5xl font-bold text-white mb-4">
              Contáctanos
            </h1>
            <p className="text-white/70 text-lg">
              Estamos para ayudarte. Cuéntanos sobre tu organización y te contactamos en menos de 24 horas hábiles.
            </p>
          </div>
        </section>

        <section className="py-20 bg-[#F8F9FB]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Contact info */}
              <div>
                <h2 className="font-sora text-2xl font-bold text-[#0F1923] mb-6">
                  Información de contacto
                </h2>
                <div className="flex flex-col gap-5">
                  <a href="mailto:contacto@humanika.mx" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-[#EBF2FF] rounded-full flex items-center justify-center group-hover:bg-[#1a5cb8] transition-colors">
                      <Mail className="w-5 h-5 text-[#1a5cb8] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-[#5A6478] mb-0.5">Correo electrónico</p>
                      <p className="font-medium text-[#0F1923]">contacto@humanika.mx</p>
                    </div>
                  </a>
                  <a href="tel:+528182074338" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-[#EBF2FF] rounded-full flex items-center justify-center group-hover:bg-[#1a5cb8] transition-colors">
                      <Phone className="w-5 h-5 text-[#1a5cb8] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-[#5A6478] mb-0.5">Teléfono</p>
                      <p className="font-medium text-[#0F1923]">+52 1 81 8207 4338</p>
                    </div>
                  </a>
                  <a href="https://wa.me/528182074338" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-[#EBF2FF] rounded-full flex items-center justify-center group-hover:bg-[#1a5cb8] transition-colors">
                      <MessageCircle className="w-5 h-5 text-[#1a5cb8] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-[#5A6478] mb-0.5">WhatsApp</p>
                      <p className="font-medium text-[#0F1923]">Escríbenos por WhatsApp</p>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/company/humanika" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-[#EBF2FF] rounded-full flex items-center justify-center group-hover:bg-[#1a5cb8] transition-colors">
                      <ExternalLink className="w-5 h-5 text-[#1a5cb8] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-[#5A6478] mb-0.5">LinkedIn</p>
                      <p className="font-medium text-[#0F1923]">linkedin.com/company/humanika</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#EBF2FF] rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#1a5cb8]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#5A6478] mb-0.5">Ubicación</p>
                      <p className="font-medium text-[#0F1923]">Monterrey, N.L. · Servicio nacional</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-white rounded-[8px] shadow-sm border border-gray-100 p-8">
                <h2 className="font-sora text-xl font-bold text-[#0F1923] mb-6">
                  Solicita información
                </h2>
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
