import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#1A1A1A",
        sand: "#C8B89A",
        earth: "#3B2E24",
        moss: "#4A5A44",
        antique: "#F2EBDD",
        ink: "#111111",
      },
      fontFamily: {
        display: ["var(--font-display)", "Cinzel", "serif"],
        body: ["var(--font-body)", "Montserrat", "Inter", "sans-serif"],
      },
      boxShadow: {
        ember: "0 24px 90px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        "page-texture":
          "radial-gradient(circle at 20% 10%, rgba(200,184,154,0.08), transparent 28rem), radial-gradient(circle at 88% 18%, rgba(74,90,68,0.16), transparent 30rem), linear-gradient(135deg, rgba(59,46,36,0.38), rgba(26,26,26,0) 42%)",
      },
    },
  },
  plugins: [],
};

export default config;
