// ─── Alfajorina brand data ──────────────────────────────────────────────────
export const alfajorinaConfig = {
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
    "https://www.google.com/maps/search/?api=1&query=Passeig+22+de+Juliol+155+local+3+Terrassa",
  googleMapsEmbed:
    "https://maps.google.com/maps?q=Passeig+22+de+Juliol+155+local+3+Terrassa&t=&z=17&ie=UTF8&iwloc=&output=embed",
};

export const alfajorinaContact = {
  phone: "+34 600 123 456",
  phonePretty: "+34 600 123 456",
  phoneHref: "tel:+34600123456",
  email: "hola@alfajorina.com",
  whatsappNumber: "34600123456",
};

export const alfajorinaLinks = {
  instagram: "https://www.instagram.com/alfajorina/",
  facebook: "https://www.facebook.com/alfajorina/",
  whatsapp: `https://wa.me/${alfajorinaContact.whatsappNumber}`,
  email: alfajorinaContact.email,
};

export const alfajorinaHours = [
  { days: "Lunes – Sábado", time: "08:00 – 15:00", closed: false },
  { days: "Domingo", time: "Cerrado", closed: true },
];

export const alfajorinaNavLinks = [
  { href: "/alfajorina", label: "Inicio" },
  { href: "/alfajorina/menu", label: "Tienda" },
  { href: "/alfajorina/nosotros", label: "Nosotros" },
  { href: "/alfajorina/galeria", label: "Galería" },
  { href: "/alfajorina/pedidos", label: "Pedidos" },
  { href: "/alfajorina/contacto", label: "Contacto" },
];

export const alfajorinaStats = [
  { value: "100%", label: "Hecho a mano" },
  { value: "Cada día", label: "Fresco" },
  { value: "Love", label: "En cada capa" },
  { value: "Terrassa", label: "Desde aquí" },
];

export const alfajorinaValues = [
  {
    title: "Frescura real",
    description: "Trabajamos con tandas cortas para que cada pieza llegue tierna, brillante y en su mejor momento.",
  },
  {
    title: "Ingredientes honestos",
    description: "Mantequilla, cacao, frutas, frutos secos y dulce de leche de calidad: lo justo, lo bueno y bien medido.",
  },
  {
    title: "Detalles cuidados",
    description: "La estética importa, pero siempre al servicio del sabor. Cada caja debe abrirse como un pequeño regalo.",
  },
];

export const alfajorinaTestimonials = [
  {
    quote: "Los alfajores de chocolate son adictivos. Se nota que están hechos con mimo.",
    author: "Cliente feliz",
  },
  {
    quote: "Las tartas se ven preciosas y saben aún mejor. Ideal para regalar.",
    author: "Pedido de fin de semana",
  },
  {
    quote: "La combinación de fruta fresca y crema es justo lo que buscaba.",
    author: "Fan de los postres ligeros",
  },
];

export const alfajorinaFeaturedProducts = [
  { id: "alfajor-clasico", label: "Alfajor clásico", note: "Dulce de leche + coco", accent: "caramel" },
  { id: "tarta-queso", label: "Tarta de queso", note: "Sedosa y cremosa", accent: "pistacho" },
  { id: "box-regalo", label: "Box regalo", note: "Perfecta para sorprender", accent: "canela" },
];