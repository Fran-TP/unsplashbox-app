import { transform } from 'next/dist/build/swc/generated-native'
import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        dark: '#121826',
        'muted-gray': '#6C727F',
        light: '#E5E7EB'
      },
      animation: {
        shimmer: 'shimmer 1s infinite'
      },
      keyframes: {
        shimmer: {
          to: {
            transform: 'translateX(100%)'
          }
        }
      }
    }
  },
  plugins: []
} satisfies Config
