/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '100px',
        'tablet': '641px',
        'desktop': '1280px',
      },
    },
  },
  plugins: [],
}