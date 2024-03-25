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
      boxShadow: {
        custom:
          "6px 6px -1px rgba(0,0,0,0.15), -6px -6px 10px rgba(255,255,255,0.7)",
      },
    },
  },
  plugins: [],
};
