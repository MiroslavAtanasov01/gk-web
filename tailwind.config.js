/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#27519b",
        "text-main": "#efb333",
        "text-secondary": "#25509a",
        gray: "#6d6e70",
      },
      // fontFamily: {
      //   sans: ['var(--font-geist-sans)', 'sans-serif'], // Use CSS var from @theme
      // },
    },
  },
  plugins: [],
};
