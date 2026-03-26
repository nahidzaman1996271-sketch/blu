import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        "blu-cyan": "#00F0FF",
        "blu-magenta": "#FF007F",
        "blu-lime": "#39FF14",
      },
    },
  },
  plugins: [],
};
export default config;
