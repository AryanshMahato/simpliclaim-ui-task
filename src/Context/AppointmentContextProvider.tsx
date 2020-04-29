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
        9: {
          slot: [
            { children: null },
            { children: null },
            { children: null },
            { children: null },
          ],
        },
      },
      {
        10: {
          slot: [
            { children: null },
            { children: null },
            { children: null },
            { children: null },
          ],
        },
      },
      {
        11: {
          slot: [
            { children: null },
            { children: null },
            { children: null },
            { children: null },
          ],
        },
      },
      {
        12: {
          slot: [
            { children: null },
            { children: null },
            { children: null },
            { children: null },
          ],
        },
      },
    ],
  },
  {
    date: 9,
    time: [
      {
        9: {
          slot: [
            { children: null },
            { children: null },
            { children: null },
            { children: null },
          ],
        },
      },
      {
        10: {
          slot: [
            { children: null },
            { children: null },
            { children: null },
            { children: null },
          ],
        },
      },
      {
        11: {
          slot: [
            { children: null },
            { children: null },
            { children: null },
            { children: null },
          ],
        },
      },
      {
        12: {
          slot: [
            { children: null },
            { children: null },
            { children: null },
            { children: null },
          ],
        },
      },
    ],
  },
  {
    date: 10,
    time: [
      {
        9: {
          slot: [
            { children: null },
            { children: null },
            { children: null },
            { children: null },
          ],
        },
      },
      {
        10: {
          slot: [
            { children: null },
            { children: null },
            { children: null },
            { children: null },
          ],
        },
      },
      {
        11: {
          slot: [
            { children: null },
            { children: null },
            { children: null },
            { children: null },
          ],
        },
      },
      {
        12: {
          slot: [
            { children: null },
            { children: null },
            { children: null },
            { children: null },
          ],
        },
      },
    ],
  },
  {
    date: 11,
    time: [
      {
        9: {
          slot: [
            { children: null },
            { children: null },
            { children: null },
            { children: null },
          ],
        },
      },
      {
        10: {
          slot: [
            { children: null },
            { children: null },
            { children: null },
            { children: null },
          ],
        },
      },
      {
        11: {
          slot: [
            { children: null },
            { children: null },
            { children: null },
            { children: null },
          ],
        },
      },
      {
        12: {
          slot: [
            { children: null },
            { children: null },
            { children: null },
            { children: null },
          ],
        },
      },
    ],
  },
  {
    date: 12,
    time: [
      {
        9: {
          slot: [
            { children: null },
            { children: null },
            { children: null },
            { children: null },
          ],
        },
      },
      {
        10: {
          slot: [
            { children: null },
            { children: null },
            { children: null },
            { children: null },
          ],
        },
      },
      {
        11: {
          slot: [
            { children: null },
            { children: null },
            { children: null },
            { children: null },
          ],
        },
      },
      {
        12: {
          slot: [
            { children: null },
            { children: null },
            { children: null },
            { children: null },
          ],
        },
      },
    ],
  },
  {
    date: 13,
    time: [
      {
        9: {
          slot: [
            { children: null },
            { children: null },
            { children: null },
            { children: null },
          ],
        },
      },
      {
        10: {
          slot: [
            { children: null },
            { children: null },
            { children: null },
            { children: null },
          ],
        },
      },
      {
        11: {
          slot: [
            { children: null },
            { children: null },
            { children: null },
            { children: null },
          ],
        },
      },
      {
        12: {
          slot: [
            { children: null },
            { children: null },
            { children: null },
            { children: null },
          ],
        },
      },
    ],
  },
  {
    date: 14,
    time: [
      {
        9: {
          slot: [
            { children: null },
            { children: null },
            { children: null },
            { children: null },
          ],
        },
      },
      {
        10: {
          slot: [
            { children: null },
            { children: null },
            { children: null },
            { children: null },
          ],
        },
      },
      {
        11: {
          slot: [
            { children: null },
            { children: null },
            { children: null },
            { children: null },
          ],
        },
      },
      {
        12: {
          slot: [
            { children: null },
            { children: null },
            { children: null },
            { children: null },
          ],
        },
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
