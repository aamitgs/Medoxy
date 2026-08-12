"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function ProductImageGallery({ name, mainImage, gallery }: { name: string; mainImage: string; gallery: readonly string[] }) {
  const images = Array.from(new Set([mainImage, ...gallery]));
  const [active, setActive] = useState<number | null>(null);
  const [selected, setSelected] = useState(0);
  const strip = useRef<HTMLDivElement>(null);

  const moveStrip = (direction: number) => strip.current?.scrollBy({ left: direction * 280, behavior: "smooth" });

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowLeft") setActive((value) => value === null ? null : (value - 1 + images.length) % images.length);
      if (event.key === "ArrowRight") setActive((value) => value === null ? null : (value + 1) % images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, images.length]);

  return (
    <>
      <div className="min-w-0">
        <button type="button" onClick={() => setActive(selected)} className="group relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_35px_rgba(7,27,53,.05)]" aria-label={`Enlarge ${name} image`}>
          <Image src={images[selected]} alt={`${name} product image ${selected + 1}`} fill priority sizes="(min-width: 1024px) 42vw, 100vw" className="object-contain p-2 transition duration-300 group-hover:scale-[1.015]" />
          <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-lg bg-[#071b35]/90 px-3 py-2 text-xs font-black text-white transition md:opacity-0 md:group-hover:opacity-100"><Maximize2 size={15} /> Zoom</span>
        </button>

        {images.length > 1 ? (
          <div className="mt-4">
              <div className="mb-3 flex items-center justify-between"><div><p className="text-xs font-black uppercase tracking-[.12em] text-medoxy-muted">Product gallery</p><p className="mt-1 text-xs font-semibold text-slate-400">Select an image to preview</p></div><div className="flex items-center gap-2"><button type="button" onClick={() => moveStrip(-1)} className="rounded-lg border border-slate-200 p-1.5 text-medoxy-text transition hover:border-medoxy-primary hover:text-medoxy-primary" aria-label="Scroll gallery left"><ChevronLeft size={16}/></button><span className="text-xs font-bold text-medoxy-muted">{selected + 1}/{images.length}</span><button type="button" onClick={() => moveStrip(1)} className="rounded-lg border border-slate-200 p-1.5 text-medoxy-text transition hover:border-medoxy-primary hover:text-medoxy-primary" aria-label="Scroll gallery right"><ChevronRight size={16}/></button></div></div>
              <div ref={strip} className="flex snap-x gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {images.map((image, index) => (
                  <button type="button" key={image} onClick={() => setSelected(index)} className={`group relative flex aspect-[4/3] w-24 shrink-0 snap-start items-center justify-center overflow-hidden rounded-xl border-2 bg-white p-1.5 transition ${selected === index ? "border-medoxy-primary bg-blue-50 shadow-sm" : "border-slate-200 hover:border-blue-300"}`} aria-label={`Preview ${name} image ${index + 1}`} aria-pressed={selected === index}>
                    <Image src={image} alt={`${name} product view ${index + 1}`} width={600} height={450} sizes="15vw" className="h-full w-full object-contain transition group-hover:scale-[1.02]" />
                  </button>
                ))}
              </div>
          </div>
        ) : null}
      </div>

      {active !== null ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020b18]/95 p-4" role="dialog" aria-modal="true" aria-label={`${name} enlarged image`}>
          <button type="button" onClick={() => setActive(null)} className="absolute right-5 top-5 rounded-full bg-white p-3 text-[#071b35]" aria-label="Close enlarged image"><X /></button>
          {images.length > 1 ? <button type="button" onClick={() => setActive((active - 1 + images.length) % images.length)} className="absolute left-3 rounded-full bg-white p-3 text-[#071b35] md:left-7" aria-label="Previous image"><ChevronLeft /></button> : null}
          <div className="flex h-[82vh] w-[88vw] items-center justify-center">
            <Image src={images[active]} alt={`${name} enlarged view ${active + 1}`} width={2400} height={1800} sizes="90vw" className="max-h-full w-auto max-w-full object-contain" />
          </div>
          {images.length > 1 ? <button type="button" onClick={() => setActive((active + 1) % images.length)} className="absolute right-3 rounded-full bg-white p-3 text-[#071b35] md:right-7" aria-label="Next image"><ChevronRight /></button> : null}
          <span className="absolute bottom-5 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white">{active + 1} / {images.length}</span>
        </div>
      ) : null}
    </>
  );
}
