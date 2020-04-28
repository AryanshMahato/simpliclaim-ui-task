import React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import OverView from "./Components/OverView";
import Calender from "../../Assets/Appointments/calender.svg";

//? Styles
const styles = makeStyles((theme: Theme) => ({
  root: {
    background: "rgba(255, 255, 255, 0.024)",
  },
}));

//? Default Export
export default () => {
  const classes = styles();

  //? JSX Return
  return (
    <div className={classes.root}>
      <OverView
        appointment={{
          badge: Calender,
          name: "Peter Meyers",
          topic: "PreOp Consult",
          badgeColor: "#c24040",
          date: 8,
          time: 10,
          slot: 3,
        }}
      />
    </div>
  );
};
