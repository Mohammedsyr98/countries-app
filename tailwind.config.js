/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        270: "repeat(auto-fit, 270px)",
      },
      colors: {
        darkcolor: "#2b3945",
      },
      boxShadow: {
        dark: "0 0 8px 1px #1a252d;",
        light: "0px 1px 10px 0px rgba(0, 0, 0, 0.5)",
      },
      spacing: {
        "50%": "50%",
      },
    },
  },
  plugins: [],
};
