/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'input': '#333',

      },
    },
    screens: {
      'sm': '640px',
      // 'md': '768px',
      'md': '740px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }

  },
  plugins: [],
}
