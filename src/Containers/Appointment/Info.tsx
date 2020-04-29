import React from "react";
import { makeStyles, Menu, Theme } from "@material-ui/core";

//? Props
interface InfoProps {
  name: string;
  anchorEl: any;
  onClose: () => void;
}

//? Styles
const styles = makeStyles((theme: Theme) => ({
  root: {},
}));

//? Default Export
export default ({ name, anchorEl, onClose }: InfoProps) => {
  const classes = styles();

  //? JSX Return
  return (
    <div className={classes.root}>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        keepMounted
        onClose={onClose}
        onClick={onClose}
      >
        {/*Info*/}
      </Menu>
    </div>
  );
};
