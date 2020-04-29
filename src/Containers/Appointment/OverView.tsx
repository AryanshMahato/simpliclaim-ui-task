import React from "react";
import { makeStyles, Theme, Typography } from "@material-ui/core";
import IAppointment from "../../Types/Appointments";
import Info from "./Info";

//? Props
interface OverViewProps {
  appointment: IAppointment;
}

//? Styles
const styles = (background: string) =>
  makeStyles((theme: Theme) => ({
    root: {
      height: "1.75rem",
      boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.5)",
      borderRadius: 2,
      backgroundColor: "rgba(255, 255, 255, 0.096)",
      maxWidth: "11.25rem",
      display: "flex",
      alignItems: "center",
      width: "fit-content",
      paddingRight: "0.25rem",
    },
    badgeContainer: {
      display: "flex",
      alignItems: "center",
      padding: "0 0.375rem",
      height: "100%",
      background: "#292929",
    },
    badgeColor: {
      height: "100%",
      backgroundColor: background,
      width: "0.25rem",
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
  // second brackets executes inner function to get classes object
  const classes = styles(appointment.badgeColor)();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const overViewClicked = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //? JSX Return
  return (
    <div className={classes.root}>
      <div className={classes.badgeColor} onClick={overViewClicked} />
      <div className={classes.badgeContainer} onClick={overViewClicked}>
        <img src={appointment.badge} alt={"Badge"} className={classes.badge} />
      </div>
      <div className={classes.textContainer} onClick={overViewClicked}>
        <Typography className={classes.name}>{appointment.name}</Typography>
        <Typography className={classes.topic}>{appointment.topic}</Typography>
      </div>
      <Info name={appointment.name} anchorEl={anchorEl} onClose={handleClose} />
    </div>
  );
};

// Overview box that will be shown on Calender
