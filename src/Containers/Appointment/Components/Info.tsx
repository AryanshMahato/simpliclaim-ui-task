import React from "react";
import { makeStyles, Theme } from "@material-ui/core";
//! Cancel Button Asset is not correct
import Cancel from "../../../Assets/Info/cancel.svg";
import Edit from "../../../Assets/Info/edit.svg";
import Delete from "../../../Assets/Info/delete.svg";
import Name from "./Name";

//? Props
interface InfoProps {
  name: string;
}

//? Styles
const styles = makeStyles((theme: Theme) => ({
  root: {},
  topActionButtons: {
    cursor: "pointer",
    marginBottom: "0.5625rem",

    "&>*": {
      marginRight: "0.75rem",
    },
  },
  nameComponent: {},
  tabs: {},
  options: {},
  mainActions: {},
}));

//? Default Export
export default ({ name }: InfoProps) => {
  const classes = styles();

  //? JSX Return
  return (
    <div className={classes.root}>
      <div className={classes.topActionButtons}>
        {/*! Cancel Button Asset is not correct !*/}
        <img src={Cancel} alt={"Edit"} />
        <img src={Edit} alt={"Edit"} />
        <img src={Delete} alt={"Edit"} />
      </div>
      <div className={classes.nameComponent}>
        <Name name={name} />
      </div>
    </div>
  );
};
