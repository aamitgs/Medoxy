import { Facebook, Instagram, Linkedin } from "lucide-react";
import { socialLinks } from "@/data/site";

const icons = {
  Facebook,
  Instagram,
  LinkedIn: Linkedin,
};

export function SocialLinks({ tone = "light" }: { tone?: "light" | "dark" }) {
  const baseClass =
    tone === "dark"
      ? "border-medoxy-border bg-white text-medoxy-text hover:border-medoxy-primary hover:text-medoxy-primary"
      : "border-white/15 bg-white/10 text-white hover:border-medoxy-primary hover:bg-medoxy-primary";

  return (
    <div className="flex flex-wrap gap-2" aria-label="Social media links">
      {socialLinks.map((item) => {
        const Icon = icons[item.label];
        return (
          <a
            key={item.label}
            className={`grid h-10 w-10 place-items-center rounded-lg border transition ${baseClass}`}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
            title={item.label}
          >
            <Icon size={18} />
          </a>
        );
      })}
    </div>
  );
}
