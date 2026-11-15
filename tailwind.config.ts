import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-jakarta)", "Inter", "sans-serif"],
      },
      colors: {
        navy: {
          950: "#060B19",
          900: "#0B1121",
          800: "#111A2E",
          700: "#1A2642",
        },
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(2, 12, 27, 0.7)",
        glow: "0 0 25px -5px rgba(56, 189, 248, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
