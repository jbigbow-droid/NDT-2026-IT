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
        primary: "#00d4ff",
        secondary: "#7c3aed",
        accent: "#10b981",
        dark: "#0f172a",
        darker: "#020617",
        card: "#1e293b",
        muted: "#94a3b8",
      },
    },
  },
  plugins: [],
};
export default config;
