import React from "react";
import { Box, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import Clinic from "./Components/Clinic";
import Arrow from "../../Assets/arrow.svg";
import Tabs from "./Components/Tabs";
import Time from "./Components/Time";

//? Styles
const styles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    height: 36,
    background: theme.palette.secondary.dark,
    padding: "0 8px",
  },
  oval: {
    width: 20,
    height: 20,
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50%",
  },
  icon: {
    color: theme.palette.text.primary,
    fontSize: 10,
  },
  clinic: {
    display: "flex",
    color: theme.palette.text.primary,
    marginLeft: 12,
  },
  arrowDown: {
    marginLeft: 3,
    cursor: "pointer",
  },
  tabs: {},
  time: {},
  icons: {},
}));

//? Default Export
export default () => {
  const classes = styles();

  //? JSX Return
  return (
    <Grid
      className={classes.root}
      container
      alignItems="center"
      justify={"space-between"}
      wrap={"nowrap"}
    >
      {/*Left Part Starts*/}
      <Grid container alignItems="center">
        {/*Main Icon*/}
        <Grid
          className={classes.oval}
          container
          alignItems="center"
          justify="center"
        >
          <Typography className={classes.icon}>SC</Typography>
        </Grid>
        {/*Clinic Name*/}
        <Box className={classes.clinic}>
          <Clinic>Sydney Clinic</Clinic>
          <img src={Arrow} alt="Arrow" className={classes.arrowDown} />
        </Box>
        <Tabs activeTabs={5} />
      </Grid>
      {/*Left Part Ends*/}
      {/*Right Part Starts*/}
      <Grid container>
        <Time />
      </Grid>
      {/*Right Part Ends*/}
    </Grid>
  );
};
