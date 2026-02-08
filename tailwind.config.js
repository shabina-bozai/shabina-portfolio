/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#dbe5ff',
          200: '#bfd2ff',
          300: '#93b4ff',
          400: '#608bff',
          500: '#3d5eff',
          600: '#2639f5',
          700: '#1e28d8',
          800: '#1d24b0',
          900: '#1d248b',
        },
        accent: {
          50: '#fef3e7',
          100: '#fde2c1',
          200: '#fbc988',
          300: '#f9ad4f',
          400: '#f79325',
          500: '#f17c0a',
          600: '#d55f05',
          700: '#b14508',
          800: '#90360d',
          900: '#772e0e',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(61, 94, 255, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(61, 94, 255, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
