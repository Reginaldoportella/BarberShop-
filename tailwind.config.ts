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
          black: "#080706",
          graphite: "#171513",
          ash: "#24211e",
          gold: "#d7a64a",
          goldSoft: "#f1d18a",
          cream: "#f7efe2",
          muted: "#b8afa1",
        },
      },
      boxShadow: {
        gold: "0 24px 80px rgba(215, 166, 74, 0.14)",
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
