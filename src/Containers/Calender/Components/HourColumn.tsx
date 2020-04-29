import React from "react";
import SlotColumn from "./SlotColumn";
import { IModelTime } from "../../../Types/ModelData";

//? Props
interface HourProps {
  hours: IModelTime;
}

//? Default Export
export default ({ hours }: HourProps) => {
  //? JSX Return
  return (
    <div>
      {hours.slot.map((singleSlot: any) => (
        <SlotColumn slots={singleSlot} />
      ))}
    </div>
  );
};

// Manages all hours present Context
