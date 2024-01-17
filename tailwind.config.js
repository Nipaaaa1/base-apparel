/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        desaturatedRed: "hsl(0, 36%, 70%)",
        softRed: "hsl(0, 93%, 68%)",
        darkGrayishRed: "hsl(0, 6%, 24%)",
      },
      backgroundImage: {
        firstGradient:
          "linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))",
        secondGradient:
          "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
        heroDesktop: "url('/images/hero-desktop.jpg')",
        patternDesktop: "url('/images/bg-pattern-desktop.svg')",
      },
      lineHeight: {
        heading: "0.75",
      },
      letterSpacing: {
        heading: "1.5rem",
      },
      fontFamily: {
        josefinSans: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
