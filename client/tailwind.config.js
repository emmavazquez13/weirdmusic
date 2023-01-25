/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'red': '#E64957',
        'gray-dark': '#D1D1D1',
        'gray-light': '#F2F0F0',
        'black': '#1A1A1A',
      },
      // backgroundImage: {
      //   'black-logo': img('/components/images/logo.png'),
      //   'color-logo': img('/components/images/wierd-music-logo.png'),
      // },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontFamily: {
        'Bangers': ['bangers', 'cursive'],
        'Roboto Condensed': ['"roboto condensed"', 'sans-serif'],
      },
      opacity: {
        0: '0',
        20: '0.2',
        40: '0.4',
        60: '0.6',
        80: '0.8',
        100: '1',
      },
      
      borderRadius: {
        none: '0',
        sm: '.125rem',
        DEFAULT: '.25rem',
        lg: '.5rem',
        full: '9999px',
      },

      objectPosition: {
        bottom: 'bottom',
        top: 'top',
        left: 'left',
        right: 'right',
      },
    },
  },
  plugins: [],
};
