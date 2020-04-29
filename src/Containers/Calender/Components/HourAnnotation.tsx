import React from "react";
import { Divider, makeStyles, Theme, Typography } from "@material-ui/core";

//? Styles
const styles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    width: 40,
    background: theme.palette.primary.dark,
  },
  divider: {
    background: "#080808",
  },
  modelHour: {
    background: theme.palette.primary.dark,
    height: "7.1875rem",
    position: "relative",
  },
  time: {
    position: "absolute",
    right: 3,
    top: 2,
    color: "#666666",
    fontSize: "0.625rem",
  },
}));

//? Default Export
export default () => {
  const classes = styles();

  const modelHours = ["9 AM", "10", "11", "12"];

  //? JSX Return
  return (
    <div className={classes.root}>
      {modelHours.map((modelHour) => (
        <>
          <Divider light className={classes.divider} />
          <div className={classes.modelHour}>
            <Typography className={classes.time}>{modelHour}</Typography>
          </div>
        </>
      ))}
    </div>
  );
};
