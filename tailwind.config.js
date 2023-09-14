/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        primary: ["Roboto"],
      },
      colors: {
        primaryYellow: "#FFBF0B",
        primaryBg: "#F2F2F2",
      },
      height: {
        100: "100px",
        405: "405px",
        300: "300px",
      },
      width: {
        70: "286px",
        400: "400px",
      },

      margin: {
        67: "268px",
      },
      screens: {
        xlmd: "991px",
      },
      boxShadow: {
        "inset-custom": "inset 0 -0.7em #ffbe0b",
        "inset-custom-hover": "inset 0 -1.2em #ffbe0b",
      },
    },
  },
  plugins: [],
};
