import React from "react";
import { Grid, makeStyles, Theme } from "@material-ui/core";
import DayColumn from "./Components/DayColumn";

//? Styles
const styles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    width: "100%",
    padding: 1,
  },
}));

//? Default Export
export default () => {
  const classes = styles();

  //? JSX Return
  return (
    <Grid className={classes.root}>
      <DayColumn today={8} />
    </Grid>
  );
};
