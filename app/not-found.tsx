import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, SearchX } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested Medoxy Healthcare page could not be found. Return to the website or browse our product catalogue and healthcare division.",
};

const usefulLinks = [
  { href: "/products", label: "Browse products" },
  { href: "/divisions", label: "Explore our division" },
  { href: "/blog", label: "Read business resources" },
  { href: "/contact", label: "Contact Medoxy" },
];

export default function NotFound() {
  return (
    <section className="section-pad section-surface">
      <div className="container-grid">
        <div className="mx-auto max-w-3xl rounded-[32px] border border-white bg-white p-8 text-center shadow-[0_24px_70px_rgba(7,27,53,0.10)] sm:p-12 lg:p-16">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-blue-50 text-medoxy-primary" aria-hidden="true">
            <SearchX size={30} />
          </span>
          <p className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-medoxy-primary">Error 404</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] text-medoxy-text sm:text-5xl">This page could not be found.</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-medoxy-muted">
            The address may be outdated or the page may have moved. Use one of the links below to continue browsing Medoxy Healthcare.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-medoxy-primary px-6 py-3.5 font-black text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-medoxy-primary"
          >
            <Home size={18} aria-hidden="true" />
            Return home
          </Link>

          <nav className="mt-10 grid gap-3 border-t border-slate-200 pt-8 text-left sm:grid-cols-2" aria-label="Helpful pages">
            {usefulLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3.5 font-bold text-medoxy-text transition hover:border-medoxy-primary hover:text-medoxy-primary"
              >
                {link.label}
                <ArrowRight size={17} className="transition group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
