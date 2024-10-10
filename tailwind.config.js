/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      urbanist: ["Urbanist", "sans-serif"],
    },
    colors: {
      "navy-blue": "#537fa4",
      blue: {
        100: "#e4effa",
        200: "#c2def5",
        300: "#8dc5ec",
        400: "#50a7e0",
        500: "#298cce",
        600: "#1b6fae",
        700: "#17598d",
        800: "#174c75",
        900: "#184062",
      },
      white: "#f5f7fa",
      black: "#102941",
      red: {
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
      },
      green: {
        100: "#d9ffe6",
        200: "#b6fccd",
        300: "#7df8a9",
        400: "#3deb7b",
        500: "#14d358",
        600: "#0aaf45",
        700: "#0c893a",
        800: "#0f6c31",
        900: "#0f582b",
      },
      yellow: {
        100: "#feeac7",
        200: "#fdd28a",
        300: "#fcbb4d",
        400: "#fbab24",
        500: "#f59e0b",
        600: "#d98b06",
        700: "#b47409",
        800: "#92610e",
        900: "#78510f",
      },
      gray: "#8492a6",
    },
    extend: {},
  },
  plugins: [],
};