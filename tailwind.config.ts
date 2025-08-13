import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",   // Indigo 600
        secondary: "#7C3AED", // Violet 600
        accent: "#10B981",    // Emerald 500
        warm: "#F59E0B",      // Amber 500
        mist: "#F8FAFC"       // Slate-50 tint
      },
      boxShadow: {
        soft: "0 10px 25px -10px rgba(2,6,23,.12)",
        glow: "0 12px 32px -12px rgba(79,70,229,.35)"
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, rgba(79,70,229,.08) 0%, rgba(124,58,237,.08) 35%, rgba(16,185,129,.08) 70%)",
        "card-gradient": "linear-gradient(180deg, rgba(79,70,229,.10), rgba(124,58,237,.10))"
      }
    }
  },
  plugins: []
} satisfies Config;
