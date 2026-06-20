"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="grid gap-3">
      {items.map((item, index) => (
        <div key={item.question} className="rounded-lg border border-medoxy-border bg-white">
          <button className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-black" onClick={() => setOpen(open === index ? -1 : index)} type="button">
            {item.question}
            <ChevronDown className={open === index ? "rotate-180 transition" : "transition"} size={18} />
          </button>
          {open === index ? <p className="border-t border-medoxy-border px-5 py-4 leading-7 text-medoxy-muted">{item.answer}</p> : null}
        </div>
      ))}
    </div>
  );
}
