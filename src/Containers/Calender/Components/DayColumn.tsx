import React from "react";
import { makeStyles, Theme, Typography } from "@material-ui/core";

//? Props
interface DayColumnProps {
  today: number;
}

//? Styles
const styles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    width: "unset",
  },
  dayColumn: {
    background: theme.palette.primary.light,
    width: 180,
  },
}));

//? Default Export
export default ({ today }: DayColumnProps) => {
  const classes = styles();

  // Array of total days to display,
  const daysToDisplay = [
    today,
    ++today,
    ++today,
    ++today,
    ++today,
    ++today,
    ++today,
  ];

  //? JSX Return
  return (
    <div className={classes.root}>
      {daysToDisplay.map((day) => (
        <div className={classes.dayColumn}>
          <Typography>{day}</Typography>
        </div>
      ))}
    </div>
  );
};
