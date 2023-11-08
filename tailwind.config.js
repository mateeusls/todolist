/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-dark': '#1E6F9F',
        sky: {
          400: '#4EA8DE',
          700: '#1E6F9F',
        },
        red: {
          400: '#E25858',
        },
        gray: {
          100: '#F2F2F2',
          200: '#D9D9D9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1A1A1A',
          700: '#0D0D0D',
        },
        indigo: {
          400: '#8284FA',
          500: '#5E60CE',
        },
      },
      width: {
        container: '46rem', // 736px
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
