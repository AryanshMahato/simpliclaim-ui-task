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
  },
}));

//? Default Export
export default ({ todaySchedule }: DayColumnProps) => {
  const classes = styles();
  //? JSX Return
  return (
    <div className={classes.root}>
      <div className={classes.heading}>
        <Typography>{todaySchedule.date}</Typography>
      </div>
      {todaySchedule.time.map((time: any) => (
        <HourRow hours={time} key={time} />
      ))}
    </div>
  );
};

// Manages whole Day Column
