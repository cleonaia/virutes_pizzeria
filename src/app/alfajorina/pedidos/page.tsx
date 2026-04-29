"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Minus, Plus, ShoppingBag, Sparkles, Trash2, Truck } from "lucide-react";
import { alfajorinaProducts, alfajorinaCategories, type ProductCategory } from "@/features/alfajorina/data/menu";
import { formatCurrency } from "@/lib/utils";
import { alfajorinaContact, alfajorinaLinks } from "@/config/alfajorina";
import { useMemo, useState } from "react";

type CartState = Record<string, number>;

export default function AlfajorinaPedidosPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all");
  const [cart, setCart] = useState<CartState>({});

  const visibleProducts = useMemo(() => alfajorinaProducts.filter((item) => activeCategory === "all" || item.category === activeCategory), [activeCategory]);
  const cartItems = useMemo(() => Object.entries(cart).map(([id, quantity]) => ({ product: alfajorinaProducts.find((item) => item.id === id), quantity })).filter((entry): entry is { product: (typeof alfajorinaProducts)[number]; quantity: number } => Boolean(entry.product)), [cart]);
  const total = cartItems.reduce((sum, entry) => sum + entry.quantity * entry.product.price, 0);

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState(alfajorinaContact.phonePretty || "");
  const [pickupTime, setPickupTime] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "cash" | "apple">("card");
  const [notes, setNotes] = useState("");

  function addItem(id: string) { setCart((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 })); }
  function decreaseItem(id: string) {
    setCart((prev) => {
      const current = prev[id] ?? 0;
      if (current <= 1) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      return { ...prev, [id]: current - 1 };
    });
  }

  const paymentLabel = paymentMethod === "card" ? "Tarjeta / Apple Pay" : paymentMethod === "cash" ? "Efectivo" : "Apple Pay";

  const checkoutText = encodeURIComponent(
    `Hola Alfajorina, quiero hacer un pedido:\n${cartItems.map(({ product, quantity }) => `- ${quantity} x ${product.name}`).join("\n")}\n\nTotal estimado: ${formatCurrency(total, "es-ES")}\n\nNombre: ${customerName}\nTeléfono: ${customerPhone}\nHora de recogida: ${pickupTime}\nMétodo de pago: ${paymentLabel}\nNotas: ${notes}`
  );

  return (
    <main className="pt-20">
      <section className="bg-alfe-cacao px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/55">Pedidos</p>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl">Tu caja dulce, armada a medida.</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75">Añade piezas, revisa el resumen y finaliza por WhatsApp o email. Es simple, visual y funciona como una pequeña tienda online.</p>
        </div>
      </section>

      <section className="alfe-surface px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-6 flex flex-wrap gap-2">
              <button onClick={() => setActiveCategory("all")} className={`rounded-full px-4 py-2 text-sm font-semibold ${activeCategory === "all" ? "bg-alfe-frambuesa text-white" : "border border-alfe-border bg-white text-alfe-cacao"}`}>Todo</button>
              {alfajorinaCategories.map((category) => (
                <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`rounded-full px-4 py-2 text-sm font-semibold ${activeCategory === category.id ? "bg-alfe-frambuesa text-white" : "border border-alfe-border bg-white text-alfe-cacao"}`}>{category.label}</button>
              ))}
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {visibleProducts.map((product) => (
                <article key={product.id} className="alfe-card overflow-hidden">
                  <div className="relative h-52">
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                    {product.badge && <span className="absolute left-3 top-3 rounded-full bg-alfe-frambuesa px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white">{product.badge}</span>}
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="font-semibold text-alfe-cacao">{product.name}</h2>
                      <span className="text-lg font-black text-alfe-frambuesa">{formatCurrency(product.price, "es-ES")}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-alfe-cacao/65">{product.description}</p>
                    <button onClick={() => addItem(product.id)} className="mt-4 inline-flex items-center gap-2 rounded-full bg-alfe-cacao px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-alfe-frambuesa">
                      <Plus className="h-4 w-4" />
                      Añadir
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 h-fit space-y-5">
            <div className="alfe-card p-6">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-alfe-frambuesa" />
                <h2 className="text-lg font-semibold text-alfe-cacao">Resumen</h2>
              </div>
              {cartItems.length === 0 ? (
                <p className="mt-4 text-sm leading-relaxed text-alfe-cacao/60">Aún no has añadido nada. Empieza por un alfajor, una tarta o una caja regalo.</p>
              ) : (
                <div className="mt-5 space-y-4">
                  {cartItems.map(({ product, quantity }) => (
                    <div key={product.id} className="flex items-center justify-between gap-4 border-b border-alfe-border pb-4 last:border-none last:pb-0">
                      <div>
                        <p className="font-medium text-alfe-cacao">{product.name}</p>
                        <p className="text-xs text-alfe-cacao/50">{quantity} x {formatCurrency(product.price, "es-ES")}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <button onClick={() => decreaseItem(product.id)} className="rounded-full border border-alfe-border p-2 text-alfe-cacao transition-colors hover:border-alfe-frambuesa hover:text-alfe-frambuesa"><Minus className="h-3.5 w-3.5" /></button>
                        <button onClick={() => addItem(product.id)} className="rounded-full border border-alfe-border p-2 text-alfe-cacao transition-colors hover:border-alfe-frambuesa hover:text-alfe-frambuesa"><Plus className="h-3.5 w-3.5" /></button>
                        <button onClick={() => setCart((prev) => { const next = { ...prev }; delete next[product.id]; return next; })} className="rounded-full border border-alfe-border p-2 text-alfe-cacao transition-colors hover:border-alfe-frambuesa hover:text-alfe-frambuesa"><Trash2 className="h-3.5 w-3.5" /></button>
                      </div>
                    </div>
                  ))}

                  <div className="flex items-center justify-between border-t border-alfe-border pt-4">
                    <span className="text-sm font-semibold text-alfe-cacao">Total estimado</span>
                    <span className="text-xl font-black text-alfe-frambuesa">{formatCurrency(total, "es-ES")}</span>
                  </div>

                  <div className="space-y-3 pt-2">
                    <a href={`${alfajorinaLinks.whatsapp}?text=${checkoutText}`} target="_blank" rel="noreferrer" className="btn-alfe-primary w-full">
                      <Sparkles className="h-4 w-4" />
                      Pedir por WhatsApp
                    </a>
                    <a href={`mailto:${alfajorinaContact.email}?subject=Pedido%20Alfajorina&body=${checkoutText}`} className="btn-alfe-ghost w-full">
                      Enviar por correo
                    </a>
                  </div>
                </div>
              )}
              {/* ── Checkout form ── */}
              <div className="mt-4 border-t border-alfe-border pt-4">
                <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-alfe-frambuesa">Datos de recogida</p>
                <div className="space-y-3">
                  <input value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="Tu nombre" className="w-full rounded-2xl border border-alfe-border bg-white px-4 py-3 text-sm text-alfe-cacao" />
                  <input value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} placeholder="+34 600 123 456" className="w-full rounded-2xl border border-alfe-border bg-white px-4 py-3 text-sm text-alfe-cacao" />
                  <input type="time" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} className="w-full rounded-2xl border border-alfe-border bg-white px-4 py-3 text-sm text-alfe-cacao" />

                  <div>
                    <p className="mb-2 text-xs font-semibold text-alfe-cacao">Método de pago</p>
                    <div className="flex gap-2">
                      <button type="button" onClick={() => setPaymentMethod("card")} className={`rounded-full px-4 py-2 text-sm font-semibold ${paymentMethod === "card" ? "bg-alfe-frambuesa text-white" : "border border-alfe-border bg-white text-alfe-cacao"}`}>Tarjeta / Apple Pay</button>
                      <button type="button" onClick={() => setPaymentMethod("cash")} className={`rounded-full px-4 py-2 text-sm font-semibold ${paymentMethod === "cash" ? "bg-alfe-frambuesa text-white" : "border border-alfe-border bg-white text-alfe-cacao"}`}>Efectivo</button>
                    </div>
                  </div>

                  <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Notas / alérgenos" className="w-full rounded-2xl border border-alfe-border bg-white px-4 py-3 text-sm text-alfe-cacao resize-none" rows={3} />

                  <a href={`${alfajorinaLinks.whatsapp}?text=${checkoutText}`} target="_blank" rel="noreferrer" className={`w-full inline-flex items-center justify-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold ${cartItems.length === 0 ? "bg-alfe-cacao/30 text-white pointer-events-none opacity-60" : "bg-alfe-frambuesa text-white"}`}>
                    Continuar al pago
                  </a>
                </div>
              </div>

            </div>

            <div className="rounded-[32px] bg-gradient-to-r from-alfe-rose to-alfe-frambuesa p-6 text-white">
              <div className="flex items-center gap-2"><Truck className="h-5 w-5" /><h3 className="text-lg font-semibold">Entrega y recogida</h3></div>
              <p className="mt-3 text-sm leading-relaxed text-white/75">Perfecto para recogida rápida, entrega local o cajas de regalo listas para sorprender.</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}