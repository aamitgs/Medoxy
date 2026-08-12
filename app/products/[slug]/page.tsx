import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, FileText, Info, PackageCheck, Truck } from "lucide-react";
import { Badge } from "@/components/Badge";
import { HealthcareVisual } from "@/components/HealthcareVisual";
import { InquiryForm } from "@/components/InquiryForm";
import { MedicineInformation } from "@/components/MedicineInformation";
import { ProductCard } from "@/components/ProductCard";
import { ProductImageGallery } from "@/components/ProductImageGallery";
import { SectionHeader } from "@/components/SectionHeader";
import { divisions, products, site } from "@/data/site";

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
      <section className="border-b border-slate-200 bg-white py-6 md:py-10">
        <div className="container-grid">
          <nav className="mb-6 text-sm font-semibold text-medoxy-muted">
            <Link href="/">Home</Link> <span className="mx-2 text-slate-300">/</span>
            <Link href="/products">Products</Link> <span className="mx-2 text-slate-300">/</span>
            <span className="text-medoxy-text">{product.name}</span>
          </nav>
          <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,.88fr)_minmax(0,1.12fr)] lg:gap-10 xl:gap-12">
          <div className="order-2 min-w-0 lg:order-1">
            {product.image ? (
              <ProductImageGallery name={product.name} mainImage={product.image} gallery={product.gallery ?? []} />
            ) : (
              <HealthcareVisual title={product.name} subtitle={product.category} variant="product" className="min-h-[520px]" />
            )}
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_35px_rgba(7,27,53,.08)] lg:hidden">
              <p className="text-xs font-black uppercase tracking-[.12em] text-medoxy-primary">Product &amp; trade support</p><h2 className="mt-1 text-xl font-black text-medoxy-text">Need documents or availability?</h2>
              <a href="#product-inquiry" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-medoxy-primary px-6 py-3.5 text-sm font-black text-white">Request information <ArrowRight size={17}/></a>
            </div>
          </div>
          <div className="order-1 py-1 lg:order-2">
            <div className="flex flex-wrap items-center gap-3"><Badge tone="blue">{product.category}</Badge><span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-rose-700">Rx · Prescription product</span><span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wide text-emerald-700"><CheckCircle2 size={15}/> Verified product information</span></div>
            <h1 className="mt-4 text-4xl font-black leading-[1.08] tracking-tight text-medoxy-text md:text-5xl">{product.name}</h1>
            <p className="mt-3 text-xl font-bold leading-8 text-medoxy-primary">{product.composition}</p>
            <p className="mt-4 max-w-2xl leading-7 text-medoxy-muted">{product.description}</p>
            <div className="mt-6 hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_35px_rgba(7,27,53,.08)] lg:block">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-xs font-black uppercase tracking-[.12em] text-medoxy-primary">Product &amp; trade support</p><h2 className="mt-1 text-xl font-black text-medoxy-text">Need documents or availability?</h2></div><a href="#product-inquiry" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-medoxy-primary px-6 py-3.5 text-sm font-black text-white transition hover:bg-[#071b35]">Request information <ArrowRight size={17}/></a></div>
              <div className="mt-5 grid gap-3 border-t border-slate-100 pt-4 text-sm font-bold text-medoxy-text sm:grid-cols-3">{[[FileText,"Product sheet"],[PackageCheck,"Pack details"],[Truck,"Trade availability"]].map(([Icon,label])=><div key={String(label)} className="flex items-center gap-2"><Icon size={17} className="text-emerald-600"/>{String(label)}</div>)}</div>
            </div>
            <p className="mt-4 hidden text-center text-sm font-semibold text-medoxy-muted lg:block">Prefer email? <a href={`mailto:${site.email}?subject=${encodeURIComponent(`Inquiry about ${product.name}`)}`} className="font-black text-medoxy-primary">{site.email}</a></p>
          </div>
          </div>
          <details className="group mx-auto mt-10 w-full max-w-6xl overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_55px_rgba(7,27,53,.09)]">
            <summary className="flex cursor-pointer list-none items-center justify-between bg-gradient-to-r from-[#f3f7ff] via-white to-white px-6 py-6 marker:hidden md:px-10 md:py-8">
              <div><p className="text-xs font-black uppercase tracking-[.18em] text-medoxy-primary">Product information</p><h2 className="mt-2 text-2xl font-black text-medoxy-text md:text-3xl">Essential product details, clearly presented</h2></div>
              <span className="rounded-full border border-slate-200 px-4 py-2 text-xs font-black text-medoxy-primary group-open:hidden">View details</span><span className="hidden rounded-full border border-slate-200 px-4 py-2 text-xs font-black text-medoxy-primary group-open:inline">Hide details</span>
            </summary>
            <dl className="divide-y divide-slate-100">
              {[
                ["Brand name", product.name],
                ["Composition", product.composition],
                ["Dosage form", product.dosageForm],
                ["Pack size", product.packaging],
                ["Therapeutic category", product.category],
                ["Division", division?.name ?? "Gastroenterology"],
                ["Company", "Medoxy Healthcare Pvt Ltd"],
                ["Storage", "Store in a cool, dry place, protected from light and moisture"],
              ].map(([label, value]) => (
                <div key={label} className="px-6 py-5 md:grid md:grid-cols-[230px_minmax(0,1fr)] md:items-start md:gap-10 md:px-10 md:py-6">
                  <dt className="text-xs font-black uppercase tracking-[.08em] text-medoxy-muted">{label}</dt>
                  <dd className="mt-2 text-base font-bold leading-7 text-medoxy-text md:mt-0">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="flex items-start gap-3 bg-blue-50/70 px-6 py-5 text-sm font-semibold leading-6 text-medoxy-muted md:px-10"><Info className="mt-0.5 shrink-0 text-medoxy-primary" size={19}/><p>Prescription product information for qualified healthcare and trade inquiries. Use only under qualified medical supervision.</p></div>
          </details>
        </div>
      </section>
      <MedicineInformation
        name={product.name}
        dosageForm={product.dosageForm}
        composition={product.composition}
        category={product.category}
        description={product.description}
      />
      {related.length ? (
        <section className="section-pad section-health">
          <div className="container-grid">
            <SectionHeader eyebrow="Related Products" title={`More from ${division?.name}`} />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => <ProductCard key={item.slug} product={item} />)}
            </div>
          </div>
        </section>
      ) : null}
      <section className="border-b border-slate-200 bg-[#f7f9fc] py-14 md:py-20">
        <div className="container-grid">
          <div id="product-inquiry" className="scroll-mt-28">
            <div className="mb-8 max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[.18em] text-medoxy-primary">Request Information</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-medoxy-text md:text-5xl">Ask for product documents</h2>
            </div>
            <div className="w-full rounded-[28px] border border-white bg-white p-6 shadow-[0_20px_60px_rgba(7,27,53,0.08)] md:p-9">
              <InquiryForm premium productName={product.name} divisionName={division?.name} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
