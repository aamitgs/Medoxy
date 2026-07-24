import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Download, Info, PackageCheck, ShieldCheck } from "lucide-react";
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
      <section className="section-pad detail-hero">
        <div className="container-grid grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          {product.image ? (
            <div className="overflow-hidden rounded-[28px] bg-white shadow-soft">
              <Image src={product.image} alt={product.name} width={900} height={520} className="h-full w-full object-cover" />
            </div>
          ) : (
            <HealthcareVisual title={product.name} subtitle={product.category} variant="product" className="min-h-[520px]" />
          )}
          <div>
            <nav className="mb-5 text-sm font-bold text-medoxy-muted">
              <Link href="/">Home</Link> / <Link href="/divisions">Division</Link> / <Link href={`/divisions/${division?.slug}`}>{division?.name}</Link> / {product.name}
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
                <div key={label} className="card p-5">
                  <p className="text-xs font-black uppercase tracking-wide text-medoxy-muted">{label}</p>
                  <p className="mt-2 font-black text-medoxy-text">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-medoxy-border bg-white p-5 text-sm font-semibold leading-6 text-medoxy-muted">
              <Info className="mt-0.5 shrink-0 text-medoxy-primary" size={18} />
              Product information is intended for qualified healthcare and trade inquiries. Use medicines only under qualified medical supervision.
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad section-surface">
        <div className="container-grid grid gap-10 lg:grid-cols-[1fr_.9fr]">
          <div>
            <SectionHeader eyebrow="Product Overview" title="Trade-ready information for qualified healthcare inquiries." />
            <div className="grid gap-4 md:grid-cols-2">
              {[
                [ShieldCheck, "Key Features", "Quality-aware sourcing, practical dosage format, and distributor-ready packaging."],
                [PackageCheck, "Benefits", "Supports healthcare provider evaluation, distributor review, and institutional procurement discussions."],
                [Download, "Documents", "Brochure, product information sheet, and trade documents can be requested through the inquiry form."],
              ].map(([Icon, title, text]) => (
                <article key={String(title)} className="card p-6">
                  <Icon className="mb-4 text-medoxy-primary" />
                  <h3 className="font-black text-medoxy-text">{String(title)}</h3>
                  <p className="mt-2 leading-7 text-medoxy-muted">{String(text)}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="Request Information" title="Ask for product documents" />
            <div className="rounded-[28px] border border-white bg-white p-7 shadow-[0_20px_60px_rgba(7,27,53,0.08)]">
              <InquiryForm premium productName={product.name} divisionName={division?.name} />
            </div>
          </div>
        </div>
      </section>
      {related.length ? (
        <section className="section-pad section-health">
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
