import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./Material UI/Theme";
import Navbar from "./Global/Navbar/Navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
