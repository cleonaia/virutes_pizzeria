"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, MapPin, Mail, Phone, Clock } from "lucide-react";
import { alfajorinaConfig, alfajorinaContact, alfajorinaHours, alfajorinaLinks, alfajorinaNavLinks } from "@/config/alfajorina";

export function AlfajorinaFooter() {
  const pathname = usePathname();

  if (!pathname.startsWith("/alfajorina")) return null;

  return (
    <footer className="border-t border-alfe-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/alfajorina" className="font-display text-4xl text-alfe-frambuesa transition-opacity hover:opacity-80">
              Alfajorina
            </Link>
            <p className="mt-2 font-serif italic text-lg text-alfe-cacao/75">{alfajorinaConfig.tagline} · {alfajorinaConfig.city}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-alfe-cacao/65">{alfajorinaConfig.description}</p>
            <div className="mt-6 flex items-center gap-2.5">
              <a href={alfajorinaLinks.instagram} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-alfe-cacao/10 text-alfe-cacao/65 transition-all hover:bg-alfe-frambuesa hover:text-white" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={alfajorinaLinks.facebook} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-alfe-cacao/10 text-alfe-cacao/65 transition-all hover:bg-[#1877F2] hover:text-white" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={alfajorinaLinks.whatsapp} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-alfe-cacao/10 text-alfe-cacao/65 transition-all hover:bg-[#25D366] hover:text-white" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </a>
              <a href={`mailto:${alfajorinaLinks.email}`} className="flex h-9 w-9 items-center justify-center rounded-full bg-alfe-cacao/10 text-alfe-cacao/65 transition-all hover:bg-alfe-cacao hover:text-white" aria-label="Correo">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-alfe-frambuesa">Navegación</h4>
            <ul className="space-y-3">
              {alfajorinaNavLinks.map(({ href, label }) => (
                <li key={href}><Link href={href} className="text-sm text-alfe-cacao/70 transition-colors hover:text-alfe-frambuesa">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 flex items-center gap-2 text-xs font-black uppercase tracking-[0.35em] text-alfe-frambuesa"><Clock className="h-4 w-4" /> Horario</h4>
            <ul className="space-y-2.5 text-sm">
              {alfajorinaHours.map((entry) => (
                <li key={entry.days} className="flex items-start justify-between gap-4">
                  <span className={`font-medium ${entry.closed ? "text-alfe-cacao/45" : "text-alfe-cacao"}`}>{entry.days}</span>
                  <span className={`${entry.closed ? "text-alfe-frambuesa/70" : "text-alfe-cacao/70"}`}>{entry.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-alfe-frambuesa">Contacto</h4>
            <ul className="space-y-4 text-sm text-alfe-cacao/70">
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-alfe-frambuesa" /><span>{alfajorinaConfig.address}</span></li>
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 shrink-0 text-alfe-frambuesa" /><a href={alfajorinaContact.phoneHref} className="transition-colors hover:text-alfe-frambuesa">{alfajorinaContact.phonePretty}</a></li>
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 shrink-0 text-alfe-frambuesa" /><a href={`mailto:${alfajorinaContact.email}`} className="transition-colors hover:text-alfe-frambuesa">{alfajorinaContact.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-alfe-border pt-10 md:grid-cols-2">
          <div className="alfe-card overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1519869325930-281384150729?w=1200&q=85" alt="Caja Alfajorina" width={1200} height={700} className="h-56 w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center rounded-[28px] border border-alfe-border bg-alfe-cream px-6 py-8">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-alfe-frambuesa">Dulces frescos</p>
            <h3 className="mt-2 font-display text-4xl text-alfe-cacao">Hechos para regalar, compartir o repetir.</h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-alfe-cacao/65">Cada caja sale pensada para que abra una experiencia, no solo un pedido.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}