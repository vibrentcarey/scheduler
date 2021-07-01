import React, { useState } from "react";

import "components/Application.scss";
import Appointment from "./Appointment";

import { appointments } from "../data/data";

export default function Application() {
  const [localAppointments, setLocalAppointments] = useState(appointments)

  function bookInterview(id, interview) {
    //Create a new appointment with the id and interview
    const appointment = {
      ...localAppointments[id],
      interview: { ...interview }
    };

    //Edit the appointments with our new appointment
    const appointments = {
      ...localAppointments,
      [id]: appointment
    };

    setLocalAppointments(appointments)
  }


  const schedule = appointments.map(appointment => {
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={appointment.interview}
        bookInterview={bookInterview}
      />
    )
  })

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {schedule}
        <Appointment id='last' time='5pm' />
      </section>
    </main>
  );
}
