"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function ProductImageGallery({ name, mainImage, gallery }: { name: string; mainImage: string; gallery: readonly string[] }) {
  const images = Array.from(new Set([mainImage, ...gallery]));
  const [active, setActive] = useState<number | null>(null);
  const [selected, setSelected] = useState(0);
  const strip = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const openButton = useRef<HTMLButtonElement>(null);
  const isOpen = active !== null;

  const moveStrip = (direction: number) => strip.current?.scrollBy({ left: direction * 280, behavior: "smooth" });

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : openButton.current;
    const previousOverflow = document.body.style.overflow;
    const focusFrame = window.requestAnimationFrame(() => closeButton.current?.focus());

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setActive(null);
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActive((value) => value === null ? null : (value - 1 + images.length) % images.length);
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActive((value) => value === null ? null : (value + 1) % images.length);
        return;
      }
      if (event.key !== "Tab" || !dialog.current) return;

      const focusable = Array.from(dialog.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ));
      if (!focusable.length) {
        event.preventDefault();
        dialog.current.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === first || !dialog.current.contains(document.activeElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !dialog.current.contains(document.activeElement))) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      previouslyFocused?.focus();
    };
  }, [isOpen, images.length]);

  return (
    <>
      <div className="min-w-0">
        <button ref={openButton} type="button" onClick={() => setActive(selected)} className="group relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-[0_10px_35px_rgba(7,27,53,.05)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-medoxy-primary" aria-label={`Enlarge ${name} image`}>
          <Image src={images[selected]} alt={`${name} pharmaceutical product packaging, view ${selected + 1}`} fill priority sizes="(min-width: 1280px) 520px, (min-width: 1024px) 42vw, calc(100vw - 32px)" className="object-contain p-2 transition duration-300 group-hover:scale-[1.015]" />
          <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-lg bg-[#071b35]/90 px-3 py-2 text-xs font-black text-white transition md:opacity-0 md:group-hover:opacity-100"><Maximize2 size={15} /> Zoom</span>
        </button>

        {images.length > 1 ? (
          <div className="mt-4">
              <div className="mb-3 flex items-center justify-between"><div><p className="text-xs font-black uppercase tracking-[.12em] text-medoxy-muted">Product gallery</p><p className="mt-1 text-xs font-semibold text-slate-600">Select an image to preview</p></div><div className="flex items-center gap-2"><button type="button" onClick={() => moveStrip(-1)} className="grid h-10 w-10 place-items-center rounded-lg border border-slate-300 text-medoxy-text transition hover:border-medoxy-primary hover:text-medoxy-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medoxy-primary" aria-label="Scroll gallery left"><ChevronLeft size={16} aria-hidden="true"/></button><span className="text-xs font-bold text-medoxy-muted">{selected + 1}/{images.length}</span><button type="button" onClick={() => moveStrip(1)} className="grid h-10 w-10 place-items-center rounded-lg border border-slate-300 text-medoxy-text transition hover:border-medoxy-primary hover:text-medoxy-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medoxy-primary" aria-label="Scroll gallery right"><ChevronRight size={16} aria-hidden="true"/></button></div></div>
              <div ref={strip} className="flex snap-x gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {images.map((image, index) => (
                  <button type="button" key={image} onClick={() => setSelected(index)} className={`group relative flex aspect-[4/3] w-24 shrink-0 snap-start items-center justify-center overflow-hidden rounded-xl border-2 bg-white p-1.5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medoxy-primary ${selected === index ? "border-medoxy-primary bg-blue-50 shadow-sm" : "border-slate-300 hover:border-blue-300"}`} aria-label={`Preview ${name} image ${index + 1}`} aria-pressed={selected === index}>
                    <Image src={image} alt={`${name} pharmaceutical product packaging, view ${index + 1}`} width={600} height={450} sizes="96px" className="h-full w-full object-contain transition group-hover:scale-[1.02]" />
                  </button>
                ))}
              </div>
          </div>
        ) : null}
      </div>

      {active !== null ? (
        <div ref={dialog} tabIndex={-1} className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020b18]/95 p-4" role="dialog" aria-modal="true" aria-labelledby="product-image-dialog-title" onMouseDown={(event) => event.target === event.currentTarget && setActive(null)}>
          <h2 id="product-image-dialog-title" className="sr-only">Enlarged images of {name}</h2>
          <button ref={closeButton} type="button" onClick={() => setActive(null)} className="absolute right-5 top-5 rounded-full bg-white p-3 text-[#071b35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300" aria-label="Close enlarged image"><X aria-hidden="true" /></button>
          {images.length > 1 ? <button type="button" onClick={() => setActive((active - 1 + images.length) % images.length)} className="absolute left-3 rounded-full bg-white p-3 text-[#071b35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300 md:left-7" aria-label="Previous image"><ChevronLeft aria-hidden="true" /></button> : null}
          <div className="flex h-[82vh] w-[88vw] items-center justify-center">
            <Image src={images[active]} alt={`${name} pharmaceutical product packaging, enlarged view ${active + 1}`} width={2400} height={1800} sizes="(min-width: 1800px) 1600px, 90vw" className="max-h-full w-auto max-w-full object-contain" />
          </div>
          {images.length > 1 ? <button type="button" onClick={() => setActive((active + 1) % images.length)} className="absolute right-3 rounded-full bg-white p-3 text-[#071b35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300 md:right-7" aria-label="Next image"><ChevronRight aria-hidden="true" /></button> : null}
          <span className="absolute bottom-5 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white">{active + 1} / {images.length}</span>
        </div>
      ) : null}
    </>
  );
}
