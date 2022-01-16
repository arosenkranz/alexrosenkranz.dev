const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['IBM Plex Sans', ...fontFamily.sans],
      mono: ['IBM Plex Mono', ...fontFamily.mono],
    },
    extend: {
      colors: {
        light: '#e1ede1',
        dark: '#1e1a1a',
      },
      typography: (theme) => ({
        default: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.500'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.neutral.300'),

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
