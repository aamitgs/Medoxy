import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { divisions, nav, site } from "@/data/site";
import { MedoxyLogo } from "./MedoxyLogo";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const legalLinks = [
    { label: "Sitemap", href: "/sitemap.xml" },
    { label: "Disclaimer", href: "/terms" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ];
  const footerNav = nav.filter((item) => item.href !== "/blog");

  return (
    <footer className="border-t border-medoxy-border bg-medoxy-text text-white">
      <div className="container-grid grid gap-10 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-16 w-24 place-items-center rounded-lg bg-white">
              <MedoxyLogo className="h-14 w-20" />
            </span>
            <div>
              <p className="text-sm font-black leading-5">{site.name}</p>
              <p className="text-xs leading-5 text-white/60">Premium healthcare and pharmaceutical solutions.</p>
            </div>
          </div>
          <div className="grid gap-3 text-xs leading-5 text-white/70">
            <p className="flex gap-3 text-xs leading-5"><MapPin size={18} className="mt-0.5 shrink-0 text-medoxy-primary" />{site.address.join(", ")}</p>
            <p className="flex gap-3"><Mail size={18} className="text-medoxy-primary" />{site.email}</p>
            <p className="flex gap-3"><Phone size={18} className="text-medoxy-primary" />{site.phone}</p>
          </div>
          <div className="mt-5">
            <SocialLinks />
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-xs font-black uppercase tracking-wide">Quick Links</h2>
          <div className="grid gap-3 text-xs text-white/70">
            {footerNav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-xs font-black uppercase tracking-wide">Division</h2>
          <div className="grid gap-3 text-xs text-white/70">
            {divisions.slice(0, 6).map((division) => <Link key={division.slug} href={`/divisions/${division.slug}`}>{division.name}</Link>)}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-xs font-black uppercase tracking-wide">Lead Generation</h2>
          <div className="grid gap-3 text-xs text-white/70">
            <Link href="/contact?type=Product Inquiry">Product Inquiry</Link>
            <Link href="/contact?type=Distributor Inquiry">Distributor Inquiry</Link>
            <Link href="/contact?type=Partnership Inquiry">Partnership Inquiry</Link>
            <Link href="/faq">FAQ</Link>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-xs font-black uppercase tracking-wide">Resources</h2>
          <div className="grid gap-3 text-xs text-white/70">
            {legalLinks.map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="grid w-full gap-4 px-4 text-center text-xs text-white/55 sm:px-6 md:grid-cols-2 md:items-center md:px-10 md:text-left">
          <p className="lg:justify-self-start">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="md:justify-self-end md:text-right">
            Made by{" "}
            <a className="font-bold text-white transition hover:text-medoxy-primary" href="https://www.edata4you.com/" target="_blank" rel="noreferrer">
              eData4You
            </a>
            {" "}with ❤️ in Delhi,India
          </p>
        </div>
      </div>
    </footer>
  );
}
