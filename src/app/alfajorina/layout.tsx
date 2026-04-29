import type { Metadata } from "next";
import { AlfajorinaNavbar } from "@/components/alfajorina/Navbar";
import { AlfajorinaFooter } from "@/components/alfajorina/Footer";

export const metadata: Metadata = {
  title: {
    default: "Alfajorina — Alfajores y dulces en Barcelona",
    template: "%s | Alfajorina",
  },
  description:
    "Alfajorina es una pastelería artesanal con alfajores, tartas y dulces frescos hechos con amor y los mejores ingredientes.",
  openGraph: {
    title: "Alfajorina — Alfajores y dulces en Barcelona",
    description: "Dulces frescos, hechos con amor.",
    type: "website",
  },
};

export default function AlfajorinaLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-alfe-cream text-alfe-cacao">
      <AlfajorinaNavbar />
      <main>{children}</main>
      <AlfajorinaFooter />
    </div>
  );
}