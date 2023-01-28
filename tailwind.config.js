/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "2rem",
        center: true,
      },
      // color
      colors: {
        secondary: "#F86338",
      },
      // font
      fontFamily: {
        Sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
