/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out'
      },
      zIndex: {
        "-10": "-10",
      },
      fontFamily: {
        bahnschrift: ["Bahnschrift"],
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        gray: {
          100: "#A56A59",
          200: "#F3F3F3",
          300: "#FAFAFA"
        },
        black: {
          100: "#353436",
          200: "#000000",
        },
        green: {
          300: "#96C953",
          400: "#6DB247",
          500: "#499A3B",
        },
      },
    },
  },
  plugins: [],
};
