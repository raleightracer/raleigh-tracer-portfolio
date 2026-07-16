import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // mapped 1:1 from the original :root CSS variables
        base: "#0a0a0a",
        "base-2": "#111111",
        "base-3": "#181818",
        line: "rgba(255,255,255,0.07)",
        "line-mid": "rgba(255,255,255,0.12)",
        text: "#f0ede8",
        "text-muted": "#888580",
        "text-dim": "#555250",
        accent: "#c8f060",
        "accent-dim": "rgba(200,240,96,0.12)",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      maxWidth: {
        container: "780px",
      },
      keyframes: {
        scrollline: {
          "0%, 100%": { transform: "scaleX(1)", opacity: "0.4" },
          "50%": { transform: "scaleX(0.5)", opacity: "0.9" },
        },
      },
      animation: {
        scrollline: "scrollline 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
