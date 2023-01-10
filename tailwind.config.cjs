/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [
    require('autoprefixer'),
    require('prettier-plugin-tailwindcss'),
    require('@tailwindcss/typography')
  ]
}
