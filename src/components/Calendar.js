import React from "react";
import AllPlants from "./AllPlants";
import Header from "./Header";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import events from "../db/data";
import "../main.scss";

export default function Calendar() {
  return (
    <>
      <Header />
      <h1 className="calendar-title">Watering Schedule</h1>
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
