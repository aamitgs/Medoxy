import Link from "next/link";
import { ArrowRight, Send } from "lucide-react";
import { divisionIcons, products } from "@/data/site";
import type { DivisionSlug } from "@/data/site";

export function DivisionCard({ division }: { division: { slug: DivisionSlug; name: string; description: string } }) {
  const Icon = divisionIcons[division.slug];
  const count = products.filter((product) => product.division === division.slug).length;

  return (
    <article className="group card p-6 transition hover:-translate-y-1 hover:shadow-soft">
      <div className="mb-6 flex items-start justify-between gap-4">
        <span className="grid h-14 w-14 place-items-center rounded-lg bg-medoxy-primary/10 text-medoxy-primary">
          <Icon size={27} />
        </span>
        <span className="rounded-full bg-medoxy-background px-3 py-1 text-xs font-bold text-medoxy-muted">{count} Products</span>
      </div>
      <h3 className="text-xl font-black text-medoxy-text">{division.name}</h3>
      <p className="mt-3 min-h-20 leading-7 text-medoxy-muted">{division.description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link className="inline-flex items-center gap-2 rounded-lg bg-medoxy-primary px-4 py-3 text-sm font-bold text-white" href={`/divisions/${division.slug}`}>
          View Products <ArrowRight size={16} />
        </Link>
        <Link className="inline-flex items-center gap-2 rounded-lg border border-medoxy-border px-4 py-3 text-sm font-bold text-medoxy-text" href={`/contact?division=${division.slug}`}>
          <Send size={16} /> Inquiry
        </Link>
      </div>
    </article>
  );
}
