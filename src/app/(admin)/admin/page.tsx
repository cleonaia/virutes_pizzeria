import Link from "next/link";
import { LayoutDashboard, CalendarCheck, ShoppingBag, MessageSquare, ArrowRight } from "lucide-react";

const stats = [
  { icon: CalendarCheck, label: "Reservas pendientes",  value: "–", color: "bg-alfe-rose/10 text-alfe-frambuesa" },
  { icon: ShoppingBag,   label: "Pedidos hoy",         value: "–", color: "bg-alfe-caramel/10 text-alfe-caramel" },
  { icon: MessageSquare, label: "Mensajes nuevos",     value: "–", color: "bg-alfe-pistacho/10 text-alfe-pistacho" },
];

export default function AdminDashboardPage() {
  // TODO: connect to real data source when auth + DB are wired up
  return (
    <div className="min-h-screen bg-alfe-cream">
      {/* Header */}
      <div className="border-b border-alfe-border bg-alfe-cream/90 px-6 py-5">
        <div className="mx-auto flex max-w-6xl items-center gap-3">
          <LayoutDashboard className="h-5 w-5 text-alfe-frambuesa" />
          <h1 className="font-serif text-2xl italic text-alfe-cacao">Panel administrativo — Alfajorina</h1>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-10 px-6 py-12">
        {/* Stats */}
        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-alfe-border bg-white p-6">
              <div className={`mb-3 inline-flex rounded-xl p-3 ${s.color}`}>
                <s.icon className="h-5 w-5" />
              </div>
              <p className="text-3xl font-bold text-alfe-cacao">{s.value}</p>
              <p className="mt-1 text-sm text-alfe-cacao/60">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Sections */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-alfe-border bg-white p-6">
            <h2 className="mb-2 font-semibold text-alfe-cacao">Properes reserves</h2>
            <p className="text-sm text-alfe-cacao/60">Aquí apareixeran les reserves confirmades quan el sistema de reserves estigui connectat.</p>
          </div>
          <div className="rounded-2xl border border-alfe-border bg-white p-6">
            <h2 className="mb-2 font-semibold text-alfe-cacao">Darreres comandes</h2>
            <p className="text-sm text-alfe-cacao/60">Aquí apareixeran les comandes Click &amp; Collect quan la botiga estigui activa.</p>
          </div>
        </div>

        <div className="rounded-2xl border border-dashed border-alfe-frambuesa/30 bg-alfe-frambuesa/5 p-6">
          <p className="text-sm font-medium text-alfe-frambuesa">⚠️ Panell en construcció</p>
          <p className="mt-1 text-sm text-alfe-cacao/70">
            L'autenticació i la base de dades s'integraran en la propera fase. Mentre tant,{" "}
            <Link href="/reservas" className="underline">pots veure la pàgina de reserves</Link> directament.
          </p>
        </div>
      </div>
    </div>
  );
}
