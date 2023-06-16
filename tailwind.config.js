/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      'roboto': ['Roboto', "Arial", "sans-serif"]
    },
    extend: {
      colors: {
        navColor: "#322f20",
        mainColor: "#634e37",
        contentColor: "#4e4635"
      },
    },
  },
  plugins: [],
}