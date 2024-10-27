/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-pink': '#f8ecf6',
        'custom-pink-translucent': '#f8ecf6c5',
        'custom-white': '#ffffffc0',
        'custom-blue-light': '#d1ecfdc5',
        'custom-blue-lighter': '#e1fefcc7',
      },
    },
  },
  plugins: [],
}