import React, { createContext } from "react";
import Appointments from "../Data/Appointments";
import IAppointment from "../Types/Appointments";
import { IModelData } from "../Types/ModelData";
import moment from "moment";

//? Props
interface AppointmentContextProps {
  children: React.ReactNode;
}

console.log();

// Empty sets to give structure to the calender
const modelData: Array<IModelData> = [
  {
    date: moment().date(),
    day: moment().format("dddd"),
    time: [
      {
        hour: 9,
        slot: [
          { children: null },
          { children: null },
          { children: null },
          { children: null },
        ],
      },
      {
        hour: 10,
        slot: [
          { children: null },
          { children: null },
          { children: null },
          { children: null },
        ],
      },
      {
        hour: 11,
        slot: [
          { children: null },
          { children: null },
          { children: null },
          { children: null },
        ],
      },
      {
        hour: 12,
        slot: [
          { children: null },
          { children: null },
          { children: null },
          { children: null },
        ],
      },
    ],
  },
  {
    date: moment().add(1, "days").date(),
    day: moment().add(1, "days").format("dddd"),

    time: [
      {
        hour: 9,
        slot: [
          { children: null },
          { children: null },
          { children: null },
          { children: null },
        ],
      },
      {
        hour: 10,
        slot: [
          { children: null },
          { children: null },
          { children: null },
          { children: null },
        ],
      },
      {
        hour: 11,
        slot: [
          { children: null },
          { children: null },
          { children: null },
          { children: null },
        ],
      },
      {
        hour: 12,
        slot: [
          { children: null },
          { children: null },
          { children: null },
          { children: null },
        ],
      },
    ],
  },
  {
    date: moment().add(2, "days").date(),
    day: moment().add(2, "days").format("dddd"),

    time: [
      {
        hour: 9,
        slot: [
          { children: null },
          { children: null },
          { children: null },
          { children: null },
        ],
      },
      {
        hour: 10,
        slot: [
          { children: null },
          { children: null },
          { children: null },
          { children: null },
        ],
      },
      {
        hour: 11,
        slot: [
          { children: null },
          { children: null },
          { children: null },
          { children: null },
        ],
      },
      {
        hour: 12,
        slot: [
          { children: null },
          { children: null },
          { children: null },
          { children: null },
        ],
      },
    ],
  },
  {
    date: moment().add(3, "days").date(),
    day: moment().add(3, "days").format("dddd"),

    time: [
      {
        hour: 9,
        slot: [
          { children: null },
          { children: null },
          { children: null },
          { children: null },
        ],
      },
      {
        hour: 10,
        slot: [
          { children: null },
          { children: null },
          { children: null },
          { children: null },
        ],
      },
      {
        hour: 11,
        slot: [
          { children: null },
          { children: null },
          { children: null },
          { children: null },
        ],
      },
      {
        hour: 12,
        slot: [
          { children: null },
          { children: null },
          { children: null },
          { children: null },
        ],
      },
    ],
  },
  {
    date: moment().add(4, "days").date(),
    day: moment().add(4, "days").format("dddd"),
    time: [
      {
        hour: 9,
        slot: [
          { children: null },
          { children: null },
          { children: null },
          { children: null },
        ],
      },
      {
        hour: 10,
        slot: [
          { children: null },
          { children: null },
          { children: null },
          { children: null },
        ],
      },
      {
        hour: 11,
        slot: [
          { children: null },
          { children: null },
          { children: null },
          { children: null },
        ],
      },
      {
        hour: 12,
        slot: [
          { children: null },
          { children: null },
          { children: null },
          { children: null },
        ],
      },
    ],
  },
  {
    date: moment().add(5, "days").date(),
    day: moment().add(5, "days").format("dddd"),

    time: [
      {
        hour: 9,
        slot: [
          { children: null },
          { children: null },
          { children: null },
          { children: null },
        ],
      },
      {
        hour: 10,
        slot: [
          { children: null },
          { children: null },
          { children: null },
          { children: null },
        ],
      },
      {
        hour: 11,
        slot: [
          { children: null },
          { children: null },
          { children: null },
          { children: null },
        ],
      },
      {
        hour: 12,
        slot: [
          { children: null },
          { children: null },
          { children: null },
          { children: null },
        ],
      },
    ],
  },
  {
    date: moment().add(6, "days").date(),
    day: moment().add(6, "days").format("dddd"),
    time: [
      {
        hour: 9,
        slot: [
          { children: null },
          { children: null },
          { children: null },
          { children: null },
        ],
      },
      {
        hour: 10,
        slot: [
          { children: null },
          { children: null },
          { children: null },
          { children: null },
        ],
      },
      {
        hour: 11,
        slot: [
          { children: null },
          { children: null },
          { children: null },
          { children: null },
        ],
      },
      {
        hour: 12,
        slot: [
          { children: null },
          { children: null },
          { children: null },
          { children: null },
        ],
      },
    ],
  },
];

// Algorithm to fill Data in Model from Appointments Object
const fillData = () => {
  Appointments.forEach((appointment: IAppointment) => {
    modelData.forEach((data) => {
      if (data.date === appointment.date) {
        data.time.forEach((hours) => {
          if (hours.hour === appointment.time) {
            hours.slot[appointment.slot - 1].children = appointment;
          }
        });
      }
    });
  });
};

export const AppointmentContext = createContext(modelData);

//? Default Export
export default ({ children }: AppointmentContextProps) => {
  fillData();
  //? JSX Return
  return (
    <AppointmentContext.Provider value={modelData}>
      {children}
    </AppointmentContext.Provider>
  );
};
