import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, FileText, Info, PackageCheck, Truck } from "lucide-react";
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
  if (!product) return { title: "Product" };

  const url = `${site.url}/products/${product.slug}`;
  const image = `${site.url}${product.image}`;
  const metaDescription = `${product.name}: ${product.dosageForm}, ${product.packaging}. B2B product details and applicable document inquiries with Medoxy.`;

  return {
    title: product.name,
    description: metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${product.name} | ${site.shortName}`,
      description: metaDescription,
      siteName: site.name,
      images: [{ url: image, alt: `${product.name} product pack` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | ${site.shortName}`,
      description: metaDescription,
      images: [image],
    },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  const division = divisions.find((item) => item.slug === product.division);
  const sameCategory = products.filter((item) => item.category === product.category && item.slug !== product.slug);
  const sameDivision = products.filter(
    (item) => item.division === product.division && item.category !== product.category && item.slug !== product.slug,
  );
  const related = [...sameCategory, ...sameDivision].slice(0, 4);
  const productUrl = `${site.url}/products/${product.slug}`;
  const divisionUrl = division ? `${site.url}/divisions/${division.slug}` : `${site.url}/divisions`;
  const productImages = [product.image, ...(product.gallery ?? [])].map((image) => `${site.url}${image}`);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    url: productUrl,
    image: productImages,
    description: product.description,
    category: product.category,
    additionalProperty: [
      { "@type": "PropertyValue", name: "Composition as listed", value: product.composition },
      { "@type": "PropertyValue", name: "Dosage form as listed", value: product.dosageForm },
      { "@type": "PropertyValue", name: "Commercial pack as listed", value: product.packaging },
      { "@type": "PropertyValue", name: "Portfolio division", value: division?.name ?? product.division },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Products", item: `${site.url}/products` },
      { "@type": "ListItem", position: 3, name: division?.name ?? "Division", item: divisionUrl },
      { "@type": "ListItem", position: 4, name: product.name, item: productUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
      />

      <section className="border-b border-slate-200 bg-white py-6 md:py-10">
        <div className="container-grid">
          <nav className="mb-6 text-sm font-semibold text-medoxy-muted" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span className="mx-2 text-slate-300">/</span>
            <Link href="/products">Products</Link> <span className="mx-2 text-slate-300">/</span>
            {division ? (
              <>
                <Link href={`/divisions/${division.slug}`}>{division.name}</Link>{" "}
                <span className="mx-2 text-slate-300">/</span>
              </>
            ) : null}
            <span>{product.category}</span> <span className="mx-2 text-slate-300">/</span>
            <span className="text-medoxy-text" aria-current="page">{product.name}</span>
          </nav>

          <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,.88fr)_minmax(0,1.12fr)] lg:gap-10 xl:gap-12">
            <div className="order-1 py-1 lg:order-2">
              <div className="flex flex-wrap items-center gap-3">
                <Badge tone="blue">{product.category}</Badge>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-medoxy-muted">
                  B2B catalogue entry
                </span>
              </div>
              <h1 className="mt-4 text-4xl font-black leading-[1.08] tracking-tight text-medoxy-text md:text-5xl">{product.name}</h1>
              <p className="mt-3 text-xl font-bold leading-8 text-medoxy-primary">{product.composition}</p>
              <p className="mt-4 max-w-2xl leading-7 text-medoxy-muted">{product.description}</p>
              <div className="mt-6 hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_35px_rgba(7,27,53,.08)] lg:block">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[.12em] text-medoxy-primary">Product &amp; trade support</p>
                    <h2 className="mt-1 text-xl font-black text-medoxy-text">Request applicable product information</h2>
                  </div>
                  <a href="#product-inquiry" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-medoxy-primary px-6 py-3.5 text-sm font-black text-white transition hover:bg-[#071b35]">
                    Start an inquiry <ArrowRight size={17} />
                  </a>
                </div>
                <div className="mt-5 grid gap-3 border-t border-slate-100 pt-4 text-sm font-bold text-medoxy-text sm:grid-cols-3">
                  {[[FileText, "Product records"], [PackageCheck, "Pack review"], [Truck, "Trade inquiry"]].map(([Icon, label]) => (
                    <div key={String(label)} className="flex items-center gap-2">
                      <Icon size={17} className="text-emerald-600" />
                      {String(label)}
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-4 hidden text-center text-sm font-semibold text-medoxy-muted lg:block">
                Prefer email?{" "}
                <a href={`mailto:${site.email}?subject=${encodeURIComponent(`Inquiry about ${product.name}`)}`} className="font-black text-medoxy-primary">
                  {site.email}
                </a>
              </p>
            </div>

            <div className="order-2 min-w-0 lg:order-1">
              {product.image ? (
                <ProductImageGallery name={product.name} mainImage={product.image} gallery={product.gallery ?? []} />
              ) : (
                <HealthcareVisual title={product.name} subtitle={product.category} variant="product" className="min-h-[520px]" />
              )}
              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_35px_rgba(7,27,53,.08)] lg:hidden">
                <p className="text-xs font-black uppercase tracking-[.12em] text-medoxy-primary">Product &amp; trade support</p>
                <h2 className="mt-1 text-xl font-black text-medoxy-text">Request applicable product information</h2>
                <a href="#product-inquiry" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-medoxy-primary px-6 py-3.5 text-sm font-black text-white">
                  Start an inquiry <ArrowRight size={17} />
                </a>
              </div>
            </div>
          </div>

          <details className="group mx-auto mt-10 w-full max-w-6xl overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_55px_rgba(7,27,53,.09)]">
            <summary className="flex cursor-pointer list-none items-center justify-between bg-gradient-to-r from-[#f3f7ff] via-white to-white px-6 py-6 marker:hidden md:px-10 md:py-8">
              <div>
                <p className="text-xs font-black uppercase tracking-[.18em] text-medoxy-primary">Catalogue information</p>
                <h2 className="mt-2 text-2xl font-black text-medoxy-text md:text-3xl">Product fields for initial trade review</h2>
              </div>
              <span className="rounded-full border border-slate-200 px-4 py-2 text-xs font-black text-medoxy-primary group-open:hidden">View fields</span>
              <span className="hidden rounded-full border border-slate-200 px-4 py-2 text-xs font-black text-medoxy-primary group-open:inline">Hide fields</span>
            </summary>
            <dl className="divide-y divide-slate-100">
              {[
                ["Catalogue name", product.name],
                ["Composition as listed", product.composition],
                ["Dosage form as listed", product.dosageForm],
                ["Commercial pack as listed", product.packaging],
                ["Catalogue category", product.category],
                ["Portfolio division", division?.name ?? "Gastroenterology"],
                ["Listing organization", site.name],
                ["Handling reference", "Request current product-specific storage and transport conditions"],
              ].map(([label, value]) => (
                <div key={label} className="px-6 py-5 md:grid md:grid-cols-[230px_minmax(0,1fr)] md:items-start md:gap-10 md:px-10 md:py-6">
                  <dt className="text-xs font-black uppercase tracking-[.08em] text-medoxy-muted">{label}</dt>
                  <dd className="mt-2 text-base font-bold leading-7 text-medoxy-text md:mt-0">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="flex items-start gap-3 bg-blue-50/70 px-6 py-5 text-sm font-semibold leading-6 text-medoxy-muted md:px-10">
              <Info className="mt-0.5 shrink-0 text-medoxy-primary" size={19} />
              <p>Catalogue data supports initial B2B identification only. Confirm every field against current, applicable product, market, and quality records before relying on it.</p>
            </div>
          </details>
        </div>
      </section>

      <MedicineInformation
        name={product.name}
        dosageForm={product.dosageForm}
        composition={product.composition}
        category={product.category}
        description={product.description}
        packaging={product.packaging}
        division={division?.name ?? product.division}
      />

      {related.length ? (
        <section className="section-pad section-health">
          <div className="container-grid">
            <SectionHeader eyebrow="Related Products" title={`Related ${division?.name ?? "portfolio"} catalogue entries`} />
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
              <h2 className="mt-3 text-3xl font-black tracking-tight text-medoxy-text md:text-5xl">Ask about applicable product documents</h2>
              <p className="mt-4 leading-7 text-medoxy-muted">Tell us your organization, destination market, and the decision your request supports so applicability can be reviewed.</p>
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
