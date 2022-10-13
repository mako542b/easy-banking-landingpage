/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'public': ['Public Sans', 'sans-serif']
      },
      colors: {
        primaryDarkBlue: 'hsl(233, 26%, 24%)',
        primaryLimeGreen: 'hsl(136, 65%, 51%)',
        primaryBrightCyan: 'hsl(192, 70%, 51%)',
        neutralGrayishBlue: 'hsl(233, 8%, 62%)',
        neutralLightGrayishBlue: 'hsl(220, 16%, 96%)',
        neutralVeryLightGray: 'hsl(0, 0%, 98%)',
        neutralWhite: 'hsl(0, 0%, 100%)'
      },
      fontSize: {
        h1: ['3.35rem', '4rem'],
        h2: ['2.5rem', '3.125rem'],
        ss: ['.8125rem', '1.125rem']
      }
    },
  },
  plugins: [],
}
