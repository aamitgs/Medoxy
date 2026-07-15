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
        <div className="sticky top-20 z-30 -mx-4 overflow-x-auto border-y border-medoxy-border bg-white/90 px-4 py-3 backdrop-blur md:mx-0 md:rounded-lg md:border">
          <div className="flex min-w-max gap-2">
            <a className="rounded-lg bg-medoxy-primary px-4 py-2 text-sm font-bold text-white" href="/divisions">Division</a>
          </div>
        </div>
      ) : null}

      <div className="grid gap-4 card p-4">
        <label className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-medoxy-muted" size={18} />
          <input
            className="h-12 w-full rounded-lg border border-medoxy-border pl-11 pr-4 text-sm outline-none transition focus:border-medoxy-primary"
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
                className={`rounded-lg border px-4 py-2 text-sm font-black transition ${active ? "border-medoxy-primary bg-medoxy-primary text-white shadow-soft" : "border-medoxy-border bg-white text-medoxy-text hover:border-medoxy-primary"}`}
                onClick={() => setCategory(item)}
              >
                {item === "all" ? "All Categories" : item}
              </button>
            );
          })}
        </div>
        <label className="flex items-center gap-3 rounded-lg border border-medoxy-border bg-white px-4">
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
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {filtered.map((product) => <ProductCard key={product.slug} product={product} />)}
      </div>
    </div>
  );
}
