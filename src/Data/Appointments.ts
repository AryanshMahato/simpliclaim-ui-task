import CreditCard from "../Assets/Appointments/credit-card.svg";
import Doctor from "../Assets/Appointments/doctor.svg";
import CheckBox from "../Assets/Appointments/checkbox-filled.svg";
import Calender from "../Assets/Appointments/calender.svg";
import moment from "moment";

export default [
  {
    badge: CreditCard,
    name: "Ashley Simons",
    topic: "Cardiac Surgery",
    badgeColor: "#df7833",
    date: moment().date(),
    time: 9,
    slot: 1,
  },
  {
    badge: Doctor,
    name: "Andrew Peters Veelo",
    topic: "Cardiac Surgery",
    badgeColor: "#03ae73",
    date: moment().date(),
    time: 9,
    slot: 2,
  },
  {
    badge: CheckBox,
    name: "Ashley Bhooravaala",
    topic: "Cardiac Surgery",
    badgeColor: "#03ae73",
    date: moment().date(),
    time: 9,
    slot: 4,
  },
  {
    badge: Calender,
    name: "Peter Meyers",
    topic: "Cardiac Surgery",
    badgeColor: "#c24040",
    date: moment().date(),
    time: 9,
    slot: 3,
  },
  {
    badge: CheckBox,
    name: "Ashley Bhooravaala",
    topic: "Cardiac Surgery",
    badgeColor: "#03ae73",
    date: moment().date(),
    time: 10,
    slot: 2,
  },
  {
    badge: Calender,
    name: "Peter Meyers",
    topic: "Cardiac Surgery",
    badgeColor: "#c24040",
    date: moment().date(),
    time: 10,
    slot: 3,
  },
  {
    badge: Doctor,
    name: "Andrew Peters Veelo",
    topic: "Cardiac Surgery",
    badgeColor: "#03ae73",
    date: moment().add(1, "days").date(),
    time: 9,
    slot: 2,
  },
  {
    badge: CheckBox,
    name: "Ashley Bhooravaala",
    topic: "Cardiac Surgery",
    badgeColor: "#03ae73",
    date: moment().add(1, "days").date(),
    time: 9,
    slot: 4,
  },
];
