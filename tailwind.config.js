/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#555934',
        secondary: '#BF9B7A',
        accent: '#8C5B3E',
        surface: '#FFFFFF',
        background: '#F8F5F0',
        ink: '#3F332B',
        muted: '#6F665F',
        line: '#E9E2DA',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        arabic: ['"IBM Plex Sans Arabic"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['60px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-sm': ['40px', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        section: ['40px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'section-sm': ['30px', { lineHeight: '1.25' }],
        subheading: ['26px', { lineHeight: '1.35' }],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        soft: '0 2px 10px rgba(63, 51, 43, 0.05)',
        card: '0 4px 20px rgba(63, 51, 43, 0.06)',
        'card-hover': '0 8px 28px rgba(63, 51, 43, 0.10)',
      },
      borderRadius: {
        xl2: '18px',
      },
      spacing: {
        18: '4.5rem',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
