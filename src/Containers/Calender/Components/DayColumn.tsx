import React from "react";
import { makeStyles, Theme, Typography } from "@material-ui/core";
import HourRow from "./HourColumn";
import { IModelData } from "../../../Types/ModelData";

//? Props
interface DayColumnProps {
  todaySchedule: IModelData;
}

//? Styles
const styles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexFlow: "column",
    minWidth: 180,
    marginRight: 1,
  },
  heading: {
    background: theme.palette.primary.light,
    height: "2.5rem",
    display: "flex",
    alignItems: "center",
    position: "relative",
    padding: ".5rem",
  },
  date: {
    position: "relative",
    fontSize: "1.5rem",
    fontWeight: "bold",
    lineHeight: 1.17,
    color: "#999999",
  },
  day: {
    position: "relative",
    color: "#999999",
    fontSize: "0.625rem",
    fontWeight: 500,
    lineHeight: 1.4,
    top: ".25rem",
    left: ".125rem",
  },
}));

//? Default Export
export default ({ todaySchedule }: DayColumnProps) => {
  const classes = styles();

  // Adds 0 in front of singular dates
  const date = () => {
    if (todaySchedule.date < 10) {
      return "0" + todaySchedule.date;
    }
    return todaySchedule.date;
  };
  //? JSX Return
  return (
    <div className={classes.root}>
      <div className={classes.heading}>
        <Typography className={classes.date}>{date()}</Typography>
        <Typography className={classes.day}>{todaySchedule.day}</Typography>
      </div>
      {todaySchedule.time.map((time: any) => (
        <HourRow hours={time} key={time} />
      ))}
    </div>
  );
};

// Manages whole Day Column
