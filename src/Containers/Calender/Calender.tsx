import React, { useContext } from "react";
import { Grid, makeStyles, Theme } from "@material-ui/core";
import DayColumn from "./Components/DayColumn";
import { AppointmentContext } from "../../Context/AppointmentContextProvider";
import { IModelData } from "../../Types/ModelData";

//? Styles
const styles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    width: "100%",
    padding: 1,
    background: "rgba(255, 255, 255, 0.024)",
    display: "flex",
    overflow: "scroll",
  },
}));

//? Default Export
export default () => {
  const classes = styles();
  const appointmentsFields = useContext(AppointmentContext);

  //? JSX Return
  return (
    <Grid className={classes.root}>
      {appointmentsFields.map((appointmentsField: IModelData) => (
        <DayColumn
          todaySchedule={appointmentsField}
          key={appointmentsField.date}
        />
      ))}
    </Grid>
  );
};

//Manages whole Calender
