/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        // Desktop
        'desk-h1': ['56px', { lineHeight: '1.2' }],
        'desk-h2': ['48px', { lineHeight: '1.25' }],
        'desk-h3': ['40px', { lineHeight: '1.3' }],
        'desk-h4': ['32px', { lineHeight: '1.35' }],
        'desk-h5': ['24px', { lineHeight: '1.4' }],
        'desk-h6': ['20px', { lineHeight: '1.45' }],
        'desk-tagline': ['16px', { lineHeight: '1.5' }],
        'desk-tiny': ['12px', { lineHeight: '1.5' }],
        'desk-tiny2': ['10px', { lineHeight: '1.5' }],
        // Mobile
        'mob-h1': ['40px', { lineHeight: '1.2' }],
        'mob-h2': ['36px', { lineHeight: '1.25' }],
        'mob-h3': ['32px', { lineHeight: '1.3' }],
        'mob-h4': ['24px', { lineHeight: '1.35' }],
        'mob-h5': ['20px', { lineHeight: '1.4' }],
        'mob-h6': ['18px', { lineHeight: '1.45' }],
        'mob-tagline': ['16px', { lineHeight: '1.5' }],
        'mob-tiny': ['12px', { lineHeight: '1.5' }],
        'mob-tiny2': ['10px', { lineHeight: '1.5' }],
      },
      colors: {
        primary: {
          red: '#DC3545',
          redDark: '#BD2B2C',
        },
        secondary: {
          yellow: '#FFB923',
        },
        neutral: {
          white: '#F1F1F1',
          black: '#000000',
          grayLight: '#6D6D6F',
          grayDark: '#212529',
        },
        gradient: {
          red: ['#DC3545', '#B42318'],
          yellow: ['#FFB923', '#DFA220'],
          white: ['#FFFFFF', '#EAEAEA'],
          gray: ['#212529', '#212529'],
        },
      },
      spacing: {
        '0': '0px',
        '2': '2px',
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '18': '18px',
        '24': '24px',
        '32': '32px',
        '36': '36px',
        '48': '48px',
        '56': '56px',
        '64': '64px',
        '72': '72px',
        '112': '112px',
        '128': '128px',
      },
    },
  },
  plugins: [],
};
