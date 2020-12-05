module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          500: "rgb(37 19 187)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
