import React from "react";
import { Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import classNames from "classnames";

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
  title: {
    fontSize: "0.875rem",
    color: theme.palette.text.secondary,
    lineHeight: 1.29,
    marginRight: "1rem",
  },
  buttonContainer: {
    width: "fit-content",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 0.5rem",
    fontSize: "0.625rem",
    lineHeight: 1.4,
    height: "1.125rem",
    cursor: "pointer",
  },
  week: {
    color: theme.palette.text.primary,
    background: theme.palette.secondary.main,
    borderRadius: "12px 0 0 12px",
  },
  month: {
    color: theme.palette.text.secondary,
    background: theme.palette.primary.dark,
    borderRadius: "0 12px 12px 0",
  },
}));

//? Default Export
export default ({ name }: TitleProps) => {
  const classes = styles();

  //? JSX Return
  return (
    <Grid
      container
      className={classes.root}
      alignItems={"center"}
      justify={"center"}
    >
      <Typography className={classes.title}>{name}</Typography>
      <Grid container className={classes.buttonContainer}>
        <Typography className={classNames(classes.week, classes.buttons)}>
          {"Week"}
        </Typography>
        <Typography className={classNames(classes.month, classes.buttons)}>
          {"Month"}
        </Typography>
      </Grid>
    </Grid>
  );
};
