import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#0A0A0A',
        'black-soft': '#1A1A1A',
        charcoal: '#2D2D2D',
        cream: '#F4F1DE',
        'cream-dark': '#E8E4CF',
        rose: '#C1666B',
        'rose-light': '#D4878B',
        'rose-dark': '#A3545A',
        sage: '#81B29A',
        white: '#F5F5F0',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'wider-xl': '0.2em',
        'wider-2xl': '0.25em',
        'brand': '0.15em',
        'nav': '0.12em',
        'eyebrow': '0.2em',
      },
    },
  },
  plugins: [],
}
export default config
