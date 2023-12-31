/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "1rem",
      lg: "1.5rem",
      xlg: "4rem",
      full: "9999px",
      large: "12px",
    },
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
      invalid: "#ff5580",
    },
  },
  plugins: [require("daisyui")],
};
