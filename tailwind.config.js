/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#090909',
        night: '#0d0d0d',
        smoke: '#141414',
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F1D57A',
          soft: '#B8912A',
          dark: '#7A5E12',
        },
        ivory: '#F5EFE1',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Fraunces"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
        widest3: '0.5em',
      },
      backgroundImage: {
        'gold-sheen':
          'linear-gradient(135deg, #7A5E12 0%, #D4AF37 30%, #F1D57A 50%, #D4AF37 70%, #7A5E12 100%)',
        'gold-line':
          'linear-gradient(90deg, transparent 0%, #D4AF37 50%, transparent 100%)',
        'radial-glow':
          'radial-gradient(circle at 50% 30%, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.04) 40%, transparent 70%)',
      },
      boxShadow: {
        gold: '0 0 40px -12px rgba(212,175,55,0.6)',
        'gold-lg': '0 0 80px -20px rgba(212,175,55,0.65)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        drift: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
        wave: {
          '0%,100%': { transform: 'scaleY(0.35)' },
          '50%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        shimmer: 'shimmer 6s linear infinite',
        drift: 'drift 8s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        wave: 'wave 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
