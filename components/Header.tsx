import Link from "next/link";
import { site } from "@/data/site";
import { MedoxyLogo } from "./MedoxyLogo";
import { HeaderNavigation } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 shadow-[0_8px_30px_rgba(7,27,53,0.04)] backdrop-blur-xl">
      <div className="header-grid flex h-[84px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-medoxy-primary" aria-label="Medoxy home">
          <span className="grid h-14 w-20 place-items-center rounded-xl bg-white">
            <MedoxyLogo className="h-12 w-20 shrink-0" />
          </span>
          <span>
            <span className="block text-xl font-black leading-none tracking-[-0.03em] text-[#071b35]">{site.shortName}</span>
            <span className="mt-1 block text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-600">Healthcare Pvt Ltd</span>
          </span>
        </Link>
        <HeaderNavigation />
      </div>
    </header>
  );
}
