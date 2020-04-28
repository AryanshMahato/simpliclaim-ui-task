import React from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";

const styles = makeStyles(() => ({
  root: {
    width: "100%",
    height: 36,
    background: "#094e87",
    padding: "0 8px",
  },
  oval: {
    width: 20,
    height: 20,
    backgroundColor: "#202020",
    borderRadius: "50%",
  },
  icon: {
    color: "#e6e6e6",
    fontSize: 10,
  },
  clinic: {
    marginLeft: 12,
    color: "#e6e6e6",
    lineHeight: "1.33",
    fontWeight: 500,
    fontSize: 12,
  },
  tabs: {},
  time: {},
  icons: {},
}));

export default () => {
  const classes = styles();
  return (
    <Grid className={classes.root} container alignItems="center">
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
    </Grid>
  );
};
