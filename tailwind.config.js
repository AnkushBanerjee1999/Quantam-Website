/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        12: '10rem',
        left:{
          10: '2.5rem',
        }
      },
      height: {
        650: '650px',
        300: '300px',
      },
      margin: {
        0: '0 !important',
        'mobile': '75px',
      },
      colors: {
        gray: {
          900: '#111827',
          800: '#1f2937',
          700: '#374151',
          600: '#4b5563',
          300: '#d1d5db',
        },
        indigo: {
          900: '#312e81',
          700: '#4338ca',
          600: '#4f46e5',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.300'),
            h1: { color: theme('colors.white') },
            h2: { color: theme('colors.white') },
            h3: { color: theme('colors.white') },
            strong: { color: theme('colors.white') },
            a: {
              color: theme('colors.indigo.400'),
              '&:hover': { color: theme('colors.indigo.300') },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
});
