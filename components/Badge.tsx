import { clsx } from "clsx";

export function Badge({ children, tone = "blue" }: { children: React.ReactNode; tone?: "blue" | "red" | "neutral" }) {
  return (
    <span
      className={clsx(
        "inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        tone === "blue" && "border-medoxy-primary/20 bg-medoxy-primary/10 text-medoxy-primary",
        tone === "red" && "border-medoxy-secondary/20 bg-medoxy-secondary/10 text-medoxy-secondary",
        tone === "neutral" && "border-medoxy-border bg-white/70 text-medoxy-muted",
      )}
    >
      {children}
    </span>
  );
}
