import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Medoxy Healthcare Pvt Ltd | Pharmaceutical Trading Company",
    template: "%s | Medoxy Healthcare Pvt Ltd",
  },
  description:
    "Medoxy Healthcare Pvt Ltd is an inquiry-focused pharmaceutical trading company showcasing gastroenterology products, trade quality, product documentation, and distributor partnership opportunities.",
  openGraph: {
    title: "Medoxy Healthcare Pvt Ltd",
    description: "Pharmaceutical trading company with a focused gastroenterology product portfolio.",
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 909,
        alt: "Medoxy Healthcare — Trusted partnerships. Better healthcare.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medoxy Healthcare Pvt Ltd",
    description: "Inquiry-led pharmaceutical trading catalog and healthcare product portfolio.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  alternates: {
    canonical: site.url,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: site.name,
    email: site.email,
    telephone: site.phone,
    url: site.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: "BLOCK D, GALI NO 7, SHYAM KUNJ, MARUTI KUNJ ROAD, BHONDSI",
      addressLocality: "Gurgaon",
      addressRegion: "Haryana",
      postalCode: "122102",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="font-sans" suppressHydrationWarning>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QYL11HEL3X"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-QYL11HEL3X');`}
        </Script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
