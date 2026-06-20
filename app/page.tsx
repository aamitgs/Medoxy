import Link from "next/link";
import { ArrowRight, Award, Factory, FlaskConical, Hospital, ShieldCheck, Truck } from "lucide-react";
import { Badge } from "@/components/Badge";
import { DivisionCard } from "@/components/DivisionCard";
import { HealthcareVisual } from "@/components/HealthcareVisual";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { articles, divisions, products, stats, testimonials } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="section-pad">
        <div className="container-grid grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
          <div>
            <Badge tone="blue">Healthcare Excellence</Badge>
            <h1 className="mt-5 text-5xl font-black leading-[1.03] text-medoxy-text md:text-7xl">
              Medoxy Healthcare Pvt Ltd
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-medoxy-muted">
              Premium pharmaceutical product divisions, quality-led manufacturing partnerships, and responsive healthcare inquiry support for providers, distributors, and institutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="inline-flex items-center gap-2 rounded-lg bg-medoxy-secondary px-6 py-4 font-black text-white shadow-soft" href="/contact">
                Send Inquiry <ArrowRight size={18} />
              </Link>
              <Link className="inline-flex items-center gap-2 rounded-lg border border-medoxy-border bg-white px-6 py-4 font-black text-medoxy-text" href="/divisions">
                Explore Products
              </Link>
            </div>
          </div>
          <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-medoxy-border bg-white shadow-soft">
            <HealthcareVisual title="Modern healthcare product intelligence" subtitle="Medoxy Healthcare" variant="hero" className="min-h-[520px] rounded-none border-0 shadow-none" />
            <div className="absolute inset-x-6 bottom-6 grid gap-3 rounded-lg bg-white/85 p-5 backdrop-blur md:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-medoxy-border bg-white p-4">
                  <p className="text-3xl font-black text-medoxy-primary">{stat.value}</p>
                  <p className="text-sm font-bold text-medoxy-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/45">
        <div className="container-grid">
          <SectionHeader eyebrow="About Medoxy" title="Credible healthcare solutions with a premium division-led product experience." text="Medoxy brings healthcare expertise, reliable product organization, and inquiry-led support together for hospitals, clinics, pharmacies, distributors, and healthcare institutions." />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Mission", "To make dependable healthcare products easier to evaluate, source, and support through transparent product information."],
              ["Vision", "To become a trusted pharmaceutical brand recognized for quality, responsiveness, and partner confidence."],
              ["Core Values", "Quality, compliance, professional ethics, healthcare access, and long-term business reliability."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-lg border border-medoxy-border bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black text-medoxy-text">{title}</h3>
                <p className="mt-3 leading-7 text-medoxy-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-grid">
          <SectionHeader eyebrow="Product Divisions" title="Therapy areas built for quick discovery and qualified inquiries." text="Filterable, no-commerce product architecture centered on clinical relevance and distributor conversations." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {divisions.map((division) => <DivisionCard key={division.slug} division={division} />)}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/45">
        <div className="container-grid grid items-center gap-10 lg:grid-cols-[.95fr_1.05fr]">
          <HealthcareVisual title="Manufacturing and quality control" subtitle="Process Excellence" variant="manufacturing" className="min-h-[460px]" />
          <div>
            <SectionHeader eyebrow="Why Choose Medoxy" title="Manufacturing excellence, quality controls, and dependable partner support." />
            <div className="grid gap-4 md:grid-cols-2">
              {[
                [ShieldCheck, "Quality Standards", "WHO-GMP aligned quality mindset and batch-level accountability."],
                [Factory, "Manufacturing Excellence", "Process-oriented production with verified documentation."],
                [Award, "Industry Experience", "Healthcare-focused product organization and market awareness."],
                [Truck, "Product Reliability", "Distributor-ready portfolio with practical packaging formats."],
              ].map(([Icon, title, text]) => (
                <div key={String(title)} className="rounded-lg border border-medoxy-border bg-white p-5">
                  <Icon className="mb-4 text-medoxy-primary" size={26} />
                  <h3 className="font-black text-medoxy-text">{String(title)}</h3>
                  <p className="mt-2 text-sm leading-6 text-medoxy-muted">{String(text)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-grid">
          <SectionHeader eyebrow="Featured Products" title="Inquiry-ready products across priority healthcare categories." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.filter((product) => product.featured).slice(0, 4).map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/45">
        <div className="container-grid grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Research & Development" title="Innovation and product development guided by clinical need." text="Medoxy’s product planning emphasizes relevant compositions, practical dosage forms, and clear information for healthcare decision makers." />
            <Link className="inline-flex items-center gap-2 rounded-lg bg-medoxy-primary px-5 py-4 font-black text-white" href="/research-development">
              Explore R&D <ArrowRight size={18} />
            </Link>
          </div>
          <HealthcareVisual title="Research and development laboratory" subtitle="Innovation Pipeline" variant="lab" className="min-h-[360px]" />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-grid">
          <SectionHeader eyebrow="Industries Served" title="Built for healthcare providers, distributors, and institutions." />
          <div className="grid gap-4 md:grid-cols-5">
            {["Hospitals", "Clinics", "Pharmacies", "Healthcare Institutions", "Distributors"].map((item) => (
              <div key={item} className="rounded-lg border border-medoxy-border bg-white p-5 text-center font-black text-medoxy-text">
                <Hospital className="mx-auto mb-3 text-medoxy-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/45">
        <div className="container-grid">
          <SectionHeader eyebrow="Testimonials" title="Partner confidence built around clarity and responsiveness." />
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="rounded-lg border border-medoxy-border bg-white p-7 shadow-sm">
                <p className="text-xl font-bold leading-8 text-medoxy-text">“{item.quote}”</p>
                <footer className="mt-5 text-sm font-bold text-medoxy-muted">{item.name} · {item.role}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-grid">
          <SectionHeader eyebrow="Latest Articles" title="Healthcare insights, product updates, and quality perspectives." />
          <div className="grid gap-6 md:grid-cols-3">
            {articles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="rounded-lg border border-medoxy-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <Badge tone="neutral">{article.category}</Badge>
                <h3 className="mt-4 text-xl font-black text-medoxy-text">{article.title}</h3>
                <p className="mt-3 leading-7 text-medoxy-muted">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-grid rounded-lg bg-medoxy-primary p-8 text-white shadow-soft md:p-12">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-white/70">Product · Distributor · Partnership Inquiry</p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">Ready to discuss a healthcare opportunity?</h2>
            </div>
            <Link className="rounded-lg bg-medoxy-secondary px-6 py-4 text-center font-black text-white" href="/contact">
              Send Inquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
