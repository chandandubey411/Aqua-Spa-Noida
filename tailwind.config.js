/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        aqua: {
          50: '#e0f7ff',
          100: '#b3ecfd',
          200: '#7fe0fb',
          300: '#48CAE4',
          400: '#00B4D8',
          500: '#0096C7',
          600: '#0077B6',
          700: '#023E8A',
          800: '#03045E',
          900: '#020344',
        },
        gold: {
          300: '#FFE59D',
          400: '#FFD166',
          500: '#FFC233',
          600: '#FFB300',
        },
        spa: {
          light: '#F8FBFD',
          dark: '#1A1A1A',
        }
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'aqua-gradient': 'linear-gradient(135deg, #00B4D8 0%, #023E8A 100%)',
        'gold-gradient': 'linear-gradient(135deg, #FFD166 0%, #FFC233 100%)',
        'hero-gradient': 'linear-gradient(135deg, rgba(2,62,138,0.85) 0%, rgba(0,180,216,0.6) 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
      },
      boxShadow: {
        'luxury': '0 20px 60px rgba(0, 180, 216, 0.15)',
        'luxury-lg': '0 30px 80px rgba(2, 62, 138, 0.2)',
        'gold': '0 10px 40px rgba(255, 209, 102, 0.3)',
        'glass': '0 8px 32px rgba(0, 180, 216, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}