"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="grid gap-4">
      {items.map((item, index) => (
        <div key={item.question} className="overflow-hidden rounded-2xl border border-white bg-white shadow-[0_12px_34px_rgba(7,27,53,0.06)]">
          <button className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-black text-[#071b35]" onClick={() => setOpen(open === index ? -1 : index)} type="button">
            {item.question}
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-50 text-medoxy-primary">
              <ChevronDown className={open === index ? "rotate-180 transition" : "transition"} size={18} />
            </span>
          </button>
          {open === index ? <p className="border-t border-slate-100 px-6 py-5 leading-7 text-medoxy-muted">{item.answer}</p> : null}
        </div>
      ))}
    </div>
  );
}
