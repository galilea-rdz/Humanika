import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso legal de Humanika. Términos y condiciones de uso del sitio web.",
};

export default function AvisoLegalPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="font-sora text-3xl md:text-4xl font-bold text-[#0F1923] mb-2">
              Aviso Legal
            </h1>
            <p className="text-[#5A6478] text-sm mb-10">Última actualización: junio 2025</p>

            <div className="space-y-8 text-[#5A6478]">
              <section>
                <h2 className="font-sora text-xl font-bold text-[#0F1923] mb-3">Titularidad del sitio</h2>
                <p>
                  El presente sitio web es propiedad y está operado por <strong>Humanika</strong>, con domicilio en Monterrey, Nuevo León, México. Para cualquier consulta: <a href="mailto:contacto@humanika.mx" className="text-[#1a5cb8] underline">contacto@humanika.mx</a>.
                </p>
              </section>

              <section>
                <h2 className="font-sora text-xl font-bold text-[#0F1923] mb-3">Uso del sitio</h2>
                <p>
                  El acceso y uso de este sitio web está sujeto a los presentes términos. Al navegar en este sitio, el usuario acepta estas condiciones. Humanika se reserva el derecho de modificar el contenido del sitio sin previo aviso.
                </p>
              </section>

              <section>
                <h2 className="font-sora text-xl font-bold text-[#0F1923] mb-3">Propiedad intelectual</h2>
                <p>
                  Todos los contenidos de este sitio (textos, gráficos, logotipos, diseño) son propiedad de Humanika o de terceros que han autorizado su uso. Queda prohibida su reproducción total o parcial sin autorización expresa.
                </p>
              </section>

              <section>
                <h2 className="font-sora text-xl font-bold text-[#0F1923] mb-3">Limitación de responsabilidad</h2>
                <p>
                  La información contenida en este sitio tiene carácter informativo y no constituye asesoramiento profesional. Humanika no se responsabiliza por el uso que el usuario haga de dicha información.
                </p>
              </section>

              <section>
                <h2 className="font-sora text-xl font-bold text-[#0F1923] mb-3">Legislación aplicable</h2>
                <p>
                  El presente aviso legal se rige por las leyes de los Estados Unidos Mexicanos. Para cualquier controversia, las partes se someten a los tribunales competentes de Monterrey, Nuevo León.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
