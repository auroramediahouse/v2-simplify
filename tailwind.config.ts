import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#6D28D9',
          green: '#10B981',
          light: '#F9FAFB',
          dark: '#111827',
        },
      },
    },
  },
  plugins: [],
};
export default config;
