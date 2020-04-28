import React from "react";
import { makeStyles, Theme, Typography } from "@material-ui/core";
import IAppointments from "../../../Types/Appointments";

//? Props
interface OverViewProps {
  appointment: IAppointments;
}

//? Styles
const styles = makeStyles((theme: Theme) => ({
  root: {
    height: "1.75rem",
    boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.5)",
    backgroundColor: "#242424",
    maxWidth: "11.25rem",
    display: "flex",
    alignItems: "center",
  },
  badgeContainer: {
    display: "flex",
    alignItems: "center",
    padding: "0 0.375rem",
    height: "100%",
    background: "#292929",
  },
  badge: {
    height: "1rem",
    width: "1rem",
  },
  textContainer: {},
  name: {
    fontSize: "0.625rem",
    lineHeight: 1.4,
    color: theme.palette.text.primary,
  },
  topic: {
    fontSize: "0.5rem",
    lineHeight: 1.25,
    textTransform: "uppercase",
    color: theme.palette.text.secondary,
    letterSpacing: 0.5,
  },
}));

//? Default Export
export default ({ appointment }: OverViewProps) => {
  const classes = styles();

  //? JSX Return
  return (
    <div className={classes.root}>
      <div className={classes.badgeContainer}>
        <img src={appointment.badge} alt={"Badge"} className={classes.badge} />
      </div>
      <div className={classes.textContainer}>
        <Typography className={classes.name}>{appointment.name}</Typography>
        <Typography className={classes.topic}>{appointment.topic}</Typography>
      </div>
    </div>
  );
};
