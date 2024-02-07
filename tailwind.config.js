/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customGreen : 'rgb(31, 164, 91)',
      }
    },
  },
  plugins: [require("daisyui")],
}

