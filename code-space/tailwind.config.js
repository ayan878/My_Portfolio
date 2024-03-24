/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-Image": "url('./src/assets/img/banner-bg.png')",
      },
      fontFamily: {
        custom: ["CenterNo2-Bold", "sans"], // 
      },
    },
  },
  plugins: [],
};
