"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Search, SlidersHorizontal } from "lucide-react";
import { alfajorinaCategories, alfajorinaProducts, type ProductCategory } from "@/features/alfajorina/data/menu";
import { formatCurrency } from "@/lib/utils";

export default function AlfajorinaMenuPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all");
  const [search, setSearch] = useState("");
  const [showAllergens, setShowAllergens] = useState(false);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return alfajorinaProducts.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const matchesSearch = !q || item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="pt-20">
      <section className="relative overflow-hidden bg-gradient-to-br from-alfe-cacao via-alfe-frambuesa to-alfe-caramel px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 alfe-dots opacity-20" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/60">Tienda</p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl">Dulces para antojos, regalos y celebraciones.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/78">Filtra por categoría, explora la carta y descubre qué lleva cada pieza antes de pedir.</p>
        </div>
      </section>

      <div className="sticky top-20 z-30 border-b border-alfe-border bg-alfe-cream/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setActiveCategory("all")} className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${activeCategory === "all" ? "bg-alfe-frambuesa text-white" : "border border-alfe-border bg-white text-alfe-cacao hover:border-alfe-frambuesa hover:text-alfe-frambuesa"}`}>Todo</button>
              {alfajorinaCategories.map((category) => (
                <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${activeCategory === category.id ? "bg-alfe-frambuesa text-white" : "border border-alfe-border bg-white text-alfe-cacao hover:border-alfe-frambuesa hover:text-alfe-frambuesa"}`}>
                  {category.label}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <div className="relative min-w-[220px] flex-1 lg:w-72">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-alfe-cacao/35" />
                <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar dulce..." className="w-full rounded-full border border-alfe-border bg-white py-2.5 pl-9 pr-4 text-sm text-alfe-cacao placeholder:text-alfe-cacao/35 focus:border-alfe-frambuesa focus:outline-none" />
              </div>
              <button onClick={() => setShowAllergens((value) => !value)} className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold transition-all ${showAllergens ? "border-alfe-frambuesa bg-alfe-frambuesa text-white" : "border-alfe-border bg-white text-alfe-cacao hover:border-alfe-frambuesa"}`}>
                <SlidersHorizontal className="h-3.5 w-3.5" />
                Alérgenos
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="alfe-surface px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((item) => (
              <article key={item.id} className="alfe-card group overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" />
                  {item.badge && <span className="absolute left-3 top-3 rounded-full bg-alfe-frambuesa px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white">{item.badge}</span>}
                  {item.seasonal && <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-alfe-cacao">Temporada</span>}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="font-semibold text-alfe-cacao">{item.name}</h2>
                    <span className="text-lg font-black text-alfe-frambuesa">{formatCurrency(item.price, "es-ES")}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-alfe-cacao/65">{item.description}</p>
                  {showAllergens && item.allergens.length > 0 && (
                    <div className="mt-4 border-t border-alfe-border pt-4">
                      <p className="mb-2 text-[10px] font-black uppercase tracking-[0.3em] text-alfe-cacao/45">Alérgenos</p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.allergens.map((allergen) => (
                          <span key={allergen} className="rounded-full border border-alfe-border bg-alfe-cream px-2.5 py-1 text-[11px] text-alfe-cacao/70">{allergen}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_360px]">
            <div className="rounded-[32px] bg-gradient-to-r from-alfe-cacao to-alfe-frambuesa p-8 text-white">
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/55">Selección</p>
              <h2 className="mt-3 font-serif text-4xl">Piezas pensadas para mostrar bien en web y salir mejor en mesa.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75">Cada ficha está construida para que la tienda funcione como escaparate, carta y carta de intenciones al mismo tiempo.</p>
              <Link href="/alfajorina/pedidos" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-alfe-cacao transition-all hover:bg-alfe-cream">
                <Heart className="h-4 w-4" />
                Ir a pedidos
              </Link>
            </div>

            <div className="alfe-card overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1558303420-c6d3ac4f8c04?w=1000&q=85" alt="Caja de postres" width={1000} height={1200} className="h-72 w-full object-cover" />
              <div className="p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-alfe-frambuesa">Consejo</p>
                <p className="mt-2 text-sm leading-relaxed text-alfe-cacao/65">Para celebraciones, mezcla alfajores clásicos con una tarta y un box regalo. Funciona muy bien como composición de catálogo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}