import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Layers, PackageCheck, Star, Tags } from "lucide-react";
import { Badge } from "@/components/Badge";
import { ProductExplorer } from "@/components/ProductExplorer";
import { SectionHeader } from "@/components/SectionHeader";
import { divisions, products, site } from "@/data/site";

export function generateStaticParams() {
  return divisions.map((division) => ({ slug: division.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const division = divisions.find((item) => item.slug === slug);
  if (!division) return { title: "Division" };

  const url = `${site.url}/divisions/${division.slug}`;
  const socialImage = `${site.url}/og-medoxy.jpg`;
  return {
    title: division.name,
    description: division.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${division.name} Product Division | ${site.shortName}`,
      description: division.description,
      siteName: site.name,
      images: [{
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Medoxy Healthcare — Trusted partnerships. Better healthcare.",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${division.name} Product Division | ${site.shortName}`,
      description: division.description,
      images: [socialImage],
    },
  };
}

export default async function DivisionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const division = divisions.find((item) => item.slug === slug);
  if (!division) notFound();

  const divisionProducts = products.filter((product) => product.division === division.slug);
  const categoryCount = new Set(divisionProducts.map((product) => product.category)).size;
  const dosageFormCount = new Set(divisionProducts.map((product) => product.dosageForm)).size;
  const featuredCount = divisionProducts.filter((product) => product.featured).length;
  const statCards = [
    [Layers, "Catalogue entries", String(divisionProducts.length)],
    [Tags, "Listed categories", String(categoryCount)],
    [PackageCheck, "Listed dosage forms", String(dosageFormCount)],
    [Star, "Featured entries", String(featuredCount)],
  ];
  const url = `${site.url}/divisions/${division.slug}`;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Divisions", item: `${site.url}/divisions` },
      { "@type": "ListItem", position: 3, name: division.name, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
      />

      <section className="section-pad detail-hero">
        <div className="container-grid grid gap-10 lg:grid-cols-[1fr_.82fr]">
          <div>
            <nav className="mb-5 text-sm font-bold text-medoxy-muted" aria-label="Breadcrumb">
              <Link href="/">Home</Link> <span className="mx-2">/</span>
              <Link href="/divisions">Divisions</Link> <span className="mx-2">/</span>
              <span aria-current="page">{division.name}</span>
            </nav>
            <Badge tone="blue">Product division</Badge>
            <h1 className="mt-5 text-5xl font-black leading-tight text-medoxy-text md:text-7xl">{division.name}</h1>
            <p className="mt-6 text-xl leading-9 text-medoxy-muted">{division.description}</p>
            <p className="mt-4 max-w-3xl text-sm font-semibold leading-6 text-medoxy-muted">
              Categories are provided for B2B catalogue navigation and do not establish an approved indication, product
              classification, clinical suitability, or destination-market availability.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge tone="neutral">{divisionProducts.length} catalogue entries</Badge>
              <Badge tone="neutral">{categoryCount} listed categories</Badge>
              <Badge tone="neutral">{dosageFormCount} listed dosage forms</Badge>
              <Badge tone="neutral">Product-specific inquiries</Badge>
            </div>
            <ul className="mt-8 grid gap-3 text-medoxy-muted">
              {division.benefits.map((benefit) => (
                <li key={benefit} className="card-minimal px-4 py-3 font-semibold">{benefit}</li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 card-panel p-5 md:grid-cols-2">
            {statCards.map(([Icon, label, value]) => (
              <div key={String(label)} className="card p-5">
                <Icon className="mb-5 text-medoxy-primary" size={30} />
                <p className="text-3xl font-black text-medoxy-text">{String(value)}</p>
                <p className="mt-2 text-sm font-bold text-medoxy-muted">{String(label)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-surface">
        <div className="container-grid">
          <SectionHeader
            eyebrow="Products"
            title={`${division.name} product catalogue`}
            text="Search the current catalogue fields, compare listed formats and packs, and submit a qualified request for applicable product information."
          />
          <ProductExplorer divisionSlug={division.slug} />
        </div>
      </section>
    </>
  );
}
