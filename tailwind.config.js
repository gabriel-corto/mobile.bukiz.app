/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    ,
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFE5EA',
          100: '#FFD6DF',
          200: '#FFAFBF',
          300: '#FF859E',
          400: '#F65372',
          500: '#E11D48',
          600: '#C21A40',
          700: '#A01634',
          800: '#7F1129',
          900: '#5A0C1D',
        },
      },
    },
  },
  plugins: [],
};
