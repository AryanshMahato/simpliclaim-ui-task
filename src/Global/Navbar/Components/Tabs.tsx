import React from "react";
import { Box, Grid, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Arrow from "../../../Assets/arrow.svg";
import Add from "../../../Assets/add.svg";
import Zoom from "../../../Assets/search.svg";

interface TabsProps {
  activeTabs: number;
}

const styles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    marginLeft: 24,
    color: theme.palette.text.secondary,
  },
  tabBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    margin: "0 4px",
    background: theme.palette.primary.dark,
    opacity: 0.72,
    height: 24,
    width: 24,
    cursor: "pointer",
  },
  info: {
    width: 124,
    justifyContent: "space-between",
  },
  activeTabs: {
    fontSize: 10,
    lineHeight: 1.4,
  },
  arrowDown: {
    height: 8,
    width: 6,
    objectFit: "contain",
  },
  add: {},
  zoom: {},
}));

export default ({ activeTabs }: TabsProps) => {
  const classes = styles();
  return (
    <Grid className={classes.root}>
      <Box className={classes.info + " " + classes.tabBox}>
        <Typography className={classes.activeTabs}>
          {activeTabs} tabs active
        </Typography>
        <img src={Arrow} alt="Arrow" className={classes.arrowDown} />
      </Box>
      <Box className={classes.tabBox}>
        <img src={Add} alt="Arrow" className={classes.add} />
      </Box>{" "}
      <Box className={classes.tabBox}>
        <img src={Zoom} alt="Arrow" className={classes.zoom} />
      </Box>
    </Grid>
  );
};
