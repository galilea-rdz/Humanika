import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://humanika.mx"),
  title: {
    default: "Humanika | Consultoría en Salud Mental Organizacional",
    template: "Humanika | %s",
  },
  description:
    "Consultoría especializada en NOM-035, salud mental laboral y prevención de riesgos psicosociales para empresas en México. Más de 2,000 evaluaciones aplicadas.",
  keywords: [
    "NOM-035",
    "salud mental organizacional",
    "riesgos psicosociales",
    "consultoría empresarial",
    "bienestar laboral",
    "México",
    "Monterrey",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://humanika.mx",
    siteName: "Humanika",
    title: "Humanika | Consultoría en Salud Mental Organizacional",
    description:
      "Consultoría especializada en NOM-035, salud mental laboral y prevención de riesgos psicosociales para empresas en México.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Humanika | Consultoría en Salud Mental Organizacional",
    description:
      "Consultoría especializada en NOM-035, salud mental laboral y prevención de riesgos psicosociales para empresas en México.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Humanika",
  url: "https://humanika.mx",
  description:
    "Consultoría especializada en salud mental organizacional, NOM-035 y prevención de riesgos psicosociales para empresas en México.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Monterrey",
    addressRegion: "Nuevo León",
    addressCountry: "MX",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+52-81-8207-4338",
    contactType: "customer service",
    email: "contacto@humanika.mx",
    areaServed: "MX",
    availableLanguage: "Spanish",
  },
  sameAs: ["https://www.linkedin.com/company/humanika"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="es" className={`${sora.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {gtmId && (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        )}
      </head>
      <body className="antialiased">
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  );
}
