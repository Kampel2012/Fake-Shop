const defaultTheme = require("tailwindcss/defaultTheme.js");
let { sm, md } = defaultTheme.screens;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: { xs: "540px", sm, md, lg: "1170px" },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          md: "1rem",
        },
      },
    },
  },
  plugins: [],
};
