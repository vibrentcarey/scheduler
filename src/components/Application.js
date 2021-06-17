import React, { useEffect, useState } from "react";

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";
import { getAppointmentsForDay } from "helpers/selectors";

import { days, appointments } from "../data/data";
import useVisualMode from "hooks/useVisualMode";

export default function Application() {
  const [state, setState] = useState({
    day: 'Monday',
    days,
    appointments: {}
  })


  const setDay = day => setState({ ...state, day })

  useEffect(() => {
    setState(prev => ({ ...prev, days }))
  }, [state.days])

  const dailyAppointments = getAppointmentsForDay(state, state.day)

  const schedule = appointments.map(appointment => {
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={appointment.interview}
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
        <nav className="sidebar__menu">
          <DayList days={state.days} day={state.day} setDay={setDay} />
        </nav>
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
