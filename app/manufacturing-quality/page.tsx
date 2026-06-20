import type { Metadata } from "next";
import { Factory, FlaskConical, ShieldCheck, TestTube2 } from "lucide-react";
import { HealthcareVisual } from "@/components/HealthcareVisual";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Manufacturing & Quality",
  description: "Manufacturing facilities, production process, quality control, testing procedures, and compliance standards at Medoxy.",
};

export default function ManufacturingQualityPage() {
  const cards = [
    [Factory, "Manufacturing Facilities", "Coordinated production planning with quality-first vendor and facility expectations."],
    [ShieldCheck, "Production Process", "Documented process flow, batch discipline, and controlled packaging practices."],
    [TestTube2, "Quality Control", "Material checks, in-process controls, final inspection, and traceable documentation."],
    [FlaskConical, "Testing Procedures", "Analytical and stability-oriented checks aligned with relevant product categories."],
  ];

  return (
    <section className="section-pad">
      <div className="container-grid">
        <SectionHeader eyebrow="Manufacturing & Quality" title="Quality controls designed for dependable healthcare distribution." text="Medoxy presents a compliance-aware approach to product sourcing, production monitoring, documentation, and partner confidence." />
        <div className="grid gap-8 lg:grid-cols-[1fr_.9fr]">
          <div className="grid gap-5 md:grid-cols-2">
            {cards.map(([Icon, title, text]) => (
              <article key={String(title)} className="rounded-lg border border-medoxy-border bg-white p-6 shadow-sm">
                <Icon className="mb-5 text-medoxy-primary" size={30} />
                <h2 className="text-xl font-black text-medoxy-text">{String(title)}</h2>
                <p className="mt-3 leading-7 text-medoxy-muted">{String(text)}</p>
              </article>
            ))}
          </div>
          <HealthcareVisual title="Pharmaceutical manufacturing quality control" subtitle="Compliance Standards" variant="quality" className="min-h-[520px]" />
        </div>
      </div>
    </section>
  );
}
