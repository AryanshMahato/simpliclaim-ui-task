import React from "react";
import { Grid, makeStyles, Theme } from "@material-ui/core";
import Dashboard from "../../Assets/Toolbar/dashboard.svg";
import Calender from "../../Assets/calender.svg";
import People from "../../Assets/Toolbar/people.svg";
import Mail from "../../Assets/Toolbar/mail.svg";
import Reports from "../../Assets/Toolbar/reports.svg";
import Settings from "../../Assets/settings.svg";

//? Styles
const styles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.primary.dark,
    width: "40px",
  },
  active: {
    background: "rgba(15, 110, 190, 0.16)",
    position: "relative",
    "&:before": {
      content: "''",
      position: "absolute",
      left: 0,
      width: 2,
      height: 36,
      background: theme.palette.secondary.main,
    },
  },
  toolIcon: {
    cursor: "pointer",
    width: "100%",
    height: 36,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 14,
    width: 14,
    opacity: 1,
  },
}));

//? Default Export
export default () => {
  const classes = styles();

  // Tool Items
  const toolIcons = [
    { icon: Dashboard, active: false },
    { icon: Calender, active: true },
    { icon: People, active: false },
    { icon: Mail, active: false },
    { icon: Reports, active: false },
    { icon: Settings, active: false },
  ];

  // Returns both active and toolIcon class in active parameter is true
  const gridIconClasses = (active: boolean) => {
    if (active) {
      return classes.active + " " + classes.toolIcon;
    }
    return classes.toolIcon;
  };

  //? JSX Return
  return (
    <Grid
      container
      className={classes.root}
      direction={"column"}
      alignItems={"center"}
    >
      {toolIcons.map((toolIcon) => (
        <Grid item className={gridIconClasses(toolIcon.active)}>
          <img
            src={toolIcon.icon}
            alt={"Tool Items"}
            className={classes.icon}
          />
        </Grid>
      ))}
    </Grid>
  );
};
