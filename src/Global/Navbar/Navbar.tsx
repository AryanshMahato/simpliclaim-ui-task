import React from "react";
import { Box, Grid, makeStyles, Theme, Typography } from "@material-ui/core";

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
    color: theme.palette.text.primary,
    marginLeft: 12,
    lineHeight: "1.33",
    fontWeight: 500,
    fontSize: 12,
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
    <Grid className={classes.root} container alignItems="center">
      {/*Left Part Starts*/}
      <Box>
        <Grid
          className={classes.oval}
          container
          alignItems="center"
          justify="center"
        >
          <Typography className={classes.icon}>SC</Typography>
        </Grid>
      </Box>
      <Box className={classes.clinic}>
        <Typography>Sydney Clinic</Typography>
      </Box>
      {/*Left Part Ends*/}
    </Grid>
  );
};
