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
        primaryAbout: "#666666",
        secondaryAbout: "#555555",
      },
      height: {
        100: "100px",
        405: "405px",
        300: "300px",
        under: "3px",
      },
      width: {
        70: "286px",
        400: "400px",
        "2rem": "2rem",
      },

      margin: {
        67: "268px",
        4.5: "75px",
        2.5: "10px",
      },
      spacing: {
        4.5: "62px",
      },
      screens: {
        xlmd: "991px",
      },
      boxShadow: {
        "inset-custom": "inset 0 -0.7em #ffbe0b",
        "inset-custom-hover": "inset 0 -1.2em #ffbe0b",
      },
      fontSize: {
        featuresH: "22px",
        contactH: "34px",
      },
    },
  },
  plugins: [],
};
