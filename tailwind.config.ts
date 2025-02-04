import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // darkMode: 'media',
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '50%': { opacity: '0.6', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.4s ease-out',
      },
      outlineWidth: {
        default: '3px',
      },
      borderWidth: {
        default: '3px',
        card: '6px',
      },
      colors: {
        primary: '#FFEFDF',
        secondary: '#000000',
        tertiary: '#FF1A1C',
      },
    },
  },
  plugins: [],
} satisfies Config
