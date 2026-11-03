import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        canvas: "var(--canvas)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        rule: "var(--rule)",
        surface: "var(--surface)",
      },
      fontFamily: {
        mono: ["var(--font-geist-mono)"],
        sans: ["var(--font-geist-sans)"],
      },
    },
  },
  plugins: [],
};

export default config;
