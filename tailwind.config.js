/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0a0a0a',
          dark: '#121212',
          surface: '#1c1c1c',
          border: '#333333',
          text: '#ffffff',
          muted: '#e5e5e5',
          gold: '#f0b90b',
          goldDark: '#e8a900',
        },
        neon: {
          red: '#ef4444',
          yellow: '#fde047'
        }
      },
      fontFamily: {
        saira: ['Saira', 'sans-serif'],
        condensed: ['"Saira Semi Condensed"', 'sans-serif'],
        mono: ['Saira', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #333333 1px, transparent 1px), linear-gradient(to bottom, #333333 1px, transparent 1px)",
        'gold-gradient': "linear-gradient(to top, #e8a900, #f0b90b)",
      }
    },
  },
  plugins: [],
}