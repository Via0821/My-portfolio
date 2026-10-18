/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Washi paper ground, sumi-navy ink, indigo bands, and gold leaf.
        washi: "#f4efe6",
        "washi-deep": "#ebe3d4",
        sumi: "#17233f",
        nezumi: "#5c5850",
        ai: "#1a2540",
        kin: "#7d6136",
        "kin-leaf": "#c4a574",
        rule: "rgba(23, 35, 63, 0.14)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Hiragino Sans", "Yu Gothic", "sans-serif"],
        display: ["var(--font-display)", "Hiragino Mincho ProN", "Yu Mincho", "serif"],
      },
    },
  },
  plugins: [],
};
