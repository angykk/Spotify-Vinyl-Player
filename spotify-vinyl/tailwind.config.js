/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-slowdown': 'spin 3s linear 1 forwards, slowdown 3s ease-out forwards',
        'spin-speedup': 'spin 3s linear 1 forwards, speedup 3s ease-out forwards',
      },
      keyframes: {
        slowdown: {
          '0%': { transform: 'rotate(90deg)' },
          '50%': { transform: 'rotate(45deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        speedup: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(45deg)' },
          '100%': { transform: 'rotate(90deg)' },
        }
      }
    },
  },
  plugins: [],
} 