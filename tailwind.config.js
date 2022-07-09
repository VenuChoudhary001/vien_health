/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { 900: "#123148", 300: "#82A2C3",500:'#3A4C66' },
        purple: "#794eff",
      },
      fontFamily: {
        "euclid-bold": ["Euclid-bold"],
        "euclid-light": ["Euclid-light"],
        "euclid-normal": ["Euclid-normal"],
        "euclid-medium": ["Euclid-medium"],
      },
      lineHeight: {
        11: "52px",
        12:"68px",
        13:"72px"
      },
      fontSize: {
        "5xl": "40px",
        "6xl": "48px",
        "7xl":"56px"
      },
    },
  },
  plugins: [],
};
