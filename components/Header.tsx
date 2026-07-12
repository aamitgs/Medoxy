"use client";

import Link from "next/link";
import { Menu, Send, X } from "lucide-react";
import { useState } from "react";
import { nav, site } from "@/data/site";
import { MedoxyLogo } from "./MedoxyLogo";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-medoxy-border/80 bg-[#F0EADF]/88 backdrop-blur-xl">
      <div className="header-grid flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Medoxy home">
          <MedoxyLogo className="h-14 w-24 shrink-0" />
          <span>
            <span className="block text-lg font-black leading-none text-medoxy-text">{site.shortName}</span>
            <span className="text-xs font-semibold uppercase tracking-wide text-medoxy-muted">Healthcare Pvt Ltd</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {nav.map((item) => (
            <Link key={item.href} className="text-sm font-semibold text-medoxy-muted transition hover:text-medoxy-primary" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link className="whitespace-nowrap rounded-lg border border-medoxy-border bg-white px-4 py-3 text-sm font-bold text-medoxy-text transition hover:border-medoxy-primary" href="/divisions">
            Request Product List
          </Link>
          <Link className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-medoxy-secondary px-4 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-red-600" href="/contact">
            <Send size={16} />
            Distribution Inquiry
          </Link>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-lg border border-medoxy-border bg-white lg:hidden"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-medoxy-border bg-[#F0EADF] lg:hidden">
          <div className="container-grid grid gap-3 py-5">
            {nav.map((item) => (
              <Link key={item.href} className="rounded-lg bg-white px-4 py-3 text-sm font-bold text-medoxy-text" href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link className="rounded-lg bg-medoxy-secondary px-4 py-3 text-center text-sm font-bold text-white" href="/contact" onClick={() => setOpen(false)}>
              Distribution Inquiry
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
