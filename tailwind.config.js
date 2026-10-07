/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050508',
        surface: {
          50: '#18181f',
          100: '#131318',
          200: '#0e0e13',
          300: '#09090c',
          400: '#050508',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.07)',
          light: 'rgba(255, 255, 255, 0.14)',
          glow: 'rgba(255, 255, 255, 0.28)',
        },
        silver: {
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Syncopate', 'Space Grotesk', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'pulse-subtle': 'pulseGlow 5s ease-in-out infinite',
        'spin-slow': 'spin 24s linear infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.85 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.65)',
        'glass-hover': '0 12px 48px 0 rgba(255, 255, 255, 0.08), 0 0 20px 0 rgba(255, 255, 255, 0.05)',
        'glow-white': '0 0 35px -5px rgba(255, 255, 255, 0.25)',
        'glow-subtle': '0 0 20px -2px rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}
