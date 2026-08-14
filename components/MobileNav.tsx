"use client";

import Link from "next/link";
import { Menu, Send, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/data/site";

const mobileNavigationId = "mobile-primary-navigation";

export function HeaderNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      setOpen(false);
      toggleRef.current?.focus();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const isCurrent = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <>
      <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
        {nav.map((item) => {
          const current = isCurrent(item.href);
          return (
            <Link
              key={item.href}
              className={`rounded-lg px-3 py-2.5 text-[13px] font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medoxy-primary ${current ? "bg-blue-50 text-medoxy-primary" : "text-slate-600 hover:bg-slate-50 hover:text-[#071b35]"}`}
              href={item.href}
              aria-current={current ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="hidden items-center gap-3 lg:flex">
        <Link className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-medoxy-secondary px-4 py-3 text-sm font-black text-white shadow-[0_12px_28px_rgba(211,47,47,0.22)] transition hover:-translate-y-0.5 hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-medoxy-primary" href="/contact">
          <Send size={16} aria-hidden="true" />
          Send Inquiry
        </Link>
      </div>

      <button
        ref={toggleRef}
        className="grid h-11 w-11 place-items-center rounded-xl border border-slate-300 bg-white text-[#071b35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medoxy-primary lg:hidden"
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls={mobileNavigationId}
      >
        {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
      </button>

      {open ? (
        <nav id={mobileNavigationId} className="absolute inset-x-0 top-full border-t border-slate-100 bg-white/95 shadow-xl backdrop-blur lg:hidden" aria-label="Mobile navigation">
          <div className="container-grid grid gap-2 py-5">
            {nav.map((item) => {
              const current = isCurrent(item.href);
              return (
                <Link
                  key={item.href}
                  className={`rounded-xl px-4 py-3 text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medoxy-primary ${current ? "bg-blue-50 text-medoxy-primary" : "text-[#071b35]"}`}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link className="mt-2 rounded-xl bg-medoxy-secondary px-4 py-3 text-center text-sm font-black text-white hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medoxy-primary" href="/contact" onClick={() => setOpen(false)}>
              Distribution Inquiry
            </Link>
          </div>
        </nav>
      ) : null}
    </>
  );
}
