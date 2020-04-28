import React from "react";
import { Grid, makeStyles, Theme } from "@material-ui/core";

//? Styles
const styles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    width: "100%",
    background: "#000",
    padding: 1,
  },
}));

//? Default Export
export default () => {
  const classes = styles();

  //? JSX Return
  return (
    <Grid className={classes.root}>
      <h1>Calender</h1>
    </Grid>
  );
};
