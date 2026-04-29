import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { alfajorinaValues } from "@/config/alfajorina";

const milestones = [
  { year: "Origen", text: "Todo empezó con una receta casera de alfajores y la idea de convertir un antojo en una marca bonita y con sentido." },
  { year: "Proceso", text: "Crecimos con tandas pequeñas, pruebas de sabor y una obsesión por la textura: suave por dentro, impecable por fuera." },
  { year: "Hoy", text: "La web recoge esa misma lógica: piezas cuidadas, experiencia clara y un tono cálido, cercano y muy visual." },
];

export default function AlfajorinaNosotrosPage() {
  return (
    <main className="pt-20">
      <section className="bg-alfe-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <ScrollReveal>
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-alfe-frambuesa">Nosotros</p>
            <h1 className="mt-3 font-display text-5xl text-alfe-cacao sm:text-6xl">Una pastelería pensada para emocionar antes del primer bocado.</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-alfe-cacao/65">Alfajorina nace de una idea simple: hacer postres frescos, delicados y apetecibles, con presencia editorial y sabor honesto.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {alfajorinaValues.map((item) => (
                <article key={item.title} className="rounded-[24px] border border-alfe-border bg-white p-5">
                  <h2 className="text-lg font-semibold text-alfe-cacao">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-alfe-cacao/65">{item.description}</p>
                </article>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="relative">
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-alfe-rose/20 blur-3xl" />
            <div className="alfe-card overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=1400&q=85" alt="Preparación de postres" width={1400} height={1000} className="h-[520px] w-full object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {milestones.map((item) => (
              <article key={item.year} className="alfe-card p-7">
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-alfe-frambuesa">{item.year}</p>
                <p className="mt-3 text-sm leading-relaxed text-alfe-cacao/70">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <ScrollReveal>
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-alfe-frambuesa">Proceso</p>
              <h2 className="mt-3 font-serif text-4xl text-alfe-cacao sm:text-5xl">La estética nace del mismo cuidado con el que se trabaja la receta.</h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-alfe-cacao/65">No buscamos llenar la página de ruido. La estructura necesita explicar qué vendemos, cómo se siente y por qué merece la pena.</p>
              <Link href="/alfajorina/menu" className="mt-7 inline-flex items-center gap-2 rounded-full bg-alfe-frambuesa px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-alfe-cacao">
                <Sparkles className="h-4 w-4" />
                Ver la tienda
                <ArrowRight className="h-4 w-4" />
              </Link>
            </ScrollReveal>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="alfe-card overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1558303420-c6d3ac4f8c04?w=900&q=85" alt="Caja de postres" width={900} height={900} className="h-56 w-full object-cover" />
              </div>
              <div className="alfe-card overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1562440499-64c9a111f713?w=900&q=85" alt="Postre al plato" width={900} height={900} className="h-56 w-full object-cover" />
              </div>
              <div className="alfe-card overflow-hidden sm:col-span-2">
                <Image src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=1400&q=85" alt="Alfajores" width={1400} height={800} className="h-64 w-full object-cover" />
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-[32px] bg-gradient-to-r from-alfe-cacao to-alfe-caramel p-8 text-white">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/55">Firma de marca</p>
                <h2 className="mt-3 font-serif text-4xl">Postres frescos, hechos con amor y con ingredientes que se notan.</h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">Ese es el hilo conductor de la identidad visual y del contenido: simple, apetecible y con una sensación de regalo continuo.</p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.3em]">
                <Heart className="h-4 w-4" />
                Hecho con cariño
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}