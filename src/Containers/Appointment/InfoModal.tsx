import React from "react";
import { makeStyles, Popover, Theme } from "@material-ui/core";
import Info from "./Components/Info";

//? Props
interface InfoProps {
  name: string;
  anchorEl: any;
  onClose: () => void;
}

//? Styles
const styles = makeStyles((theme: Theme) => ({
  root: {},
  main: {
    width: "16.25rem",
    background: "#1f1f1f",
    borderRadius: "0.25rem",
    padding: 10,
  },
}));

//? Default Export
export default ({ name, anchorEl, onClose }: InfoProps) => {
  const classes = styles();

  //? JSX Return
  return (
    <Popover
      id="simple-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      keepMounted
      onClose={onClose}
      onClick={onClose}
      className={classes.root}
      PaperProps={{ className: classes.main }}
      anchorOrigin={{
        vertical: "center",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "left",
      }}
    >
      <Info name={name} />
    </Popover>
  );
};
