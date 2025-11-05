import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Cores base do tema (do seu logo)
        background: "#000000",
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#0000FF",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#21CAFF",
          foreground: "#000000", // Preto para contraste sobre o azul claro
        },

        // Cores semânticas (baseadas no tema do logo)
        border: "#374151", // Um cinza escuro (baseado no author.tsx)
        input: "#374151",
        ring: "#0000FF", // Usando sua cor primária para anéis de foco

        destructive: {
          DEFAULT: "hsl(var(--destructive))", // Mantido como padrão
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#111827", // Um cinza mais escuro
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#374151",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#111827",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#111827", // Cinza escuro (baseado no author.tsx)
          foreground: "#FFFFFF",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;

export default config;
