/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // adjust paths based on your project structure
  ],
  theme: {
    screens: {
      mobile: "320px", // base minimum for mobile
      sm: "375px", // design width for mobile
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      desktop: "1440px", // design width for desktop
    },
    extend: {
      colors: {
        primary: {
          cyan: "hsl(180, 66%, 49%)",
          darkViolet: "hsl(257, 27%, 26%)",
        },
        secondary: {
          red: "hsl(0, 87%, 67%)",
        },
        neutral: {
          gray: "hsl(0, 0%, 75%)",
          grayishViolet: "hsl(257, 7%, 63%)",
          veryDarkBlue: "hsl(255, 11%, 22%)",
          veryDarkViolet: "hsl(260, 8%, 14%)",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        body: "18px",
      },
      fontWeight: {
        medium: 500,
        bold: 700,
      },
    },
  },
  plugins: [],
};
