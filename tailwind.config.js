module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Biryani", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        ibm: ["IBM Plex Sans Hebrew", "sans-serif"],
      },
      backgroundImage: {
        layoutPattern: "url('../public/img/grad.jpeg')",
        band: "url('../public/img/band.png')",
        radialAtTr: "'radial-gradient(var(--gradient-color-stops))'",
      },
      letterSpacing: {
        tightest: "-.080em",
        tighter: "-.05em",
        widest: ".25em",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
