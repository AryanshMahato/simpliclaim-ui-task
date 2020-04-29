import React from "react";
import { makeStyles, Theme, Divider } from "@material-ui/core";

//? Props
interface SlotColumnProps {
  slots: any;
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

  console.log(slots);

  //? JSX Return
  return (
    <>
      <div className={classes.root}>{slots.children}</div>
      <Divider light className={classes.divider} />
    </>
  );
};
