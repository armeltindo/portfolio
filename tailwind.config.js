/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        bg: '#050810',
        surface: '#0c1120',
        border: '#1a2540',
        cyan: {
          DEFAULT: '#00f5ff',
          dim: '#00c4cc',
          glow: 'rgba(0,245,255,0.15)',
        },
        violet: {
          DEFAULT: '#7c3aed',
          bright: '#a855f7',
          glow: 'rgba(168,85,247,0.15)',
        },
        text: {
          primary: '#e8edf8',
          secondary: '#8892aa',
          muted: '#4a5568',
        },
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(rgba(0,245,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,245,255,0.03) 1px, transparent 1px)
        `,
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124,58,237,0.3) 0%, transparent 60%)',
        'card-gradient': 'linear-gradient(135deg, rgba(12,17,32,0.9) 0%, rgba(5,8,16,0.95) 100%)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'scan': 'scan 3s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px rgba(0,245,255,0.5)' },
          '100%': { textShadow: '0 0 30px rgba(0,245,255,0.9), 0 0 60px rgba(0,245,255,0.4)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'cyan': '0 0 30px rgba(0,245,255,0.2), 0 0 60px rgba(0,245,255,0.05)',
        'violet': '0 0 30px rgba(168,85,247,0.2), 0 0 60px rgba(168,85,247,0.05)',
        'card': '0 4px 40px rgba(0,0,0,0.5), 0 1px 0 rgba(0,245,255,0.05) inset',
      },
    },
  },
  plugins: [],
}
