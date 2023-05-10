/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#16db93',
        secondary: '#603bb6',
        light_gray: '#c6c1c7'
      }
    }
  },
  plugins: [],
}

