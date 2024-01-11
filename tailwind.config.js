/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        100: "35rem",
      },
      colors: {
        primary: "#F9B4ED",
      },
    },
  },
  plugins: [],
});

// possible color pallete
// #503047, white, #E2DBBE, #E574BC, #F9B4ED, #D88C9A