import AllPlants from "./AllPlants";
import Header from "./Header";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "../main.scss";

let events = [
  {
    title: "Fiddle Leaf Fig",
    allDay: true,
    daysOfWeek: [1],
    startRecur: "2019-12-16",
    endRecur: "2020-03-10",
    color: "#339966"
  },
  {
    title: "Bird's Nest Fern",
    allDay: true,
    daysOfWeek: [1, 4],
    startRecur: "2019-12-16",
    endRecur: "2020-03-13",
    color: "#339966"
  },
  {
    title: "Croton",
    allDay: true,
    daysOfWeek: [1],
    startRecur: "2019-12-16",
    endRecur: "2020-03-10",
    color: "#339966"
  },
  {
    title: "Bell Pepper Plant",
    allDay: true,
    daysOfWeek: [1, 4],
    startRecur: "2019-12-16",
    endRecur: "2020-03-13",
    color: "#339966"
  },
  {
    title: "Strawberry Plant",
    allDay: true,
    daysOfWeek: [1, 4],
    startRecur: "2019-12-16",
    endRecur: "2020-03-13",
    color: "#339966"
  },
  {
    title: "Spider Plant",
    allDay: true,
    daysOfWeek: [1],
    startRecur: "2019-12-16",
    endRecur: "2020-03-10",
    color: "#339966"
  },
  {
    title: "Wavy Fern",
    allDay: true,
    daysOfWeek: [1, 3, 5],
    startRecur: "2019-12-16",
    endRecur: "2020-03-14",
    color: "#339966"
  }
];

export default class DemoApp extends React.Component {
  render() {
    return (
      <>
        <Header />
        <h1 className="calendar-title">Schedule</h1>
        <div className="calendar-container"></div>
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin]}
          weekends={false}
          events={events}
        />

        <AllPlants />
      </>
    );
  }
}
