/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#9c88ff",
          dark: "#8c7ae6",
          light: "#bdb0ff",
        },
        accent: {
          main: "#fdcb6e",
          dark: "#a88440",
          light: "#ffeaa7",
        },
        cDark: "#1e1e1e",
        cLight: "#f5f5f5",
        cBeige: "#fff8e7",
      },
      borderWidth: {
        1: '1px',
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
        display: ["Passion One", "cursive"],
      },
    },
  },
  plugins: [],
};
