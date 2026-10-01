/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B0F1A',
          light: '#111726',
          lighter: '#171F33'
        },
        ink: '#F8FAFC',
        muted: '#94A3B8',
        electric: '#00B4FF',
        vivid: '#A855F7',
        pink: '#EC4899'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #00B4FF 0%, #A855F7 60%, #EC4899 100%)',
        'brand-gradient-v': 'linear-gradient(180deg, #00B4FF 0%, #A855F7 100%)'
      },
      maxWidth: {
        content: '1200px'
      }
    }
  },
  plugins: []
}
