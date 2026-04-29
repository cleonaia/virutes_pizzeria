// ─── Alfajorina Brand Data ────────────────────────────────────────────────────
export const siteConfig = {
  name: "Alfajorina",
  tagline: "Pastelería y dulces",
  slogan: "Hechos con amor.",
  sloganSub: "Postres frescos, delicados y muy irresistibles.",
  city: "Terrassa",
  description:
    "Aquí encontrarás los postres más deliciosos y frescos, hechos con amor y los mejores ingredientes.",
  address: "Passeig 22 de Juliol 155, local 3, Terrassa",
  addressShort: "Passeig 22 de Juliol 155, local 3 · Terrassa",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Passeig+22+de+Juliol+155+Terrassa",
  googleMapsEmbed:
    "https://maps.google.com/maps?q=Passeig+22+de+Juliol+155+Terrassa&t=&z=17&ie=UTF8&iwloc=&output=embed",
};

export const contactInfo = {
  phone: "+34 600 123 456",
  phonePretty: "+34 600 123 456",
  phoneHref: "tel:+34600123456",
  email: "hola@alfajorina.com",
  whatsappNumber: "34600123456",
};

export const socialLinks = {
  instagram: "https://www.instagram.com/alfajorina/",
  tiktok: "https://www.tiktok.com/@alfajorina",
  whatsapp: `https://wa.me/${contactInfo.whatsappNumber}`,
  phone: contactInfo.phone,
  email: contactInfo.email,
};

export const hours = [
  { days: "Dilluns",           time: "Tancat",               closed: true },
  { days: "Dimarts – Divendres", time: "12:00–15:30 / 19:30–22:30", closed: false },
  { days: "Dissabte",          time: "12:00–23:00",           closed: false },
  { days: "Diumenge",          time: "12:00–16:30",           closed: false },
];

export const navLinks = [
  { href: "/",           label: "Inici"    },
  { href: "/menu",       label: "Carta"    },
  { href: "/pedidos",    label: "Pedidos"  },
  { href: "/qui-som",    label: "Qui som"  },
  { href: "/galeria",    label: "Galeria"  },
  { href: "/blog",       label: "Novetats" },
  { href: "/contacto",   label: "Contacte" },
];

export const claims = [
  "Massa, temps i ànima.",
  "La pastisseria artesanal d'Alfajorina.",
  "El sabor que et farà tornar.",
];

export const values = [
  {
    icon: "leaf",
    title: "Ingredients locals",
    description:
      "Treballem amb productors de proximitat. Cada ingredient té nom i origen.",
  },
  {
    icon: "clock",
    title: "48 hores de fermentació",
    description:
      "La nostra massa mare fermenta lentament. No hi ha dreceres quan es cuina amb rigor.",
  },
  {
    icon: "sun",
    title: "Temporada sempre",
    description:
      "La carta canvia amb l'estació. Mengem el que la terra ens dona ara.",
  },
];
