/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        customDarkBrown: '#632324',
        customOrange: '#E79839',
        customGrayLight: '#D9D9D9',
        customBlack: '#000000',
        customWhite: '#FFFFFF',
        customAmber: '#F8E0BB',
        customBrownDark: '#923B27',
      },
      fontFamily: {
        abhaya: ['"Abhaya Libre"', 'serif'],
        abhayaMedium: ['"Abhaya Libre"', 'serif'], // Use font-weight classes to differentiate medium weight
      },
      fontSize: {
        xxs: '0.625rem',    // custom font size smaller than xs, for mobile
      },
    },
  },
  plugins: [],
}
