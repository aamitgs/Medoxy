"use client";

import Link from "next/link";
import { Menu, Send, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/data/site";
import { MedoxyLogo } from "./MedoxyLogo";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 shadow-[0_8px_30px_rgba(7,27,53,0.04)] backdrop-blur-xl">
      <div className="header-grid flex h-[84px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Medoxy home">
          <span className="grid h-14 w-20 place-items-center rounded-xl bg-white">
            <MedoxyLogo className="h-12 w-20 shrink-0" />
          </span>
          <span>
            <span className="block text-xl font-black leading-none tracking-[-0.03em] text-[#071b35]">{site.shortName}</span>
            <span className="mt-1 block text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-400">Healthcare Pvt Ltd</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              className={`rounded-lg px-3 py-2.5 text-[13px] font-bold transition ${pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`)) ? "bg-blue-50 text-medoxy-primary" : "text-slate-600 hover:bg-slate-50 hover:text-[#071b35]"}`}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-medoxy-secondary px-4 py-3 text-sm font-black text-white shadow-[0_12px_28px_rgba(229,57,53,0.22)] transition hover:-translate-y-0.5 hover:bg-red-600" href="/contact">
            <Send size={16} />
            Send Inquiry
          </Link>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white text-[#071b35] lg:hidden"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-100 bg-white/95 shadow-xl backdrop-blur lg:hidden">
          <div className="container-grid grid gap-2 py-5">
            {nav.map((item) => (
              <Link key={item.href} className={`rounded-xl px-4 py-3 text-sm font-bold ${pathname === item.href ? "bg-blue-50 text-medoxy-primary" : "text-[#071b35]"}`} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link className="mt-2 rounded-xl bg-medoxy-secondary px-4 py-3 text-center text-sm font-black text-white" href="/contact" onClick={() => setOpen(false)}>
              Distribution Inquiry
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
