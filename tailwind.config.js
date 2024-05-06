/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mob: { max: "500px" },
        tab: { max: "900px" },
      },
    },
  },
  plugins: [],
};
