"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, Instagram, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import { alfajorinaContact, alfajorinaConfig, alfajorinaHours, alfajorinaLinks } from "@/config/alfajorina";

const contactReasons = [
  { icon: MessageSquare, title: "Encargos y cajas", description: "Te ayudamos con pedidos para regalo, eventos pequeños o celebraciones." },
  { icon: Clock, title: "Respuesta rápida", description: "Si escribes por una consulta concreta, normalmente contestamos en el mismo día." },
  { icon: MapPin, title: "Barcelona", description: "La marca vive aquí y la experiencia está pensada para ciudad, delivery y regalo." },
];

type FormState = { name: string; email: string; phone: string; subject: string; message: string };
const emptyForm: FormState = { name: "", email: "", phone: "", subject: "", message: "" };

function ContactForm() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-[28px] border border-alfe-border bg-alfe-cream px-6 py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-alfe-pistacho/20"><CheckCircle className="h-8 w-8 text-alfe-pistacho" /></div>
        <h3 className="font-display text-4xl text-alfe-cacao">Mensaje enviado</h3>
        <p className="max-w-sm text-sm leading-relaxed text-alfe-cacao/65">Gracias. Te responderemos lo antes posible con una propuesta dulce y clara.</p>
        <button onClick={() => { setForm(emptyForm); setSubmitted(false); }} className="text-xs font-black uppercase tracking-[0.28em] text-alfe-frambuesa underline underline-offset-4">Enviar otro mensaje</button>
      </div>
    );
  }

  const inputCls = "w-full rounded-2xl border border-alfe-border bg-white px-4 py-3.5 text-sm text-alfe-cacao placeholder:text-alfe-cacao/35 focus:border-alfe-frambuesa focus:outline-none focus:ring-2 focus:ring-alfe-frambuesa/15 transition-all";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required value={form.name} onChange={handleChange} placeholder="Tu nombre" className={inputCls} />
        <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+34 ..." className={inputCls} />
      </div>
      <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="tu@correo.com" className={inputCls} />
      <select name="subject" value={form.subject} onChange={handleChange} className={inputCls}>
        <option value="">Selecciona un tema</option>
        <option value="encargo">Encargo especial</option>
        <option value="evento">Evento / celebración</option>
        <option value="pedido">Pedido normal</option>
        <option value="ingredientes">Ingredientes / alérgenos</option>
      </select>
      <textarea name="message" required rows={6} value={form.message} onChange={handleChange} placeholder="Cuéntanos qué necesitas y te respondemos con una propuesta." className={inputCls + " resize-none"} />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-alfe-cacao/45">Si es urgente, mejor por teléfono o WhatsApp.</p>
        <button type="submit" disabled={loading} className="btn-alfe-primary sm:min-w-[220px]">
          {loading ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" /> : <Send className="h-4 w-4" />}
          {loading ? "Enviando..." : "Enviar mensaje"}
        </button>
      </div>
    </form>
  );
}

export default function AlfajorinaContactoPage() {
  return (
    <main className="pt-20">
      <section className="bg-alfe-cacao px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/55">Contacto</p>
            <h1 className="mt-3 font-display text-5xl sm:text-6xl">Encargos, regalos y dulces frescos.</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75">Hemos preparado un contacto claro para que puedas pedir sin fricción. Ideal para celebraciones, packs y encargos personalizados.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={alfajorinaContact.phoneHref} className="btn-alfe-primary bg-white text-alfe-cacao hover:bg-alfe-cream"><Phone className="h-4 w-4" /> Llamar</a>
              <a href={alfajorinaLinks.whatsapp} target="_blank" rel="noreferrer" className="btn-alfe-ghost border-white/20 bg-white/10 text-white hover:bg-white/15"><MessageSquare className="h-4 w-4" /> WhatsApp</a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[32px] border border-white/10">
            <Image src="https://images.unsplash.com/photo-1558303420-c6d3ac4f8c04?w=1400&q=85" alt="Caja de postres" width={1400} height={900} className="h-[420px] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="alfe-surface px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="alfe-card p-8 sm:p-10">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-alfe-frambuesa">Formulario</p>
            <h2 className="mt-2 font-display text-5xl text-alfe-cacao">Cuéntanos qué dulce te apetece.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-alfe-cacao/60">Te ayudamos a elegir caja, combinación de sabores o formato de celebración.</p>
            <div className="mt-8"><ContactForm /></div>
          </div>

          <div className="space-y-5">
            <div className="alfe-card p-6">
              <h3 className="text-lg font-semibold text-alfe-cacao">Información</h3>
              <ul className="mt-4 space-y-3 text-sm text-alfe-cacao/70">
                <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-alfe-frambuesa" /><span>{alfajorinaConfig.address}</span></li>
                <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-alfe-frambuesa" /><a href={alfajorinaContact.phoneHref} className="hover:text-alfe-frambuesa">{alfajorinaContact.phonePretty}</a></li>
                <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-alfe-frambuesa" /><a href={`mailto:${alfajorinaContact.email}`} className="hover:text-alfe-frambuesa">{alfajorinaContact.email}</a></li>
              </ul>
            </div>

            <div className="alfe-card p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-alfe-cacao"><Clock className="h-4 w-4 text-alfe-frambuesa" /> Horario</h3>
              <ul className="mt-4 space-y-2 text-sm text-alfe-cacao/70">
                {alfajorinaHours.map((entry) => (
                  <li key={entry.days} className="flex items-start justify-between gap-4"><span className={`font-medium ${entry.closed ? "text-alfe-cacao/45" : "text-alfe-cacao"}`}>{entry.days}</span><span className={entry.closed ? "text-alfe-frambuesa/70" : "text-alfe-cacao/70"}>{entry.time}</span></li>
                ))}
              </ul>
            </div>

            <div className="rounded-[32px] bg-gradient-to-r from-alfe-rose to-alfe-frambuesa p-7 text-white">
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/55">Social</p>
              <h3 className="mt-2 font-serif text-3xl">Síguenos para ver lanzamientos, cajas y novedades.</h3>
              <Link href={alfajorinaLinks.instagram} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-alfe-cacao transition-all hover:bg-alfe-cream">
                <Instagram className="h-4 w-4" /> Instagram <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}