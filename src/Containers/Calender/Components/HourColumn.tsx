import React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import SlotColumn from "./SlotColumn";

//? Props
interface HourProps {
  hours: any;
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
