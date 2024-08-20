/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6A0DAD",
        accent: "#FF69B4",
        secondary: "#FFC0CB",
        neutral: "#333333",
        mainBackground: "#d4d4d8",
        lavender: "#E6E6FA",
      },
    },
  },
  plugins: [],
};
