/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#d4a574',
        'rang-gold': '#c9a961',
        'rang-dark': '#2d1b0c',
        'rang-light': '#f5e6d3',
        'rang-accent': '#d4a574',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        lora: ['"Lora"', 'serif'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
