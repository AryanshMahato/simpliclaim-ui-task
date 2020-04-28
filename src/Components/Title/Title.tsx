import React from "react";
import { makeStyles, Theme, Typography } from "@material-ui/core";

//? Props
interface TitleProps {
  name: string;
}

//? Styles
const styles = makeStyles((theme: Theme) => ({
  root: {
    height: "2.25rem",
    width: "100%",
    background: theme.palette.primary.light,
  },
  title: {},
  buttons: {},
  week: {},
  month: {},
}));

//? Default Export
export default ({ name }: TitleProps) => {
  const classes = styles();

  //? JSX Return
  return (
    <div className={classes.root}>
      <Typography>{name}</Typography>
    </div>
  );
};
