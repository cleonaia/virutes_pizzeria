import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        virutes: {
          red: "#A8834A",
          "red-dark": "#2C1712",
          "red-light": "#C58A45",
          cream: "#FFF7EF",
          "cream-light": "#FFF0E2",
          olive: "#90A86B",
          brown: "#4A2A20",
          "brown-mid": "#B7895A",
          "brown-light": "#E3C084",
          border: "#F0D9C8",
        },
        alfe: {
          cream: "#FFF7EF",
          "cream-soft": "#FFF0E2",
          cacao: "#4A2A20",
          "cacao-deep": "#2C1712",
          caramel: "#C58A45",
          dulce: "#E3C084",
          rose: "#E9D1B6",
          frambuesa: "#A8834A",
          pistacho: "#90A86B",
          canela: "#B7895A",
          border: "#F0D9C8",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "cursive"],
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-down": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "bob": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease both",
        "fade-up-200": "fade-up 0.7s 0.2s ease both",
        "fade-up-400": "fade-up 0.7s 0.4s ease both",
        "fade-up-600": "fade-up 0.7s 0.6s ease both",
        "fade-in": "fade-in 1s ease both",
        "slide-down": "slide-down 0.4s ease both",
        "bob": "bob 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
