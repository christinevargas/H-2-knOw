import AllPlants from "./AllPlants";
import Header from "./Header";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import events from "../db/data";
import "../main.scss";

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
