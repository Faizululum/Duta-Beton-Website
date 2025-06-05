/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        // Desktop
        "desk-h1": ["56px", { lineHeight: "1.2" }],
        "desk-h2": ["48px", { lineHeight: "1.25" }],
        "desk-h3": ["40px", { lineHeight: "1.3" }],
        "desk-h4": ["32px", { lineHeight: "1.35" }],
        "desk-h5": ["24px", { lineHeight: "1.4" }],
        "desk-h6": ["20px", { lineHeight: "1.45" }],
        "desk-tagline": ["16px", { lineHeight: "1.5" }],
        "desk-tiny": ["12px", { lineHeight: "1.5" }],
        "desk-tiny2": ["10px", { lineHeight: "1.5" }],
        // Mobile
        "mob-h1": ["40px", { lineHeight: "1.2" }],
        "mob-h2": ["36px", { lineHeight: "1.25" }],
        "mob-h3": ["32px", { lineHeight: "1.3" }],
        "mob-h4": ["24px", { lineHeight: "1.35" }],
        "mob-h5": ["20px", { lineHeight: "1.4" }],
        "mob-h6": ["18px", { lineHeight: "1.45" }],
        "mob-tagline": ["16px", { lineHeight: "1.5" }],
        "mob-tiny": ["12px", { lineHeight: "1.5" }],
        "mob-tiny2": ["10px", { lineHeight: "1.5" }],
      },
      colors: {
        primary: {
          red: "#DC3545",
          redDark: "#BD2B2C",
        },
        secondary: {
          yellow: "#FFB923",
        },
        neutral: {
          white: "#F1F1F1",
          black: "#000000",
          grayLight: "#6D6D6F",
          grayDark: "#212529",
        },
        gradient: {
          red: ["#DC3545", "#B42318"],
          yellow: ["#FFB923", "#DFA220"],
          white: ["#FFFFFF", "#EAEAEA"],
          gray: ["#212529", "#212529"],
        },
      },
      spacing: {
        "thin-xs": "2px",
        "thin-sm": "4px",
        "thin-md": "8px",
        "thin-lg": "12px",
        "regular-sm": "16px",
        "regular-md": "18px",
        "regular-lg": "24px",
        "bold-sm": "32px",
        "bold-md": "36px",
        "bold-lg": "48px",
        "bold-xl": "56px",
        "bold-2xl": "64px",
        "bold-3xl": "72px",
        "bold-4xl": "105px",
      },
    },
  },
  plugins: [],
};
