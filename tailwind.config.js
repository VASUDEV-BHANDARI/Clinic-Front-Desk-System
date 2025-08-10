/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-violet': {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d6ff',
          300: '#a5b8ff',
          400: '#8191ff',
          500: '#6b63ff',
          600: '#5b4bff',
          700: '#4c3ce8',
          800: '#3f32c0',
          900: '#352d9a',
        },
      },
    },
  },
  plugins: [],
} 