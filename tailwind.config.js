/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         "marquee": {
//           "0%": { transform: "translateX(0)" },
//           "100%": { transform: "translateX(-50%)" },
//         },
//       },
//       animation: {
//         "marquee": "marquee 30s linear infinite",
//       },
//     },
//   },
//   plugins: [],
// };
