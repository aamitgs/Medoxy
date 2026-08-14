import { ChevronDown } from "lucide-react";

export function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item, index) => (
        <details key={item.question} open={index === 0} className="group overflow-hidden rounded-2xl border border-white bg-white shadow-[0_12px_34px_rgba(7,27,53,0.06)]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-black text-[#071b35] marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-medoxy-primary">
            {item.question}
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-50 text-medoxy-primary">
              <ChevronDown className="transition group-open:rotate-180" size={18} aria-hidden="true" />
            </span>
          </summary>
          <p className="border-t border-slate-100 px-6 py-5 leading-7 text-medoxy-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
