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
    },
  },
  plugins: [],
};
