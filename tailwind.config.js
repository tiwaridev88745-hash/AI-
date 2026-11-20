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
        navy: {
          950: '#070C1B',
          900: '#0A1128',
          850: '#0F1A3A',
          800: '#15224F',
          700: '#1C2E66',
          600: '#2A438C'
        },
        crimson: {
          500: '#FF3B30',
          600: '#E0261B',
        },
        amber: {
          500: '#FF9500',
          600: '#D97706'
        },
        cyan: {
          400: '#00F2FE',
          500: '#00D2DE'
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}

