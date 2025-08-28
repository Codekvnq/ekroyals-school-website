/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // School brand colors inspired by uniforms and building
        school: {
          blue: {
            50: '#eff6ff',
            90: '#393E46',
            100: '#dbeafe',
            200: '#bfdbfe',
            500: '#4D8EFF',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#1F2544',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
            950: '#172554',
          },
          yellow: {
            50: '#fefce8',
            100: '#fef9c3',
            200: '#fef08a',
            300: '#fde047',
            400: '#facc15',
            500: '#FFD233',
            600: '#ca8a04',
            700: '#a16207',
            800: '#854d0e',
            900: '#713f12',
            950: '#422006',
          },
          gold: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
            950: '#451a03',
          }
        },
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#fef7ff',
          100: '#fceeff',
          200: '#f8daff',
          300: '#f2b8ff',
          400: '#e879ff',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        accent: {
          purple: '#8b5cf6',
          blueblack: '#393E46',
          pink: '#f472b6',
          orange: '#fb923c',
          yellow: '#fbbf24',
          red: '#f87171',
          green: '#4ade80',
          blue: '#60a5fa',
          indigo: '#818cf8',
        },
        pastel: {
          purple: '#f3e8ff',
          blue: '#e0f2fe',
          pink: '#fdf2f8',
          yellow: '#fefce8',
          orange: '#fff7ed',
          green: '#f0fdf4',
          indigo: '#eef2ff',
        }
      },
      fontFamily: {
        'playful': ['Comic Neue', 'Comic Neue'],
        'clean': ['Inter', 'sans-serif'],
         'poppins': ["Poppins", "sans-serif"],
          'nunito': ["Nunito", "sans-serif"],
  
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};
