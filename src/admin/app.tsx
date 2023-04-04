export default {
  config: {
    locales: ["es", "pt-BR"],
    theme: {
      colors: {
        primary100: "#eff8f7",
        primary200: "#c4f0eb",
        primary500: "#8ae2d6",
        primary600: "#60bdb2",
        primary700: "#0a7a7f",
        buttonPrimary600: "#0a7a7f",
        buttonPrimary500: "#60bdb2",
      },
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
