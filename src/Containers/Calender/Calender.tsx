import React, { useContext } from "react";
import { Grid, makeStyles, Theme } from "@material-ui/core";
import DayColumn from "./Components/DayColumn";
import { AppointmentContext } from "../../Context/AppointmentContextProvider";
import { IModelData } from "../../Types/ModelData";
import HourAnnotation from "./Components/HourAnnotation";

//? Styles
const styles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    width: "100%",
    padding: 1,
    background: "rgba(255, 255, 255, 0.024)",
    display: "flex",
    overflowX: "scroll",
    overflowY: "hidden",
  },
  emptyCell: {
    height: "2.5rem",
    background: theme.palette.primary.dark,
  },
}));

//? Default Export
export default () => {
  const classes = styles();
  const appointmentsFields = useContext(AppointmentContext);

  //? JSX Return
  return (
    <Grid className={classes.root}>
      <div>
        <div className={classes.emptyCell} />
        <HourAnnotation />
      </div>
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
