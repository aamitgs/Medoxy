import type { Metadata } from "next";
import { DivisionCard } from "@/components/DivisionCard";
import { SectionHeader } from "@/components/SectionHeader";
import { divisions } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Pharmaceutical Divisions",
  description: "See how Medoxy organizes its current gastroenterology catalogue and move from therapeutic division to product-specific information.",
  path: "/divisions",
});

export default function DivisionsPage() {
  return (
    <>
      <section className="section-pad section-health">
        <div className="container-grid">
          <SectionHeader as="h1" eyebrow="Pharmaceutical Divisions" title="Start with the therapeutic division, then review the exact catalogue entry." text="Medoxy's current public portfolio is organized under gastroenterology for qualified business discovery. Product pages provide the more specific composition, dosage-form, pack, and inquiry context." />
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {divisions.map((division) => <DivisionCard key={division.slug} division={division} />)}
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["1", "Choose a division", "Use the division page to understand the catalogue scope and available product categories."],
              ["2", "Review a product entry", "Check the listed composition, dosage form, packaging, and product-information boundaries."],
              ["3", "Send a scoped inquiry", "Name the product, intended market, business purpose, and documents required for review."],
            ].map(([number, title, text]) => (
              <article key={number} className="card p-6">
                <p className="text-sm font-black text-medoxy-primary">Step {number}</p>
                <h2 className="mt-2 text-xl font-black text-medoxy-text">{title}</h2>
                <p className="mt-3 leading-7 text-medoxy-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
