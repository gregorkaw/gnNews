/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary-light': '#6E85B7',
      'secondary-light': '#B2C8DF',
      'accent-light': '#C4D7E0',
      'bg-light': '#F8F9D7',
    },
    extend: {},
  },
  plugins: [],
}
