import React from "react";
import { makeStyles, Theme, Divider } from "@material-ui/core";
import OverView from "../../Appointment/Components/OverView";
import { ISlot } from "../../../Types/ModelData";

//? Props
interface SlotColumnProps {
  slots: ISlot;
}

//? Styles
const styles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    height: "28px",
    background: "rgba(255, 255, 255, 0.024)",
  },
  divider: {
    background: theme.palette.primary.dark,
    opacity: 0.7,
  },
}));

//? Default Export
export default ({ slots }: SlotColumnProps) => {
  const classes = styles();

  //? JSX Return
  return (
    <>
      <Divider light className={classes.divider} />
      <div className={classes.root}>
        {/*Returns Overview if Children is present in Slot of Context */}
        {!!slots.children ? <OverView appointment={slots.children} /> : null}
      </div>
    </>
  );
};

// Manages each and every slots
