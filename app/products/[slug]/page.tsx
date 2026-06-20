import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Download, PackageCheck, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/Badge";
import { HealthcareVisual } from "@/components/HealthcareVisual";
import { InquiryForm } from "@/components/InquiryForm";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { divisions, products } from "@/data/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  return {
    title: product ? product.name : "Product",
    description: product?.description,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const division = divisions.find((item) => item.slug === product.division);
  const related = products.filter((item) => item.division === product.division && item.slug !== product.slug).slice(0, 4);

  return (
    <>
      <section className="section-pad">
        <div className="container-grid grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <HealthcareVisual title={product.name} subtitle={product.category} variant="product" className="min-h-[520px]" />
          <div>
            <nav className="mb-5 text-sm font-bold text-medoxy-muted">
              <Link href="/">Home</Link> / <Link href="/divisions">Divisions</Link> / <Link href={`/divisions/${division?.slug}`}>{division?.name}</Link> / {product.name}
            </nav>
            <Badge tone="blue">{product.category}</Badge>
            <h1 className="mt-5 text-5xl font-black leading-tight text-medoxy-text md:text-7xl">{product.name}</h1>
            <p className="mt-5 text-xl font-bold text-medoxy-primary">{product.composition}</p>
            <p className="mt-5 text-lg leading-8 text-medoxy-muted">{product.description}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                ["Dosage Form", product.dosageForm],
                ["Packaging", product.packaging],
                ["Storage", "Store in a cool, dry place"],
                ["Availability", "Inquiry based"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-medoxy-border bg-white p-5">
                  <p className="text-xs font-black uppercase tracking-wide text-medoxy-muted">{label}</p>
                  <p className="mt-2 font-black text-medoxy-text">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad bg-white/45">
        <div className="container-grid grid gap-10 lg:grid-cols-[1fr_.9fr]">
          <div>
            <SectionHeader eyebrow="Product Overview" title="Clinical information for qualified healthcare inquiries." />
            <div className="grid gap-4 md:grid-cols-2">
              {[
                [ShieldCheck, "Key Features", "Quality-assured composition, practical dosage format, and distributor-ready packaging."],
                [PackageCheck, "Benefits", "Supports healthcare provider evaluation and institutional procurement discussions."],
                [Download, "Downloads", "Brochure and product information sheet can be requested through the inquiry form."],
              ].map(([Icon, title, text]) => (
                <article key={String(title)} className="rounded-lg border border-medoxy-border bg-white p-6">
                  <Icon className="mb-4 text-medoxy-primary" />
                  <h3 className="font-black text-medoxy-text">{String(title)}</h3>
                  <p className="mt-2 leading-7 text-medoxy-muted">{String(text)}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="Request Information" title="Product inquiry" />
            <InquiryForm productName={product.name} divisionName={division?.name} />
          </div>
        </div>
      </section>
      {related.length ? (
        <section className="section-pad">
          <div className="container-grid">
            <SectionHeader eyebrow="Related Products" title={`More from ${division?.name}`} />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => <ProductCard key={item.slug} product={item} />)}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
