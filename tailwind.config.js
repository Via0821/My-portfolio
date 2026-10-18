/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        ink: "#0b0b0b",
        paper: "#f4f1ea",
        muted: "#a39e94",
        accent: "#c4a574",
        line: "rgba(244,241,234,0.14)",
      },
      fontFamily: {
        sans: ["Noto Sans JP", "sans-serif"],
        display: ["Shippori Mincho", "serif"],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/herobg.png')",
      },
    },
  },
  plugins: [],
};