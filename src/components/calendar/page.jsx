// Calendar.js
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Setup the localizer by providing the moment instance to the correct localizer.
const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Meeting",
    start: new Date(),
    end: new Date(moment().add(1, "hours").toDate()),
    allDay: false,
  },
  {
    title: "Lunch Break",
    start: new Date(moment().add(1, "days").startOf("day").add(12, "hours").toDate()),
    end: new Date(moment().add(1, "days").startOf("day").add(13, "hours").toDate()),
    allDay: false,
  },
];

function MyCalendar() {
  const [myEvents, setMyEvents] = useState(events);

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt("New Event Name");
    if (title) {
      setMyEvents((prev) => [...prev, { start, end, title }]);
    }
  };

  const handleSelectEvent = (event) => {
    alert(event.title);
  };

  return (
    <div style={{ height: "500px", margin: "50px" }}>
      <Calendar
        localizer={localizer}
        events={myEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }}
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        defaultView="month"
        views={["month", "week", "day", "agenda"]}
      />
    </div>
  );
}

export default MyCalendar;