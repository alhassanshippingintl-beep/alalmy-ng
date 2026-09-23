import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const title = site.activity;
const description = `${site.tagline} — ${site.product.name} ${site.product.netWeight}. ${site.intro}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: { default: title, template: `%s | ${site.brand}` },
  description,
  applicationName: site.brand,
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/icon-192.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: site.siteUrl,
    title,
    description,
    siteName: site.brand,
    images: [{ url: "/images/photo-front.webp", width: 708, height: 1066, alt: `${site.product.name} — ${site.brand}` }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/photo-front.webp"] },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#1A4FA0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.activity,
    alternateName: site.brand,
    url: site.siteUrl,
    telephone: `+2${site.phoneTel}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "البسيونية – طريق سيلا المحطة",
      addressLocality: "مركز الفيوم",
      addressRegion: "محافظة الفيوم",
      addressCountry: "EG",
    },
    areaServed: "EG",
  };
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: site.product.name,
    brand: { "@type": "Brand", name: site.brand },
    description: site.intro,
    image: `${site.siteUrl}/images/photo-front.webp`,
    countryOfOrigin: "EG",
    weight: { "@type": "QuantitativeValue", value: "1", unitCode: "KGM" },
  };
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-cairo antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
