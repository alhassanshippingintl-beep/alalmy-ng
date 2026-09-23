import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#D3121A",
          "red-dark": "#B10E16",
          blue: "#1A4FA0",
          "blue-dark": "#123A78",
          gold: "#C9A227",
          "gold-soft": "#E8D48A",
        },
      },
      fontFamily: {
        cairo: ["var(--font-cairo)", "Tahoma", "sans-serif"],
      },
      boxShadow: {
        pack: "0 24px 50px -18px rgba(18, 58, 120, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
