import { Activity, Beaker, Boxes, CircleDot, Cross, Microscope, Pill, ShieldCheck, Sparkles } from "lucide-react";
import { clsx } from "clsx";

const iconMap = {
  hero: Cross,
  lab: Microscope,
  manufacturing: Boxes,
  product: Pill,
  team: Activity,
  event: Sparkles,
  quality: ShieldCheck,
  facility: Beaker,
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

  return (
    <div
      className={clsx(
        "relative isolate min-h-[320px] overflow-hidden rounded-lg border border-medoxy-border bg-white shadow-soft",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(46,102,226,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(46,102,226,0.09)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-medoxy-primary/20 blur-3xl" />
      <div className="absolute -right-16 bottom-4 h-72 w-72 rounded-full bg-medoxy-secondary/12 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.92),rgba(255,255,255,0.42)_48%,rgba(240,234,223,0.2))]" />

      <div className="relative flex h-full min-h-[inherit] flex-col justify-between p-6 md:p-8">
        <div className="flex items-center justify-between gap-4">
          <span className="grid h-16 w-16 place-items-center rounded-lg bg-medoxy-primary text-white shadow-soft">
            <Icon size={32} />
          </span>
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-medoxy-secondary" />
            <span className="h-3 w-3 rounded-full bg-medoxy-primary" />
            <span className="h-3 w-3 rounded-full bg-medoxy-border" />
          </div>
        </div>

        <div className="mx-auto my-8 grid w-full max-w-sm grid-cols-3 gap-3">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className={clsx(
                "flex aspect-square items-center justify-center rounded-lg border border-medoxy-border bg-white/78 backdrop-blur",
                index === 4 && "scale-110 border-medoxy-primary bg-medoxy-primary text-white shadow-soft",
              )}
            >
              {index === 4 ? <Icon size={28} /> : <CircleDot size={18} className="text-medoxy-primary/70" />}
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-medoxy-border bg-white/82 p-5 backdrop-blur">
          <p className="text-sm font-black uppercase tracking-wide text-medoxy-primary">{subtitle || "Quality Assured"}</p>
          <h3 className="mt-2 text-2xl font-black leading-tight text-medoxy-text">{title}</h3>
        </div>
      </div>
    </div>
  );
}
