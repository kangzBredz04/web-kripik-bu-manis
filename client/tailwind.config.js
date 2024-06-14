/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brown-light": "#D2B48C",
        orange: "#FFA500",
        "green-leaf": "#8FBC8F",
        "brown-dark": "#8B4513",
        cream: "#FFF8DC",
      },
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
        roboto: ["Roboto", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
