/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow:{
        'hard':'3px 3px 0px rgba(0, 0, 0, 1)',
      },
      colors:{
        'secondary' : '#b8b8ff',
        'primary' : '#f8f7ff',
        'accent' : '#b8b8ff'
      }
    },
  },
  plugins: [],
}
