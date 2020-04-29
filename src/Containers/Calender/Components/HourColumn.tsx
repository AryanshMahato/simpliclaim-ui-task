import React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import SlotColumn from "./SlotColumn";
import { IModelTime } from "../../../Types/ModelData";

//? Props
interface HourProps {
  hours: IModelTime;
}

//? Styles
const styles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.primary.light,
  },
}));

//? Default Export
export default ({ hours }: HourProps) => {
  const classes = styles();
  //? JSX Return
  return (
    <div className={classes.root}>
      {hours.slot.map((singleSlot: any) => (
        <SlotColumn slots={singleSlot} />
      ))}
    </div>
  );
};

// Manages all hours present Context
