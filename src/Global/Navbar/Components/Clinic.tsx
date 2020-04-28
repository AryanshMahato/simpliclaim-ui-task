import React from "react";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const styles = makeStyles(() => ({
  root: {
    fontWeight: 500,
    fontSize: 12,
    lineHeight: "1.33",
  },
}));

interface CityProps {
  children: string;
}

export default ({ children }: CityProps) => {
  const classes = styles();
  return <Typography className={classes.root}>{children}</Typography>;
};
