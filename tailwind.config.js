/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#1c2b45',
          deep: '#121d33',
          900: '#14203a',
        },
        accent: '#3a5fb0',
        ink: '#20293d',
        slate: {
          50: '#f7f8fb',
          100: '#eef1f7',
          200: '#eef0f4',
          400: '#8a93a5',
          500: '#7c8798',
          600: '#5b6578',
          700: '#46536b',
          800: '#33405c',
        },
        onnavy: {
          sub: '#aab3c9',
          sub2: '#c3cade',
        },
      },
    },
  },
  plugins: [],
}
