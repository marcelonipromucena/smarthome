const colors = {
  accent: "#fa754c",
  black: "#292934",
  white: "#FFFFFF",
  gray: "#a7a7a7",
  gray2: '#ECEDEF',
  button: "#dddddd"
};

const sizes = {
  base: 14,
  font: 14,
  welcome: 18,
  name: 21,
  h1: 140,
  button: 16
};

const fonts = {
  welcome: {
    fontSize: sizes.welcome,
    color: colors.gray,
    letterSpacing: -0.6,
    lineHeight: sizes.welcome + 4
  },
  name: {
    fontSize: sizes.name,
    fontWeight: "600",
    color: colors.black,
    letterSpacing: -1.1,
    lineHeight: sizes.name + 4
  },
  caption: {
    fontSize: sizes.welcome,
    color: colors.gray,
    letterSpacing: -0.6,
    lineHeight: sizes.welcome + 4
  },
  h1: {
    fontSize: sizes.h1,
    color: colors.black,
    letterSpacing: -10,
    lineHeight: sizes.h1
  },

  button: {
    fontSize: sizes.button,
    color: colors.black,
    letterSpacing: -0.4,
    fontWeight: "600",
    lineHeight: sizes.button + 4
  }
};

export { colors, sizes, fonts };
