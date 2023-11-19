/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Comfortaa", "cursive"],
      },
    },
    colors: {
      transparent: "transparent",
      teal: {
        light: "#ADEBDC",
        DEFAULT: "#57A79E",
        dark: "#072A34",
      },
      bluedark: "#021C35",
      textColor: "#442A35",
    },
  },
  plugins: [require("daisyui")],
};
