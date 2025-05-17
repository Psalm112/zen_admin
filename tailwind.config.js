// @type {import('tailwindcss').Config}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Dark: "#212428",
        Red: "#ff343f",
      },
      screens: {
        xs: "480px",
        xxs: "320px",
      },
      flex: {
        full: "0 0 100%",
      },
      animation: {
        loading: "loadingAnimation 1.5s infinite linear",
        fadeIn: "fadeIn 0.3s ease-in-out",
        "slide-out-left": "slideOutLeft 300ms ease-in-out forwards",
        "slide-out-right": "slideOutRight 300ms ease-in-out forwards",
        "slide-in-left": "slideInLeft 300ms ease-in-out forwards",
        "slide-in-right": "slideInRight 300ms ease-in-out forwards",
      },
      keyframes: {
        loadingAnimation: {
          "0%": { left: "-50%" },
          "100%": { left: "100%" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideOutLeft: {
          "0%": { transform: "translateX(0)", opacity: 1 },
          "100%": { transform: "translateX(-100%)", opacity: 0 },
        },
        slideOutRight: {
          "0%": { transform: "translateX(0)", opacity: 1 },
          "100%": { transform: "translateX(100%)", opacity: 0 },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".hide-scrollbar": {
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none"
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
