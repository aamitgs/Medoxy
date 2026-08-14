import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { divisions, nav, site } from "@/data/site";
import { MedoxyLogo } from "./MedoxyLogo";
import { SocialLinks } from "./SocialLinks";

const resourceLinks = [
  { label: "Healthcare Insights", href: "/blog" },
  { label: "Trade & Quality", href: "/trade-quality" },
  { label: "Compliance", href: "/certifications-compliance" },
  { label: "Content Policy", href: "/editorial-policy" },
  { label: "Frequently Asked Questions", href: "/faq" },
  { label: "Careers", href: "/careers" },
];

export function Footer() {
  const companyLinks = nav.filter((item) =>
    ["/about", "/divisions", "/products", "/portfolio-development", "/contact"].includes(item.href),
  );

  return (
    <footer className="relative overflow-hidden bg-[#06172d] text-white">
      <div className="absolute -right-36 top-20 h-[30rem] w-[30rem] rounded-full bg-medoxy-primary/15 blur-3xl" />

      <div className="container-grid relative pt-5">
        <div className="relative translate-y-12 overflow-hidden rounded-[30px] bg-medoxy-primary p-7 shadow-[0_30px_80px_rgba(0,0,0,0.25)] sm:p-9 lg:p-12">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[48px] border-white/[0.07]" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-100">Build the next partnership</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                Let&apos;s move healthcare forward, together.
              </h2>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-blue-100">
                <span className="flex items-center gap-2"><Clock3 size={16} /> Direct business inquiry route</span>
                <span className="flex items-center gap-2"><ShieldCheck size={16} /> Consent-based contact form</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="group inline-flex min-w-48 items-center justify-center gap-2 rounded-xl bg-medoxy-secondary px-6 py-4 font-black text-white shadow-[0_14px_35px_rgba(121,22,22,0.3)] transition hover:-translate-y-0.5 hover:bg-red-600"
              >
                Send an inquiry
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/products"
                className="inline-flex min-w-48 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-4 font-black text-white backdrop-blur transition hover:bg-white/15"
              >
                View products
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-12 pb-14 pt-28 lg:grid-cols-[1.55fr_.75fr_.85fr_.9fr] lg:gap-10 lg:pb-16 lg:pt-32">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-4" aria-label="Medoxy home">
              <span className="grid h-[72px] w-28 place-items-center rounded-2xl bg-white shadow-lg">
                <MedoxyLogo className="h-16 w-24" />
              </span>
              <span>
                <span className="block text-xl font-black tracking-[-0.03em]">{site.shortName}</span>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">Healthcare Pvt Ltd</span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              A focused pharmaceutical trading company supporting gastroenterology product discovery, quality-aware sourcing, and dependable healthcare partnerships.
            </p>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.2em] text-blue-300">Company</p>
            <nav className="grid gap-3.5 text-sm text-slate-400" aria-label="Footer company links">
              {companyLinks.map((item) => (
                <Link className="group inline-flex items-center gap-2 transition hover:text-white" key={item.href} href={item.href}>
                  {item.label}
                  <ArrowUpRight size={13} className="opacity-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.2em] text-blue-300">Resources</p>
            <nav className="grid gap-3.5 text-sm text-slate-400" aria-label="Footer resource links">
              {resourceLinks.map((item) => (
                <Link className="transition hover:text-white" key={item.href} href={item.href}>{item.label}</Link>
              ))}
              {divisions.map((division) => (
                <Link className="transition hover:text-white" key={division.slug} href={`/divisions/${division.slug}`}>{division.name} Division</Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.2em] text-blue-300">Contact</p>
            <div className="grid gap-4 text-sm text-slate-400">
              <a
                className="group flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.04] p-3.5 transition hover:border-medoxy-primary/50 hover:bg-white/[0.07] hover:text-white"
                href={`mailto:${site.email}`}
              >
                <Mail size={17} className="mt-0.5 shrink-0 text-blue-300" />
                <span className="break-all">{site.email}</span>
              </a>
              <a
                className="group flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.04] p-3.5 transition hover:border-medoxy-primary/50 hover:bg-white/[0.07] hover:text-white"
                href={`tel:${site.phone.replace(/\s/g, "")}`}
              >
                <Phone size={17} className="shrink-0 text-blue-300" />
                {site.phone}
              </a>
              <p className="flex items-start gap-3 px-1 leading-6">
                <MapPin size={17} className="mt-1 shrink-0 text-blue-300" />
                {site.address.join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/[0.08]">
        <div className="container-grid flex flex-col items-center justify-between gap-4 py-6 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2" aria-label="Legal links">
            <Link className="transition hover:text-white" href="/privacy">Privacy Policy</Link>
            <Link className="transition hover:text-white" href="/terms">Terms &amp; Disclaimer</Link>
            <Link className="transition hover:text-white" href="/editorial-policy">Content Policy</Link>
            <Link className="transition hover:text-white" href="/sitemap.xml">Sitemap</Link>
          </nav>
          <p>
            Made by{" "}
            <a className="font-bold text-slate-300 transition hover:text-white" href="https://www.edata4you.com/" target="_blank" rel="noreferrer">
              eData4You
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
