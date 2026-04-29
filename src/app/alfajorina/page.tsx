import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Facebook, Gift, Heart, Instagram, Sparkles, Star } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { alfajorinaConfig, alfajorinaFeaturedProducts, alfajorinaLinks, alfajorinaStats, alfajorinaTestimonials, alfajorinaValues } from "@/config/alfajorina";

const heroCards = [
  {
    title: "Alfajores",
    text: "Clásicos, de chocolate o pistacho.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=900&q=85",
  },
  {
    title: "Tartas",
    text: "Queso, limón y capas suaves.",
    image: "https://images.unsplash.com/photo-1558303420-c6d3ac4f8c04?w=900&q=85",
  },
  {
    title: "Cajas regalo",
    text: "Para cumpleaños, sorpresas y detalles.",
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?w=900&q=85",
  },
];

export default function AlfajorinaHomePage() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative isolate min-h-screen overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=1920&q=90"
          alt="Pastelería Alfajorina"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-alfe-cacao/70 via-alfe-cacao/40 to-alfe-cream/90" />
        <div className="absolute inset-0 alfe-dots opacity-20" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 py-28 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.35em] backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              {alfajorinaConfig.tagline}
            </span>
            <h1 className="mt-6 font-display text-[clamp(4.8rem,14vw,9rem)] leading-[0.9] tracking-tight drop-shadow-2xl">{alfajorinaConfig.name}</h1>
            <p className="mt-6 max-w-2xl font-serif text-[clamp(1.4rem,3vw,2.1rem)] italic leading-snug text-white/92">{alfajorinaConfig.slogan}</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/72 sm:text-lg">{alfajorinaConfig.description}</p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/alfajorina/pedidos" className="btn-alfe-primary px-8 py-4 text-sm">
                <Gift className="h-4 w-4" />
                Ver pedidos
              </Link>
              <Link href="/alfajorina/menu" className="btn-alfe-ghost border-white/25 bg-white/10 px-8 py-4 text-sm text-white hover:bg-white/15">
                Explorar tienda
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-white/65">
              <a href={alfajorinaLinks.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-white"><Instagram className="h-4 w-4" /> Instagram</a>
              <span className="hidden h-3 w-px bg-white/20 sm:block" />
              <a href={alfajorinaLinks.facebook} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-white"><Facebook className="h-4 w-4" /> Facebook</a>
              <span className="hidden h-3 w-px bg-white/20 sm:block" />
              <span className="inline-flex items-center gap-2"><Heart className="h-4 w-4" /> Hecho con amor</span>
              <span className="hidden h-3 w-px bg-white/20 sm:block" />
              <span className="inline-flex items-center gap-2"><Star className="h-4 w-4" /> Ingredientes top</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-alfe-cacao py-8 text-center text-white">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 sm:grid-cols-4">
          {alfajorinaStats.map((item) => (
            <div key={item.label}>
              <p className="font-display text-2xl leading-none text-alfe-cream">{item.value}</p>
              <p className="mt-1 text-[9px] font-black uppercase tracking-[0.35em] text-white/35">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="alfe-surface px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-alfe-frambuesa">Lo más dulce</p>
            <h2 className="mt-3 font-serif text-4xl text-alfe-cacao sm:text-5xl">Selecciones pensadas para enamorar al primer vistazo.</h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {alfajorinaFeaturedProducts.map((item, index) => (
              <ScrollReveal key={item.id} className="alfe-card overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={index === 0 ? "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=900&q=85" : index === 1 ? "https://images.unsplash.com/photo-1558303420-c6d3ac4f8c04?w=900&q=85" : "https://images.unsplash.com/photo-1519869325930-281384150729?w=900&q=85"}
                    alt={item.label}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${index === 0 ? "from-alfe-rose/85" : index === 1 ? "from-alfe-caramel/85" : "from-alfe-pistacho/80"} via-transparent to-transparent`} />
                </div>
                <div className="p-6">
                  <p className="text-[10px] font-black uppercase tracking-[0.35em] text-alfe-frambuesa">{item.note}</p>
                  <h3 className="mt-2 font-display text-3xl text-alfe-cacao">{item.label}</h3>
                  <Link href="/alfajorina/menu" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-alfe-cacao transition-colors hover:text-alfe-frambuesa">
                    Ver en la tienda
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <ScrollReveal>
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-alfe-frambuesa">Nuestro estilo</p>
            <h2 className="mt-3 font-serif text-4xl text-alfe-cacao sm:text-5xl">Dulces frescos, cuidados y con un punto muy elegante.</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-alfe-cacao/65">La idea es simple: una pastelería con alma de regalo, visualmente apetitosa y pensada para que cada pedido tenga sentido.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {alfajorinaValues.map((value) => (
                <article key={value.title} className="rounded-[24px] border border-alfe-border bg-alfe-cream p-5">
                  <h3 className="text-lg font-semibold text-alfe-cacao">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-alfe-cacao/65">{value.description}</p>
                </article>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="relative">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-alfe-rose/20 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-alfe-pistacho/20 blur-2xl" />
            <div className="alfe-card alfe-glow overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1558303420-c6d3ac4f8c04?w=1400&q=85" alt="Caja de postres Alfajorina" width={1400} height={1200} className="h-[520px] w-full object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-alfe-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {alfajorinaTestimonials.map((item) => (
              <article key={item.author} className="alfe-card p-7">
                <div className="flex gap-1 text-alfe-frambuesa">
                  {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-base leading-relaxed text-alfe-cacao/75">“{item.quote}”</p>
                <p className="mt-5 text-xs font-black uppercase tracking-[0.3em] text-alfe-cacao/45">{item.author}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-[32px] bg-gradient-to-r from-alfe-cacao to-alfe-frambuesa px-6 py-10 text-white sm:px-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/55">Instagram</p>
                <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Siguenos y descubre el dulce del día.</h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">Publicamos cajas, novedades, encargos y piezas recién hechas para que la web tenga el mismo pulso que el perfil.</p>
              </div>
              <Link href={alfajorinaLinks.instagram} target="_blank" rel="noreferrer" className="btn-alfe-primary bg-white text-alfe-cacao hover:bg-alfe-cream">
                <Instagram className="h-4 w-4" />
                Abrir Instagram
              </Link>
              <Link href={alfajorinaLinks.facebook} target="_blank" rel="noreferrer" className="btn-alfe-ghost border-white/25 bg-white/10 px-8 py-4 text-sm text-white hover:bg-white/15">
                <Facebook className="h-4 w-4" />
                Abrir Facebook
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}