"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { products } from "@/data/site";
import { ProductCard } from "./ProductCard";

export function ProductExplorer({ divisionSlug }: { divisionSlug?: string }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("latest");

  const base = divisionSlug ? products.filter((product) => product.division === divisionSlug) : products;
  const categories = ["all", ...Array.from(new Set(base.map((product) => product.category)))];

  const filtered = useMemo(() => {
    const normalized = query.toLowerCase();
    return base
      .filter((product) => category === "all" || product.category === category)
      .filter((product) => [product.name, product.category, product.composition, product.description].join(" ").toLowerCase().includes(normalized))
      .sort((a, b) => {
        if (sort === "az") return a.name.localeCompare(b.name);
        if (sort === "popular") return Number(b.popular) - Number(a.popular);
        if (sort === "featured") return Number(b.featured) - Number(a.featured);
        return products.indexOf(b) - products.indexOf(a);
      });
  }, [base, category, query, sort]);

  return (
    <div className="grid gap-7">
      {!divisionSlug ? (
        <div className="sticky top-[84px] z-30 -mx-4 overflow-x-auto border-y border-slate-100 bg-white/95 px-4 py-3 backdrop-blur md:mx-0 md:rounded-2xl md:border">
          <div className="flex min-w-max gap-2">
            <a className="rounded-xl bg-[#071b35] px-4 py-2.5 text-sm font-black text-white" href="/divisions">Browse division</a>
          </div>
        </div>
      ) : null}

      <div className="grid gap-4 rounded-[24px] border border-white bg-white p-5 shadow-[0_16px_44px_rgba(7,27,53,0.07)]">
        <label className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-medoxy-muted" size={18} />
          <input
            className="h-14 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-medoxy-primary focus:bg-white focus:ring-4 focus:ring-medoxy-primary/10"
            placeholder="Search products by name, category, or composition..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => {
            const active = category === item;
            return (
              <button
                key={item}
                type="button"
                className={`rounded-xl border px-4 py-2.5 text-sm font-black transition ${active ? "border-medoxy-primary bg-medoxy-primary text-white shadow-[0_10px_24px_rgba(46,102,226,0.18)]" : "border-slate-200 bg-white text-[#071b35] hover:border-medoxy-primary"}`}
                onClick={() => setCategory(item)}
              >
                {item === "all" ? "All Categories" : item}
              </button>
            );
          })}
        </div>
        <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4">
          <SlidersHorizontal size={18} className="text-medoxy-primary" />
          <select className="h-12 flex-1 bg-transparent text-sm font-semibold outline-none" value={sort} onChange={(event) => setSort(event.target.value)}>
            <option value="latest">Latest</option>
            <option value="az">A-Z</option>
            <option value="popular">Popular</option>
            <option value="featured">Featured</option>
          </select>
        </label>
      </div>

      <p className="text-sm font-bold text-medoxy-muted">{filtered.length} products available for trade inquiry</p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => <ProductCard key={product.slug} product={product} />)}
      </div>
    </div>
  );
}
