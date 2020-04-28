import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import theme from "./Material UI/Theme";
import Navbar from "./Global/Navbar/Navbar";
import Toolbar from "./Global/Toolbar/Toolbar";

const styles = makeStyles(() => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    flexFlow: "column",
  },
  header: {
    flex: " 0 1 auto",
  },
  main: {
    display: "flex",
    flex: "1 1 auto",
  },
}));

function App() {
  const classes = styles();
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <div className={classes.header}>
          <Navbar />
        </div>
        <div className={classes.main}>
          <Toolbar />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
