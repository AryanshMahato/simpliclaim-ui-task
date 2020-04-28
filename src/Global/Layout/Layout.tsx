import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Navbar from "../Navbar/Navbar";
import Toolbar from "../Toolbar/Toolbar";
import theme from "../../Material UI/Theme";

//? Props
interface LayoutProps {
  children: React.ReactNode;
}

//? Styles
const styles = makeStyles(() => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    flexFlow: "column",
  },
  header: {},
  main: {
    display: "flex",
    flexFlow: "column",
  },
}));

//? Default Export
export default ({ children }: LayoutProps) => {
  const classes = styles();

  //? JSX Return
  return (
    <div className={classes.root}>
      {/*Custom Theme*/}
      <ThemeProvider theme={theme}>
        <div className={classes.header}>
          <Navbar />
        </div>
        <div className={classes.main}>
          <Toolbar />
          {/*ALL children Elements*/}
          <div style={{ marginLeft: "40px" }}>{children}</div>
        </div>
      </ThemeProvider>
    </div>
  );
};
