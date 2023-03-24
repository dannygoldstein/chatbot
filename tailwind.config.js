/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    fontFamily: {
      sans: ["Proxima Nova", "Roboto", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
