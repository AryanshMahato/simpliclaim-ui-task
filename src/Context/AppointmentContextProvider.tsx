import React, { createContext } from "react";

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

export const AppointmentContext = createContext(modelData);

//? Default Export
export default ({ children }: AppointmentContextProps) => {
  //? JSX Return
  return (
    <AppointmentContext.Provider value={modelData}>
      {children}
    </AppointmentContext.Provider>
  );
};
