import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./Material UI/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1></h1>
    </ThemeProvider>
  );
}

export default App;
