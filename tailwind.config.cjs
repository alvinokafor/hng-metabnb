/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#A02279',
        'secondary': '#434343',
        'footer': '#1D1D1E',
      },
      fontFamily: {
        'sans': ['Red Rose', 'san-serif']
      }
    },
  },
  plugins: [],
}
