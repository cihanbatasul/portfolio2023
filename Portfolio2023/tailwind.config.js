/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      darkGreen: "#414833",
      lightBeige: "#B6AD90",
      lightGreen: "#656D4A",
      white: "#FFFFFF",
      black: "#000000",
    },
    fontFamily: {
      satoshi: ["Satoshi"],
      satoshiThin: ["Satoshi-Thin"],
      cabinet: ["Cabinet"],
      cabinetBold: ["Cabinet-Bold"],
    },
    extend: {
      padding: {
        component: "p-16",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      const newUtilities = {
        ".vertical-rl": {
          writingMode: "vertical-rl",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
