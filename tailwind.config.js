/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: "class", // Agregar esta línea para soporte de dark mode
  plugins: [],
};
