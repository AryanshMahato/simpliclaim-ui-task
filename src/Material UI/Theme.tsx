import { createMuiTheme } from "@material-ui/core/styles";

// Global Styles

export default createMuiTheme({
  palette: {
    primary: {
      main: "#202020",
      dark: "#121212",
      light: "rgba(255,255,255,0.06)",
    },
    secondary: {
      main: "#0f6ebe",
      dark: "#094e87",
    },
    text: {
      primary: "#e6e6e6",
      secondary: "#999999",
    },
  },
  typography: {
    fontFamily: "Poppins,sans-serif",
  },
});
