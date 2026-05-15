/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0066FF',
          'blue-light': '#3388FF',
          'blue-dark': '#0044CC',
        },
        surface: {
          900: '#0A0E17',
          800: '#111827',
          700: '#1A2332',
          600: '#243044',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
