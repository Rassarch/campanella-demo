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
        forest: {
          DEFAULT: "#0d1f14",
          2: "#122019",
          3: "#1a2e1f",
          4: "#1e3d26",
        },
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e2c47a",
          dim: "#8a6e30",
          glow: "rgba(201,168,76,0.15)",
        },
        cream: {
          DEFAULT: "#f5edd8",
          warm: "#ede0c4",
        },
        moss: "#7a9180",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        dm: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
        widest3: "0.35em",
        widest4: "0.4em",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(ellipse at 70% 30%, rgba(201,168,76,0.1) 0%, transparent 55%), radial-gradient(ellipse at 10% 80%, rgba(30,61,38,0.6) 0%, transparent 50%), linear-gradient(160deg, #060e08 0%, #0d1f14 50%, #0a1a10 100%)",
      },
      animation: {
        ticker: "ticker 28s linear infinite",
        "fade-up": "fadeUp 0.9s ease forwards",
        "scroll-bar": "scrollBar 2s ease-in-out infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scrollBar: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
