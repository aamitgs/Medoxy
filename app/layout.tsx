import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Medoxy Healthcare Pvt Ltd | Premium Healthcare & Pharmaceutical Solutions",
    template: "%s | Medoxy Healthcare Pvt Ltd",
  },
  description:
    "Medoxy Healthcare Pvt Ltd is an inquiry-focused healthcare and pharmaceutical company showcasing product divisions, manufacturing quality, compliance, and partnership opportunities.",
  openGraph: {
    title: "Medoxy Healthcare Pvt Ltd",
    description: "Premium healthcare and pharmaceutical product division experience.",
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medoxy Healthcare Pvt Ltd",
    description: "Inquiry-led healthcare product catalog and pharmaceutical brand presence.",
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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans" suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
