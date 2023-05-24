/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nav_color: "#032C1E",
        main_projcolor: "rgb(12, 116, 80)",
        grey: "#E6E7E8",
        white: "#FAFFFD",
        black: "#032C1E",
        btn_colorh: "#045950",
        transBg: "rgba(12, 116, 80, 0.2)",
        light_col: "rgba(3, 44, 30, 0.5)",
        star_col: "#FFDF00",
      },
      fontFamily: {
        body_text: "'Poppins', sans-serif",
      },
      backgroundImage: {
        "more-pattern": "url('/public/bgImg.png')",
      },
    },
  },
  plugins: [],
};
