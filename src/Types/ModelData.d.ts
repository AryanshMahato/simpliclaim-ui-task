import IAppointment from "./Appointments";

interface ISlot {
  children: IAppointment | null;
}
interface IModelTime {
  hour: number;
  slot: Array<ISlot>;
}

interface IModelData {
  date: number;
  day: string;
  time: Array<IModelTime>;
}

export { IModelData, ISlot, IModelTime };
