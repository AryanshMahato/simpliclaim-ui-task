import React, { createContext } from "react";
import Appointments from "../Data/Appointments";

//? Props
interface AppointmentContextProps {
  children: React.ReactNode;
}

const modelData = [
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

const fillData = () => {
  Appointments.forEach((appointment: any) => {
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
