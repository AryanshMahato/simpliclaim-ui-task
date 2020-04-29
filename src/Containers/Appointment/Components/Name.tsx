import React from "react";
import { makeStyles, Theme, Typography } from "@material-ui/core";
import User from "../../../Assets/Info/user.svg";
import Payment from "../../../Assets/Info/payment.svg";
import Task from "../../../Assets/Info/task.svg";
import Mail from "../../../Assets/Info/mail.svg";

//? Props
interface NameProps {
  name: string;
}

//? Styles
const styles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
  },
  text: {},
  name: {
    fontSize: "0.875rem",
    color: "rgba(255, 255, 255, 0.9)",
    fontWeight: "bold",
    lineHeight: 1.29,
  },
  description: {
    fontSize: "0.625rem",
    color: theme.palette.text.secondary,
    lineHeight: 1.4,
  },
  icons: {
    display: "flex",
    position: "relative",
    left: ".5rem",
  },
  iconContainer: {
    background: "rgba(18,18,18,0.3)",
    width: "1.5rem",
    height: "1.5rem",
    marginRight: "0.125rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: "0.875rem",
    height: "0.875rem",
  },
}));

//? Default Export
export default ({ name }: NameProps) => {
  const classes = styles();

  const icons = [User, Payment, Task, Mail];

  console.log();

  //? JSX Return
  return (
    <div className={classes.root}>
      <div className={classes.text}>
        <Typography className={classes.name}>{name}</Typography>
        <Typography className={classes.description}>
          {"32Yrs • 0412345678"}
        </Typography>
      </div>
      <div className={classes.icons}>
        {icons.map((icon) => (
          <div className={classes.iconContainer}>
            <img
              src={icon}
              key={icon.toString()}
              alt="Icon"
              className={classes.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
