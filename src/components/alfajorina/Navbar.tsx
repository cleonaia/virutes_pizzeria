"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag, Sparkles } from "lucide-react";
import { alfajorinaNavLinks } from "@/config/alfajorina";

export function AlfajorinaNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navBg = scrolled ? "bg-alfe-cream/95 backdrop-blur-md shadow-sm border-b border-alfe-border" : "bg-alfe-cacao/95";
  const textColor = scrolled ? "text-alfe-cacao" : "text-white";
  const logoColor = scrolled ? "text-alfe-frambuesa" : "text-white";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/alfajorina" className={`flex items-center gap-2 font-display text-3xl transition-colors ${logoColor}`}>
            <Sparkles className="h-5 w-5" />
            Alfajorina
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {alfajorinaNavLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-semibold tracking-wide transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-alfe-frambuesa after:transition-all after:duration-300 ${active ? "after:w-full text-alfe-frambuesa" : `after:w-0 hover:after:w-full ${textColor} hover:text-alfe-frambuesa`}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/alfajorina/pedidos" className="hidden md:inline-flex btn-alfe-primary px-5 py-2.5 text-xs">
              <ShoppingBag className="h-4 w-4" />
              Pedir ahora
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className={`rounded-lg p-2 transition-colors md:hidden ${textColor}`}
              aria-label="Abrir menú"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-[100] transition-all duration-300 ${mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}>
        <div className="absolute inset-0 bg-alfe-cream" />
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-alfe-rose/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-alfe-pistacho/15 blur-3xl" />
        <div className="relative flex h-full flex-col">
          <div className="flex items-center justify-between px-6 pb-4 pt-7">
            <span className="font-display text-3xl text-alfe-frambuesa">Alfajorina</span>
            <button onClick={() => setMobileOpen(false)} className="rounded-lg p-2 text-alfe-cacao transition-colors hover:text-alfe-frambuesa" aria-label="Cerrar menú">
              <X className="h-7 w-7" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center gap-6 -mt-8">
            {alfajorinaNavLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{ animationDelay: `${index * 60}ms` }}
                className="animate-fade-up font-serif text-4xl italic text-alfe-cacao transition-colors hover:text-alfe-frambuesa"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/alfajorina/pedidos" onClick={() => setMobileOpen(false)} className="mt-4 btn-alfe-primary px-10 py-4 text-base">
              Pedir ahora
            </Link>
          </nav>

          <p className="pb-8 text-center text-xs text-alfe-cacao/45">Dulces frescos, hechos con amor</p>
        </div>
      </div>
    </>
  );
}