/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,md,mdx}',
    './components/**/*.{js,jsx,md,mdx}',
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('daisyui'),
  ]
}