import React from "react";
import { makeStyles, Theme, Typography } from "@material-ui/core";

//? Props
interface DayColumnProps {
  todaySchedule: any;
}

//? Styles
const styles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    background: theme.palette.primary.light,
    minWidth: 180,
    margin: "0 1px",
  },
}));

//? Default Export
export default ({ todaySchedule }: DayColumnProps) => {
  const classes = styles();

  //? JSX Return
  return (
    <div className={classes.root}>
      <Typography>{todaySchedule.date}</Typography>
    </div>
  );
};
