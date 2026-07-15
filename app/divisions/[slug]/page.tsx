import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Award, BadgeCheck, Globe2, Layers } from "lucide-react";
import { Badge } from "@/components/Badge";
import { ProductExplorer } from "@/components/ProductExplorer";
import { SectionHeader } from "@/components/SectionHeader";
import { divisions, products } from "@/data/site";

export function generateStaticParams() {
  return divisions.map((division) => ({ slug: division.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const division = divisions.find((item) => item.slug === slug);
  return {
    title: division ? `${division.name}` : "Division",
    description: division?.description,
  };
}

export default async function DivisionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const division = divisions.find((item) => item.slug === slug);
  if (!division) notFound();
  const count = products.filter((product) => product.division === division.slug).length;
  const statCards = [
    [Layers, "Total Products", `${count}+`],
    [Award, "Trade Experience", "10+"],
    [BadgeCheck, "Vendor Standards", "WHO-GMP"],
    [Globe2, "Distribution Reach", "India"],
  ];

  return (
    <>
      <section className="section-pad section-health">
        <div className="container-grid grid gap-10 lg:grid-cols-[1fr_.82fr]">
          <div>
            <nav className="mb-5 text-sm font-bold text-medoxy-muted">
              <Link href="/">Home</Link> / <Link href="/divisions">Division</Link> / {division.name}
            </nav>
            <Badge tone="blue">Gastroenterology</Badge>
            <h1 className="mt-5 text-5xl font-black leading-tight text-medoxy-text md:text-7xl">{division.name}</h1>
            <p className="mt-6 text-xl leading-9 text-medoxy-muted">{division.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["WHO-GMP Oriented Vendors", "Gastroenterology", "Quality-Aware Trading", "Digestive Health Range"].map((item) => <Badge key={item} tone="neutral">{item}</Badge>)}
            </div>
            <ul className="mt-8 grid gap-3 text-medoxy-muted">
              {division.benefits.map((benefit) => <li key={benefit} className="card-minimal px-4 py-3 font-semibold">{benefit}</li>)}
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
          <SectionHeader eyebrow="Products" title={`${division.name} product range`} text="Search and filter gastroenterology products, then request trade-ready product information from Medoxy." />
          <ProductExplorer divisionSlug={division.slug} />
        </div>
      </section>
    </>
  );
}
