const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans],
      mono: ['IBM Plex Mono', ...fontFamily.mono],
    },
    extend: {
      colors: {
        light: '#ffffff',
        dark: '#000000',
      },
      animation: {
        loader: 'loader 0.6s infinite alternate',
      },
      keyframes: {
        loader: {
          to: {
            opacity: 0.1,
            transform: 'translate3d(0, -1rem, 0)',
          },
        },
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
    transform: ['group-hover', 'hover'],
  },
  plugins: [require('@tailwindcss/typography')],
};
