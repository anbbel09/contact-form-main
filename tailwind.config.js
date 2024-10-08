/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#E0F1E7',
        'secondary': '#0C7D69',
        'secondary-light': '#497A6C',
        'tertiary': '#2E4342',
        'quaternary': '#AEB4B2',
        'quaternary-light': '#6E7877',
        'quaternary-dark': '#063F36',
      },
      fontFamily: {
        'title': ['Sofia-bold'],
        'subtitle': ['Sofia-Semibold'],
        'text': ['Sofia-Regular'],   
        'text-md': ['Sofia-Medium'], 
      },
    },
  },
  plugins: [],
}

