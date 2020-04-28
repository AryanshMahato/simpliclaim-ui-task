import React from "react";
import { makeStyles, Theme } from "@material-ui/core";

//? Styles
const styles = makeStyles((theme: Theme) => ({
  root: {},
}));

//? Default Export
export default () => {
  const classes = styles();

  //? JSX Return
  return <div className={classes.root}></div>;
};
