/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        dark: {
          DEFAULT: '#04091A',
          surface: '#07102A',
          card: '#0B1835',
          border: '#162D52',
          hover: '#0F2040',
        },
        primary: {
          DEFAULT: '#4F6BF6',
          light: '#7D95F9',
          dark: '#3450D4',
          glow: 'rgba(79,107,246,0.2)',
        },
        gold: {
          DEFAULT: '#F0A500',
          light: '#F7C040',
          dark: '#C8850A',
          glow: 'rgba(240,165,0,0.2)',
        },
        teal: {
          DEFAULT: '#14B8A6',
          light: '#5EEAD4',
        },
        success: '#10B981',
        danger: '#F43F5E',
        'text-primary': '#EEF2FF',
        'text-secondary': '#8EA4C0',
        'text-muted': '#4D6580',
      },
      backgroundImage: {
        'grid-subtle': `
          linear-gradient(rgba(79,107,246,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(79,107,246,0.04) 1px, transparent 1px)
        `,
        'gradient-primary': 'linear-gradient(135deg, #4F6BF6 0%, #7D95F9 100%)',
        'gradient-gold': 'linear-gradient(135deg, #F0A500 0%, #F7C040 100%)',
        'gradient-brand': 'linear-gradient(135deg, #4F6BF6 0%, #F0A500 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(11,24,53,0.95) 0%, rgba(7,16,42,0.9) 100%)',
      },
      backgroundSize: {
        grid: '64px 64px',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'float-delay': 'float 7s ease-in-out 2s infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'bar-fill': 'barFill 1.5s cubic-bezier(0.4,0,0.2,1) forwards',
        'count-up': 'fadeIn 0.5s ease forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%': { transform: 'translateY(28px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseSoft: {
          '0%,100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        barFill: {
          '0%': { width: '0%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        primary: '0 0 30px rgba(79,107,246,0.25), 0 4px 24px rgba(79,107,246,0.1)',
        'primary-sm': '0 0 15px rgba(79,107,246,0.2)',
        gold: '0 0 30px rgba(240,165,0,0.25), 0 4px 24px rgba(240,165,0,0.1)',
        'gold-sm': '0 0 15px rgba(240,165,0,0.2)',
        card: '0 4px 24px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.03) inset',
        'card-hover': '0 12px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(79,107,246,0.25)',
        glass: '0 8px 32px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
}
