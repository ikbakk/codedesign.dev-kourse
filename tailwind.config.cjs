/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#192653',
        accent: '#FF5C00'
      },
      fontFamily: {
        poppins: ['Poppins'],
        'source-sans-pro': ["'Source Sans Pro'"]
      }
    }
  },
  plugins: [
    require('autoprefixer'),
    require('prettier-plugin-tailwindcss'),
    require('@tailwindcss/typography')
  ]
}
