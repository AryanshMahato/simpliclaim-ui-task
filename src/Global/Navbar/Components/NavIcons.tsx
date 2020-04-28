import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import ThemeIcon from "../../../Assets/NavIcons/theme.svg";
import TaskIcon from "../../../Assets/Navbar/task.svg";
import NotificationIcon from "../../../Assets/NavIcons/notification.svg";
import ProfileIcon from "../../../Assets/NavIcons/profile.svg";

//? Styles
const styles = makeStyles(() => ({
  navIcon: {
    width: 32,
    height: "100%",
    cursor: "pointer",
  },
  icon: {
    height: 14,
    width: 14,
    objectFit: "contain",
  },
}));

//? Default Export
export default () => {
  const classes = styles();

  const navIcons = [
    { name: "ThemeIcon", icon: ThemeIcon },
    { name: "TaskIcon", icon: TaskIcon },
    { name: "NotificationIcon", icon: NotificationIcon },
    { name: "ProfileIcon", icon: ProfileIcon },
  ];

  //? JSX Return
  return (
    <>
      {navIcons.map((navIcons) => (
        <Grid
          container
          key={navIcons.name}
          className={classes.navIcon}
          justify={"center"}
          alignItems={"center"}
        >
          <img src={navIcons.icon} alt="Nav Icon" className={classes.icon} />
        </Grid>
      ))}
    </>
  );
};
