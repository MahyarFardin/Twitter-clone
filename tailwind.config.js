/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      "blue":"#1DA1F2",
      "black":"#000000",
      "dGray":"#657786",
      "lGray":"#AAB8C2",
      "elGray":"#E1E8ED",
      "eelGray":"#F5F8FA",
    },
    fontSize:{
      "xxsm":"7px",
      "xsm":"9px",
      'xs': '.75rem',
      'sm': '.875rem',
      'md': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {},
  },
  plugins: [],
}
