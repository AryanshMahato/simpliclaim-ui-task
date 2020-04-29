import React from "react";
import { makeStyles, Theme } from "@material-ui/core";

//? Props
interface HourColumnProps {
  hours: any;
}

//? Styles
const styles = makeStyles((theme: Theme) => ({
  root: {},
}));

//? Default Export
export default ({ hours }: HourColumnProps) => {
  const classes = styles();

  console.log(hours);

  //? JSX Return
  return <div className={classes.root}></div>;
};
