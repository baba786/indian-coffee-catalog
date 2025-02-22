/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: "#FDF8F3",
          100: "#F5E6D3",
          200: "#E6C9A8",
          300: "#D7AC7D",
          400: "#C89052",
          500: "#B97327",
          600: "#955C1F",
          700: "#714517",
          800: "#4D2E0F",
          900: "#291708",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

