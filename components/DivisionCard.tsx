import Link from "next/link";
import { ArrowRight, Send } from "lucide-react";
import { divisionIcons, products } from "@/data/site";
import type { DivisionSlug } from "@/data/site";

export function DivisionCard({ division }: { division: { slug: DivisionSlug; name: string; description: string } }) {
  const Icon = divisionIcons[division.slug];
  const count = products.filter((product) => product.division === division.slug).length;

  return (
    <article className="group rounded-[28px] border border-white bg-white p-7 shadow-[0_18px_50px_rgba(7,27,53,0.07)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(7,27,53,0.12)]">
      <div className="mb-6 flex items-start justify-between gap-4">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-medoxy-primary transition group-hover:bg-medoxy-primary group-hover:text-white">
          <Icon size={27} />
        </span>
        <span className="rounded-full bg-medoxy-background px-3 py-1 text-xs font-bold text-medoxy-muted">{count} Products</span>
      </div>
      <h3 className="text-2xl font-black tracking-tight text-[#071b35]">{division.name}</h3>
      <p className="mt-3 min-h-20 leading-7 text-medoxy-muted">{division.description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link className="inline-flex items-center gap-2 rounded-xl bg-[#071b35] px-4 py-3 text-sm font-black text-white transition hover:bg-medoxy-primary" href={`/divisions/${division.slug}`}>
          View Products <ArrowRight size={16} />
        </Link>
        <Link className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-black text-[#071b35] transition hover:border-medoxy-primary hover:text-medoxy-primary" href={`/contact?division=${division.slug}`}>
          <Send size={16} /> Inquiry
        </Link>
      </div>
    </article>
  );
}
