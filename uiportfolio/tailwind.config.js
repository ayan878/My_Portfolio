/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container:{
      center:true
    },
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        paytone: ["Paytone One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
