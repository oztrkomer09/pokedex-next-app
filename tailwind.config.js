/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        tilt: ['Tilt Prism', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
    plugins: [],
  }
}

