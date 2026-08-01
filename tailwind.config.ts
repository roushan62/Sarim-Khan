import type { Config } from "tailwindcss";

/**
 * Design tokens — PMC-grade light theme.
 * Warm neutrals + deep navy + restrained metallic gold.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF8F4", // --bg-primary
        sand: "#F1EDE4", //  --bg-secondary
        surface: "#FFFFFF",
        navy: "#111C34",
        navyLight: "#1E2E52",
        gold: "#B8862F",
        goldLight: "#D9B26A",
        ink: "#3D3D3D", //  --text-body
        muted: "#6B6B6B", // --text-muted
        line: "#E2DDD0", //  --border
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1280px",
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(17, 28, 52, 0.05), 0 8px 24px rgba(17, 28, 52, 0.06)",
        lift: "0 2px 4px rgba(17, 28, 52, 0.06), 0 20px 44px rgba(17, 28, 52, 0.12)",
        glow: "0 0 0 1px rgba(184, 134, 47, 0.25)",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.21, 0.6, 0.35, 1)",
      },
      backgroundImage: {
        "hairline-grid":
          "linear-gradient(to right, rgba(17,28,52,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,28,52,0.045) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-lg": "72px 72px",
      },
    },
  },
  plugins: [],
};

export default config;
