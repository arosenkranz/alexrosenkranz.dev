const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['IBM Plex Sans', ...fontFamily.sans],
      mono: ['IBM Plex Mono', ...fontFamily.mono],
    },
    extend: {
      typography: (theme) => ({
        default: {
          css: {
            color: theme('colors.gray.700'),
            h1: {
              color: theme('colors.gray.300'),
            },
            a: {
              color: theme('colors.blue.500'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            h1: {
              color: theme('colors.gray.300'),
            },
            a: {
              color: theme('colors.blue.500'),
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
};
