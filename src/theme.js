import { createTheme } from "@material-ui/core";

// custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    background: {
      default: "#ffffff",
    },
    green: {
      main: "rgb(0, 82, 73)",
      light: "rgb(200, 250, 205)",
      lighter: "rgba(0, 171, 85, 0.08)",
      dark: "rgb(0, 123, 85)",
      darker: "rgb(0, 171, 85)",
    },
    blue: {
      main: "rgb(4, 41, 122)",
      dark: "rgb(12, 83, 183)",
      light: "rgb(208, 242, 255)",
    },
    yellow: {
      main: "rgb(122, 79, 1)",
      dark: "rgb(183, 129, 3)",
      light: "rgb(255, 247, 205)",
    },
    maroon: {
      main: "rgb(122, 12, 46)",
      dark: "rgb(183, 33, 54)",
      light: "rgb(255, 231, 217)",
    },
    gray: {
      main: "rgb(99, 115, 129)",
      light: "rgb(223, 223, 223)",
      lighter: "rgb(244, 246, 248)",
    },
    red: {
      main: "rgb(255, 72, 66)",
    },
    mixins: {
      toolbar: {
        minHeight: 64,
      },
    },
  },
});

export default theme;
