import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        medoxy: {
          primary: "#2E66E2",
          secondary: "#E53935",
          background: "#FFFFFF",
          surface: "#F6F8FA",
          clinical: "#F4F8FF",
          health: "#F3FBF7",
          text: "#1A1A1A",
          muted: "#555555",
          border: "#D8D0C5",
          white: "#FFFFFF",
        },
      },
      boxShadow: {
        soft: "0 18px 55px rgba(26, 26, 26, 0.09)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
