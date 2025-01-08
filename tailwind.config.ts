import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: "var(--brown-50)",
          100: "var(--brown-100)",
          200: "var(--brown-200)",
          300: "var(--brown-300)",
          400: "var(--brown-400)",
          500: "var(--brown-500)",
          600: "var(--brown-600)",
          700: "var(--brown-700)",
          800: "var(--brown-800)",
          900: "var(--brown-900)",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
