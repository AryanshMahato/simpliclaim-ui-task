import React from "react";
import { makeStyles, Theme } from "@material-ui/core";

//? Props
interface InfoProps {
  appointment: {};
}

//? Styles
const styles = makeStyles((theme: Theme) => ({
  root: {},
}));

//? Default Export
export default ({ appointment }: InfoProps) => {
  const classes = styles();

  //? JSX Return
  return <div className={classes.root}></div>;
};
