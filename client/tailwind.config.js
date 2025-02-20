/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        blue_grisaceo: {
          50:"#252836" 
        }
      }
    },
  },
  plugins: [],
}