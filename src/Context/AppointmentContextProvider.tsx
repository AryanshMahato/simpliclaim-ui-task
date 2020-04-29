import React, { createContext } from "react";
import Appointments from "../Data/Appointments";
import IAppointment from "../Types/Appointments";
import { IModelData } from "../Types/ModelData";

//? Props
interface AppointmentContextProps {
  children: React.ReactNode;
}

// Empty sets to give structure to the calender
const modelData: Array<IModelData> = [
  {
    date: 8,
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
    date: 9,
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
    date: 10,
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
    date: 11,
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
    date: 12,
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
    date: 13,
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
    date: 14,
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
