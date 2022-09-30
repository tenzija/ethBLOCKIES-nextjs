const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Major Mono Display", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-purple-dark" : "var(--clr-purple-dark)",
        "brand-purple-mid" : "var(--clr-purple-mid)",
        "brand-purple-light" : "var(--clr-purple-light)",
        "brand-blue-mid" : "var(--clr-blue-mid)",
        "brand-blue-light" : "var(--clr-blue-light)",
        "brand-light" : "var(--clr-light)",
      },
      animation: {
        "pulse-slow": "pulse 10s linear infinite",
      }
    },
  },
  plugins: [],
}