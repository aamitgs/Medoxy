import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  FileCheck2,
  Handshake,
  Hospital,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { JsonLd } from "@/components/JsonLd";
import { articles, products, site, socialLinks, stats } from "@/data/site";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

const description =
  "Explore Medoxy Healthcare's gastroenterology catalogue and request product documents or pharmaceutical trade partnership information.";

export const metadata: Metadata = createPageMetadata({
  title: "Medoxy Healthcare Pvt Ltd | Pharmaceutical Trading Company",
  socialTitle: "Medoxy Healthcare Pvt Ltd",
  description,
  path: "/",
  absoluteTitle: true,
});

const featuredProducts = products.filter((product) => product.featured).slice(0, 3);

const advantages = [
  {
    icon: FileCheck2,
    number: "01",
    title: "Documentation first",
    text: "Clear product, composition, packaging, and sourcing information for confident evaluation.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Evidence aware",
    text: "Product and trade questions framed around scope, current records, and the proposed market.",
  },
  {
    icon: Handshake,
    number: "03",
    title: "Partnership focused",
    text: "A direct inquiry route for distributors, healthcare organizations, and institutions.",
  },
];

export default function Home() {
  const organizationId = `${site.url}/#organization`;
  const websiteId = `${site.url}/#website`;
  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: site.name,
        alternateName: site.shortName,
        url: site.url,
        logo: {
          "@type": "ImageObject",
          "@id": `${site.url}/#logo`,
          url: absoluteUrl("/favicon.svg"),
          contentUrl: absoluteUrl("/favicon.svg"),
          width: 512,
          height: 512,
          caption: site.name,
        },
        email: site.email,
        telephone: site.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Block D, Gali No. 7, Shyam Kunj, Maruti Kunj Road, Bhondsi",
          addressLocality: "Gurgaon",
          addressRegion: "Haryana",
          postalCode: "122102",
          addressCountry: "IN",
        },
        sameAs: socialLinks.map(({ href }) => href),
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "business inquiries",
          email: site.email,
          telephone: site.phone,
          url: absoluteUrl("/contact"),
          areaServed: "IN",
          availableLanguage: "English",
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: site.url,
        name: site.name,
        alternateName: site.shortName,
        inLanguage: "en-IN",
        publisher: { "@id": organizationId },
      },
    ],
  };

  return (
    <>
      <JsonLd data={homepageSchema} />
      <section className="relative isolate overflow-hidden bg-[#071b35] text-white">
        <div className="absolute -left-36 top-36 h-96 w-96 rounded-full bg-medoxy-primary/25 blur-3xl" />
        <div className="absolute -right-32 top-0 h-[32rem] w-[32rem] rounded-full bg-[#174b91]/40 blur-3xl" />

        <div className="container-grid relative grid min-h-[760px] items-center gap-14 py-20 lg:grid-cols-[1.04fr_.96fr] lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-blue-200">
              <span className="h-2 w-2 rounded-full bg-[#55d6a9]" />
              Pharmaceutical trading &amp; distribution
            </div>
            <h1 className="mt-7 text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[5rem]">
              Advancing healthcare through
              <span className="block bg-gradient-to-r from-[#79a8ff] to-[#b7d2ff] bg-clip-text text-transparent">
                trusted partnerships.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Medoxy connects healthcare professionals and distribution partners with a focused gastroenterology portfolio, dependable documentation, and responsive trade support.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-medoxy-secondary px-6 py-4 font-black text-white shadow-[0_16px_40px_rgba(229,57,53,0.3)] transition hover:-translate-y-0.5 hover:bg-red-600"
              >
                Start a partnership
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-6 py-4 font-black text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10"
              >
                Explore products
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-slate-300">
              {["B2B catalogue", "Inquiry-led support", "Product-specific review"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-[#55d6a9]/15 text-[#55d6a9]">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] lg:mx-0">
            <div className="absolute -inset-5 rounded-[2.5rem] border border-white/10 bg-white/[0.035] backdrop-blur-sm" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white shadow-[0_40px_100px_rgba(0,0,0,0.35)]">
              <div className="relative aspect-[4/3] bg-[#eef4ff]">
                <Image
                  src="/gastroenterology-hero.png"
                  alt="Clinical visualization of the digestive system representing Medoxy's gastroenterology portfolio"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071b35]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-200">Featured portfolio</p>
                  <p className="mt-2 text-2xl font-black text-white">Gastroenterology</p>
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-slate-100 bg-white p-5">
                {stats.map((stat) => (
                  <div key={stat.label} className="px-4 first:pl-1 last:pr-1">
                    <p className="text-3xl font-black tracking-tight text-[#071b35]">{stat.value}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-7 -left-7 hidden items-center gap-3 rounded-2xl border border-white/60 bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.18)] sm:flex">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-green-50 text-emerald-600">
                <PackageCheck size={22} />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Portfolio</span>
                <span className="mt-1 block font-black text-[#071b35]">Inquiry ready</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-7">
        <div className="container-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [Hospital, "Hospitals & Clinics"],
            [Building2, "Healthcare Institutions"],
            [Stethoscope, "Medical Professionals"],
            [Handshake, "Distribution Partners"],
          ].map(([Icon, label]) => (
            <div key={String(label)} className="flex items-center justify-center gap-3 rounded-xl px-4 py-3 text-sm font-extrabold text-[#071b35]">
              <Icon size={20} className="text-medoxy-primary" />
              {String(label)}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f5f7fb] py-24 md:py-32">
        <div className="container-grid">
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_.7fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-medoxy-primary">Why Medoxy</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[1.08] tracking-[-0.04em] text-[#071b35] md:text-6xl">
                Built for serious healthcare conversations.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-medoxy-muted lg:pb-2">
              The site structures product discovery, documentation questions, and the next qualified business conversation.
            </p>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {advantages.map(({ icon: Icon, number, title, text }) => (
              <article key={title} className="group relative overflow-hidden rounded-[28px] border border-white bg-white p-8 shadow-[0_18px_50px_rgba(7,27,53,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(7,27,53,0.11)]">
                <span className="absolute right-7 top-5 text-5xl font-black text-slate-100">{number}</span>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-medoxy-primary transition group-hover:bg-medoxy-primary group-hover:text-white">
                  <Icon size={26} />
                </span>
                <h3 className="mt-8 text-2xl font-black tracking-tight text-[#071b35]">{title}</h3>
                <p className="mt-4 leading-7 text-medoxy-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="container-grid">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-medoxy-secondary">Focused portfolio</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[1.08] tracking-[-0.04em] text-[#071b35] md:text-6xl">
                Gastroenterology products, clearly presented.
              </h2>
            </div>
            <Link href="/products" className="group inline-flex shrink-0 items-center gap-2 font-black text-medoxy-primary">
              View full portfolio <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#071b35] py-24 text-white md:py-32">
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-medoxy-primary/25 blur-3xl" />
        <div className="container-grid relative grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-300">How we work</p>
            <h2 className="mt-4 text-4xl font-black leading-[1.08] tracking-[-0.04em] md:text-6xl">
              A clearer path from inquiry to partnership.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Our process is designed to keep commercial conversations focused, informed, and efficient.
            </p>
            <Link href="/contact" className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-black text-[#071b35] transition hover:-translate-y-0.5">
              Discuss your requirements <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid gap-4">
            {[
              ["01", "Share your requirement", "Tell us your product interest, market, and business needs."],
              ["02", "Review the portfolio", "Compare the listed catalogue fields and identify the records needed for your decision."],
              ["03", "Clarify the next step", "Medoxy can confirm what information is applicable and available for the defined request."],
            ].map(([number, title, text]) => (
              <div key={number} className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur sm:grid-cols-[auto_1fr] sm:items-center">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-medoxy-primary text-lg font-black">{number}</span>
                <div>
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-2 leading-7 text-slate-300">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7fb] py-24 md:py-32">
        <div className="container-grid">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-medoxy-primary">Industry perspective</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-[-0.04em] text-[#071b35] md:text-5xl">Insights for modern healthcare partnerships.</h2>
            </div>
            <Link href="/blog" className="group inline-flex shrink-0 items-center gap-2 font-black text-medoxy-primary">
              Explore all insights <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {articles.map((article, index) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group rounded-[26px] border border-white bg-white p-7 shadow-[0_18px_50px_rgba(7,27,53,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(7,27,53,0.11)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-medoxy-primary">{article.category}</span>
                  <Sparkles size={18} className={index === 0 ? "text-medoxy-secondary" : "text-slate-300"} />
                </div>
                <h3 className="mt-7 text-2xl font-black leading-tight tracking-tight text-[#071b35]">{article.title}</h3>
                <p className="mt-4 line-clamp-3 leading-7 text-medoxy-muted">{article.excerpt}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-black text-medoxy-primary">
                  Read article <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-grid overflow-hidden rounded-[32px] bg-medoxy-primary p-8 text-white shadow-[0_30px_80px_rgba(46,102,226,0.25)] md:p-12 lg:p-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-100">Let&apos;s move healthcare forward</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-[-0.035em] md:text-5xl">
                Ready to discuss your next pharmaceutical opportunity?
              </h2>
            </div>
            <Link href="/contact" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-medoxy-secondary px-7 py-4 font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-red-600">
              Send an inquiry <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
