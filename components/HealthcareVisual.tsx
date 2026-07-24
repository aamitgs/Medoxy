import { Activity, Boxes, CircleDot, Cross, Handshake, Microscope, Pill, ShieldCheck, Sparkles } from "lucide-react";
import { clsx } from "clsx";
import { MedoxyLogo } from "@/components/MedoxyLogo";

const iconMap = {
  hero: Cross,
  lab: Microscope,
  trade: Boxes,
  product: Pill,
  team: Activity,
  event: Sparkles,
  quality: ShieldCheck,
  coordination: Handshake,
};

type HealthcareVisualVariant = keyof typeof iconMap;

export function HealthcareVisual({
  title,
  subtitle,
  variant = "hero",
  className,
}: {
  title: string;
  subtitle?: string;
  variant?: HealthcareVisualVariant;
  className?: string;
}) {
  const Icon = iconMap[variant];

  const isHero = variant === "hero";

  return (
    <div
      className={clsx(
        "relative isolate min-h-[320px] overflow-hidden rounded-lg bg-white shadow-soft",
        className,
      )}
    >
      <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-medoxy-primary/15 blur-3xl" />
      <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-medoxy-secondary/14 blur-3xl" />
      <div className="absolute -left-10 bottom-10 h-52 w-52 rounded-full bg-white/80 blur-2xl" />
      {isHero ? (
        <>
          <div className="absolute inset-x-0 top-24 mx-auto h-[14rem] max-w-[34rem] rounded-[3rem] bg-gradient-to-r from-white/90 via-medoxy-primary/10 to-white/90 shadow-[0_40px_120px_rgba(15,23,42,0.08)]" />
          <div className="absolute right-12 top-10 grid gap-3 text-white/80">
            <span className="block h-3 w-3 rounded-full bg-medoxy-primary shadow-soft" />
            <span className="block h-3 w-3 rounded-full bg-medoxy-secondary shadow-soft" />
            <span className="block h-3 w-3 rounded-full bg-medoxy-border shadow-soft" />
          </div>
          <span className="absolute left-12 top-28 h-14 w-14 rounded-full border border-medoxy-primary/40 bg-medoxy-primary/10 shadow-[0_0_40px_rgba(46,102,226,0.18)] animate-[pulse_6s_ease-in-out_infinite]" />
        </>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.92),rgba(255,255,255,0.42)_48%,rgba(240,234,223,0.2))]" />
      )}

      <div className="relative flex h-full min-h-[inherit] flex-col justify-between p-6 md:p-8">
        <div className="flex items-center justify-between gap-4">
          <span className="grid h-16 w-16 place-items-center rounded-[1.75rem] bg-medoxy-primary text-white shadow-soft">
            <Icon size={32} />
          </span>
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-medoxy-secondary" />
            <span className="h-3 w-3 rounded-full bg-medoxy-primary" />
            <span className="h-3 w-3 rounded-full bg-medoxy-border" />
          </div>
        </div>

        {isHero ? (
          <div className="relative mx-auto flex flex-1 items-center justify-center py-6">
            <div className="absolute inset-x-0 top-10 mx-auto h-48 w-full max-w-2xl rounded-[2.5rem] border border-white/70 bg-white/70 shadow-[0_50px_120px_rgba(46,102,226,0.12)] blur-2xl" />
            <div className="relative z-10 flex h-[22rem] w-[22rem] items-center justify-center rounded-full border border-white/80 bg-white/95 shadow-[0_28px_80px_rgba(15,23,42,0.18)]">
              <div className="flex h-44 w-44 items-center justify-center rounded-full border border-medoxy-border/60 bg-white text-medoxy-primary shadow-xl">
                <MedoxyLogo className="h-24 w-24" />
              </div>
            </div>
          </div>
        ) : (
          <div className={clsx(
            "mx-auto my-8 grid w-full gap-4",
            "max-w-sm grid-cols-3",
          )}>
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className={clsx(
                  "flex aspect-square items-center justify-center rounded-[1.75rem] border border-medoxy-border/70 bg-white/90 shadow-soft transition-transform duration-300",
                  index === 4 && "scale-[1.08] border-medoxy-primary bg-medoxy-primary text-white shadow-[0_24px_60px_rgba(46,102,226,0.18)]",
                )}
              >
                {index === 4 ? <MedoxyLogo className="h-16 w-16" /> : <CircleDot size={18} className="text-medoxy-primary/70" />}
              </div>
            ))}
          </div>
        )}

        <div className={clsx(
          "rounded-[1.75rem] border border-medoxy-border bg-white/92 p-6 backdrop-blur transition-all duration-300",
          isHero ? "shadow-soft" : "shadow-none",
        )}>
          <p className="text-sm font-black uppercase tracking-[0.3em] text-medoxy-primary">{subtitle || "Quality Assured"}</p>
          <h3 className="mt-3 text-2xl font-black leading-tight text-medoxy-text">{title}</h3>
        </div>
      </div>
    </div>
  );
}
