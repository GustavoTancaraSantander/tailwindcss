const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],

  theme: {
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
