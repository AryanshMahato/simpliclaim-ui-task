import React from "react";
import {
  Divider,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import Add from "../../Assets/add.svg";
import Task from "../../Assets/task.svg";
import Filters from "../../Assets/filters.svg";
import Today from "../../Assets/next-date.svg";
import Calender from "../../Assets/calender.svg";
import Adjust from "../../Assets/adjust.svg";
import Settings from "../../Assets/settings.svg";
import classNames from "classnames";
import date from "../../Util/Date";

//? Styles
const styles = makeStyles((theme: Theme) => ({
  root: {
    flexWrap: "nowrap",
    width: "100%",
    background: theme.palette.primary.light,
    height: 24,
    margin: 8,
    borderRadius: 20,
  },
  left: {
    height: "100%",
  },
  date: {},
  right: {},
  menuItem: {
    cursor: "pointer",
    padding: "0 12px",
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
  divider: {
    width: 1,
    height: "100%",
    margin: 0,
    backgroundColor: theme.palette.primary.dark,
    background: theme.palette.text.primary,
    opacity: 0.5,
  },
  active: {
    background: theme.palette.secondary.main,
    borderRadius: "20px 0 0 20px",
    color: `${theme.palette.text.primary} !important`,
  },
  icon: {
    width: 8,
    height: 8,
    marginRight: 3,
    color: theme.palette.text.secondary,
  },
  name: {
    fontSize: 10,
    color: theme.palette.text.secondary,
  },
}));

//? Default Export
export default () => {
  const classes = styles();

  const today = date();

  // Menu Item Data of Left Side(except calender)
  const menuItemsLeft = [
    { name: "New", icon: Add, active: true },
    { name: "Waitlist", icon: Task },
    { name: "Filters", icon: Filters },
    { name: "Today", icon: Today },
  ];

  // Menu Date Item
  const menuDate = { name: today, icon: Calender, isDate: true };

  // Menu Item Data of Right Side
  const menuItemsRight = [
    { name: "List", icon: Adjust },
    { name: "Settings", icon: Settings },
  ];

  //? JSX Return
  return (
    <Grid container className={classes.root} alignItems={"center"}>
      <Grid container alignItems={"center"} className={classes.left}>
        {menuItemsLeft.map((menuItem) => (
          <>
            <div
              className={classNames(classes.menuItem, {
                [classes.active]: !!menuItem.active,
              })}
            >
              <img
                src={menuItem.icon}
                alt={menuItem.name}
                className={classes.icon}
              />
              <Typography
                className={classNames(classes.name, {
                  [classes.active]: !!menuItem.active,
                })}
              >
                {menuItem.name}
              </Typography>
            </div>
            <Divider variant={"middle"} className={classes.divider} />
          </>
        ))}
      </Grid>
    </Grid>
  );
};
