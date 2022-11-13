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
      },
      fontFamily: {
        'sans': ['Red Rose', 'san-serif']
      }
    },
  },
  plugins: [],
}
