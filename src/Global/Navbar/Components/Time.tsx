import React, { useEffect, useState } from "react";
import { Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import Clock from "../../../Assets/clock.svg";
import currentTime from "../../../Util/CurrentTime";

//? Styles
const styles = makeStyles((theme: Theme) => ({
  root: {
    width: "fit-content",
  },
  clock: {
    width: 12,
    height: 12,
    objectFit: "contain",
  },
  time: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: 500,
    color: theme.palette.text.primary,
    lineHeight: 1.33,
  },
}));

//? Default Export
export default () => {
  const classes = styles();

  const today = new Date();

  // Sets today time at component load
  const [time, setTime] = useState(currentTime());

  // Gets Current Second
  const [second, setSecond] = useState(
    +today.toLocaleString("en-US", {
      second: "numeric",
    })
  );

  // Updates second after every 1s
  setTimeout(() => {
    setSecond(second + 1);
  }, 1000);

  // Checks if second is 60,
  useEffect(() => {
    if (second === 60) {
      // Reset Second to 0
      setSecond(0);
      // Updates DOM with new Time
      setTime(currentTime());
    }
  }, [second]);

  //? JSX Return
  return (
    <Grid
      className={classes.root}
      container
      alignItems={"center"}
      wrap={"nowrap"}
      justify={"flex-end"}
    >
      <img src={Clock} alt="Clock" className={classes.clock} />
      <Typography className={classes.time}>{time}</Typography>
    </Grid>
  );
};
