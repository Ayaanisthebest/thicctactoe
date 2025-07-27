import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'gradient-shift': 'gradientShift 15s ease infinite',
        'cosmic-shift': 'cosmicShift 20s ease-in-out infinite',
        'text-gradient-shift': 'textGradientShift 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      backdropBlur: {
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
      colors: {
        glass: {
          white: 'rgba(255, 255, 255, 0.1)',
          'white-strong': 'rgba(255, 255, 255, 0.2)',
          border: 'rgba(255, 255, 255, 0.18)',
          shadow: 'rgba(31, 38, 135, 0.37)',
        },
        neon: {
          blue: '#00d4ff',
          purple: '#b347d9',
          pink: '#ff006e',
          teal: '#06ffa5',
        }
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
        'glass-strong': '0 12px 40px rgba(31, 38, 135, 0.37)',
      }
    },
  },
  plugins: [],
}

export default config
