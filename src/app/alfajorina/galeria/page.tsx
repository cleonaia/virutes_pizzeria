import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Instagram } from "lucide-react";
import { alfajorinaLinks } from "@/config/alfajorina";

const galleryItems = [
  { src: "https://images.unsplash.com/photo-1519869325930-281384150729?w=900&q=85", alt: "Caja de postres", label: "Caja editorial" },
  { src: "https://images.unsplash.com/photo-1558303420-c6d3ac4f8c04?w=900&q=85", alt: "Tarta", label: "Tartas" },
  { src: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=900&q=85", alt: "Alfajores", label: "Alfajores" },
  { src: "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=900&q=85", alt: "Postre individual", label: "Capas suaves" },
  { src: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=900&q=85", alt: "Preparación", label: "Proceso" },
  { src: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=900&q=85", alt: "Vitrina dulce", label: "Vitrina" },
];

export default function AlfajorinaGaleriaPage() {
  return (
    <main className="pt-20">
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-alfe-frambuesa">Galería</p>
          <h1 className="mt-3 font-display text-5xl text-alfe-cacao sm:text-6xl">Una vitrina dulce, cálida y muy apetecible.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-alfe-cacao/65">La galería mezcla producto, atmósfera y regalo. Es el puente visual entre Instagram y la tienda.</p>
        </div>
      </section>

      <section className="alfe-surface px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item, index) => (
            <article key={item.label} className={`alfe-card overflow-hidden ${index === 0 || index === 3 ? "xl:col-span-2" : ""}`}>
              <div className={`relative ${index === 0 || index === 3 ? "h-96" : "h-80"}`}>
                <Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-alfe-cacao/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/55">{item.label}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-7xl rounded-[32px] bg-gradient-to-r from-alfe-rose to-alfe-caramel px-6 py-10 text-white sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/55">Instagram</p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Mismo tono, misma energía, misma obsesión por el detalle.</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">La web se apoya en una narrativa visual parecida al perfil social: producto fresco, colores cálidos y una sensación de cercanía.</p>
            </div>
            <Link href={alfajorinaLinks.instagram} target="_blank" rel="noreferrer" className="btn-alfe-primary bg-white text-alfe-cacao hover:bg-alfe-cream">
              <Instagram className="h-4 w-4" />
              Abrir Instagram
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}