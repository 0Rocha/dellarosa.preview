import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display-loaded",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dellarosa.vercel.app"),
  title: {
    default: `${site.name} | Chalés em Itapema - SC`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} | Chalés em Itapema - SC`,
    description: site.shortLead,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: site.heroImage.src,
        alt: site.heroImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Chalés em Itapema - SC`,
    description: site.shortLead,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: site.name,
  description: site.description,
  telephone: site.phone.tel,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.street}, ${site.address.neighborhood}`,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "BR",
  },
  url: "https://github.com/0Rocha/dellarosa",
  hasMap: site.maps.link,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
