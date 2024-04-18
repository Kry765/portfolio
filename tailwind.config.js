/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      md: { max: "992px" },
    },
    extend: {
      keyframes: {
        "nav-menu": {
          "0%": { transform: "translate-x-0" },
          "100%": { transform: "translate-y-3/4	" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
