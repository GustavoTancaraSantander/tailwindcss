/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  // https://tailwindcss.com/docs/upgrade-guide#configure-content-sources
  // './public/**/*.html' >>> for detected class in files from ./public
  content: ["./src/**/*.{html,js}", './components/**/*.{html,js}', './public/**/*.html'],
  // './pages/**/*.{html,js}', './components/**/*.{html,js}', './src/**/*.{js,jsx,ts,tsx,vue}'
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  // purge: [],

  theme: {
    container: {
      center: true
    },
    fontFamily: {
      // display: ['Gilroy', 'sans-serif'],
      vicwant: ['Edu VIC WA NT Beginner'], // name customized
    },
    extend: {
      // https://v1.tailwindcss.com/docs/customizing-colors
      colors: {
        dangerCustom: "#BF360C",
        // primary: "#0e172a",
        primary: {
          ...colors.blue,
          '900': '#0e172a'
        },
      }
    },
  },
  variants: {},
  plugins: [],
}