import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        barber: {
          black: "#080808",
          graphite: "#121212",
          ash: "#1A1A1A",
          gold: "#C89B3C",
          goldSoft: "#D9AE55",
          goldDark: "#8F6A23",
          cream: "#F8F5EE",
          muted: "#B9B5AC",
          subtle: "#77736C",
          light: "#F3F0E8",
          card: "#FAF8F3",
          darkText: "#171717",
        },
      },
      boxShadow: {
        gold: "0 24px 80px rgba(200, 155, 60, 0.14)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Consolas", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
