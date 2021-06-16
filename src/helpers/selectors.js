export const getAppointmentsForDay = (state, day) => {
  if (state.days.length === 0) {
    return []
  }
//Search for matching days
  const dayFound = state.days.filter(aDay => {
    return aDay.name === day
  })
//If no matches return empty array
  if (dayFound.length === 0) {
    return []
  }

  //Filter the appointments by day 
  const appointments = state.days.filter(theDay => {
    return theDay.name === day
  })[0].appointments

  //Use the appointment numbers to select the corresponding object
  let appointmentsForDay = []
  for (const appointment of appointments) {
    appointmentsForDay.push(state.appointments[appointment])
  }

  return appointmentsForDay
}