/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      screens: {
        'only-md': { 'min': '768px', 'max': '1023px' },
      },
    },
  },
  plugins: [],
}

