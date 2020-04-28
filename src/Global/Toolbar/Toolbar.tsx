import React from "react";
import { Grid, makeStyles, Theme } from "@material-ui/core";

//? Styles
const styles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.primary.dark,
    width: "40px",
  },
}));

//? Default Export
export default () => {
  const classes = styles();

  //? JSX Return
  return <Grid container className={classes.root}></Grid>;
};
