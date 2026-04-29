export type Allergen = "gluten" | "lacteos" | "huevos" | "soja" | "frutos_secos" | "cacahuetes";

export type ProductCategory = "alfajores" | "tartas" | "dulces" | "cajas" | "bebidas";

export interface AlfajorinaProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  image: string;
  allergens: Allergen[];
  featured?: boolean;
  badge?: string;
  seasonal?: boolean;
}

export const alfajorinaCategories: { id: ProductCategory; label: string }[] = [
  { id: "alfajores", label: "Alfajores" },
  { id: "tartas", label: "Tartas" },
  { id: "dulces", label: "Dulces" },
  { id: "cajas", label: "Cajas regalo" },
  { id: "bebidas", label: "Bebidas" },
];

const imageA = "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=900&q=85";
const imageB = "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=900&q=85";
const imageC = "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=900&q=85";
const imageD = "https://images.unsplash.com/photo-1558303420-c6d3ac4f8c04?w=900&q=85";
const imageE = "https://images.unsplash.com/photo-1519869325930-281384150729?w=900&q=85";
const imageF = "https://images.unsplash.com/photo-1511381939415-e44015466834?w=900&q=85";

export const alfajorinaProducts: AlfajorinaProduct[] = [
  {
    id: "alfajor-classic",
    name: "Alfajor clásico",
    description: "Dos galletas suaves, dulce de leche casero y borde de coco rallado.",
    price: 3.2,
    category: "alfajores",
    image: imageA,
    allergens: ["gluten", "lacteos", "huevos"],
    featured: true,
    badge: "Más pedido",
  },
  {
    id: "alfajor-choco",
    name: "Alfajor de chocolate",
    description: "Cobertura intensa de cacao, centro cremoso y un final muy goloso.",
    price: 3.6,
    category: "alfajores",
    image: imageB,
    allergens: ["gluten", "lacteos", "huevos", "soja"],
    featured: true,
  },
  {
    id: "alfajor-pistacho",
    name: "Alfajor de pistacho",
    description: "Relleno delicado, glasé suave y acabado verde que entra por los ojos.",
    price: 3.9,
    category: "alfajores",
    image: imageC,
    allergens: ["gluten", "lacteos", "huevos", "frutos_secos"],
    featured: true,
    badge: "Nuevo",
  },
  {
    id: "tarta-queso-frambuesa",
    name: "Tarta de queso y frambuesa",
    description: "Base crujiente, crema suave y cobertura de frambuesa fresca.",
    price: 6.8,
    category: "tartas",
    image: imageD,
    allergens: ["gluten", "lacteos", "huevos"],
    featured: true,
  },
  {
    id: "tarta-limon",
    name: "Tarta de limón merengada",
    description: "Ácida, luminosa y con un merengue que se dora justo al punto.",
    price: 6.5,
    category: "tartas",
    image: imageE,
    allergens: ["gluten", "lacteos", "huevos"],
    seasonal: true,
  },
  {
    id: "brownie-doble-choco",
    name: "Brownie doble chocolate",
    description: "Denso, húmedo y con chips de cacao para el punto exacto de intensidad.",
    price: 4.4,
    category: "dulces",
    image: imageF,
    allergens: ["gluten", "lacteos", "huevos", "soja"],
  },
  {
    id: "cookie-red-velvet",
    name: "Cookie red velvet",
    description: "Exterior crujiente, interior tierno y crema ligera de vainilla.",
    price: 4.1,
    category: "dulces",
    image: imageA,
    allergens: ["gluten", "lacteos", "huevos"],
  },
  {
    id: "vaso-frutos-rojos",
    name: "Vasito de frutos rojos",
    description: "Capas de crema, mermelada casera y fruta fresca recién cortada.",
    price: 4.9,
    category: "dulces",
    image: imageB,
    allergens: ["lacteos", "huevos"],
    seasonal: true,
  },
  {
    id: "box-regalo-mini",
    name: "Box regalo mini",
    description: "6 piezas surtidas para regalar, compartir o quedártelas todas.",
    price: 18.0,
    category: "cajas",
    image: imageC,
    allergens: ["gluten", "lacteos", "huevos", "frutos_secos"],
    badge: "Ideal para regalar",
  },
  {
    id: "box-regalo-fiestas",
    name: "Box celebración",
    description: "Selección premium con alfajores, brownie y mini tartas para momentos especiales.",
    price: 28.0,
    category: "cajas",
    image: imageD,
    allergens: ["gluten", "lacteos", "huevos", "frutos_secos"],
    featured: true,
  },
  {
    id: "cafe",
    name: "Café de especialidad",
    description: "Espresso o latte para acompañar cada bocado dulce.",
    price: 2.4,
    category: "bebidas",
    image: imageE,
    allergens: ["lacteos"],
  },
  {
    id: "limonada",
    name: "Limonada fresca",
    description: "Casera, refrescante y con un toque de menta.",
    price: 3.1,
    category: "bebidas",
    image: imageF,
    allergens: [],
  },
];

export const alfajorinaFeaturedProducts = alfajorinaProducts.filter((product) => product.featured).slice(0, 3);