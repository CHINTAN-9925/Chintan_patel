/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textColor: {
        'main_text_color': '#8FD6E1',
        'body_bg': '#8FD6E1',
        'fullstack': '#D21312',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'martian': ['Martian Mono', 'monospace'],
        'arvo': ['Arvo', 'serif'],
      },
      keyframes: {
        fadeInGrow: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        slideUnderline: {
          '0%': {
            width: '0%',
          },
          '100%': {
            width: '100%',
          },
        },
      },
      animation: {
        'fadeInGrow': 'fadeInGrow 1s ease-in-out',
      },
      width: {
        '0': '0%',
        'full': '100%',
      },
      transitionProperty: {
        'width': 'width',
      },
    },
  },
  plugins: [],
}
