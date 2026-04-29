"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

type Fields = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  marketing: boolean;
};
const empty: Fields = { firstName: "", lastName: "", email: "", password: "", marketing: false };

export default function RegistrePage() {
  const [form, setForm] = useState<Fields>(empty);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const inputCls =
    "w-full rounded-xl border border-alfe-border bg-white/60 px-4 py-3 text-sm text-alfe-cacao placeholder:text-alfe-cacao/40 focus:outline-none focus:ring-2 focus:ring-alfe-frambuesa/30 transition";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: wire up real registration
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setDone(true);
  }

  if (done) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-alfe-cream-soft px-4 text-center">
        <CheckCircle className="h-14 w-14 text-alfe-pistacho" />
        <h2 className="font-serif text-3xl italic text-alfe-cacao">Compte creat!</h2>
        <p className="max-w-sm text-sm text-alfe-cacao/70">
          Benvingut/da a Alfajorina. En breu podràs accedir al teu espai de client.
        </p>
        <Link href="/auth/ingresar" className="btn-alfe-primary mt-4">Accedir</Link>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-alfe-cream-light px-4 py-24">
      <div className="w-full max-w-xl">
        {/* Logo */}
        <div className="mb-8 text-center">
          <Link href="/" className="font-display text-4xl text-alfe-frambuesa">Alfajorina</Link>
          <p className="mt-1 text-sm text-alfe-cacao/60">Crea el teu compte</p>
        </div>

        <div className="rounded-3xl border border-alfe-border bg-white p-8 shadow-sm">
          <h1 className="mb-6 font-serif text-2xl italic text-alfe-cacao">Registra't a Alfajorina</h1>

          <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-alfe-cacao/60">Nom *</label>
              <input
                required value={form.firstName}
                onChange={(e) => setForm((p) => ({ ...p, firstName: e.target.value }))}
                placeholder="El teu nom" className={inputCls}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-alfe-cacao/60">Cognoms *</label>
              <input
                required value={form.lastName}
                onChange={(e) => setForm((p) => ({ ...p, lastName: e.target.value }))}
                placeholder="Els teus cognoms" className={inputCls}
              />
            </div>
            <div className="md:col-span-2">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-alfe-cacao/60">Correu electrònic *</label>
              <input
                type="email" required value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                placeholder="tu@exemple.com" className={inputCls}
              />
            </div>
            <div className="md:col-span-2">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-alfe-cacao/60">Contrasenya *</label>
              <input
                type="password" required minLength={8} value={form.password}
                onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
                placeholder="Mínim 8 caràcters" className={inputCls}
              />
            </div>
            <div className="md:col-span-2">
              <label className="flex cursor-pointer items-start gap-3 text-sm text-alfe-cacao/70">
                <input
                  type="checkbox"
                  checked={form.marketing}
                  onChange={(e) => setForm((p) => ({ ...p, marketing: e.target.checked }))}
                  className="mt-0.5 h-4 w-4 rounded border-alfe-border accent-alfe-frambuesa"
                />
                Vull rebre novetats, ofertes i invitacions exclusives d'Alfajorina.
              </label>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit" disabled={loading}
                className="btn-primary flex w-full items-center justify-center gap-2 disabled:opacity-60"
              >
                {loading
                  ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  : null}
                {loading ? "Creant compte…" : "Crear compte"}
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-xs text-alfe-cacao/50">
            Ja tens compte?{" "}
            <Link href="/auth/ingresar" className="font-semibold text-alfe-frambuesa hover:underline">Accedeix</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
