
import { getAppointmentsForDay } from "helpers/selectors";

const state = {
  days: [
    {
      id: 1,
      name: "Monday",
      appointments: [1, 2, 3]
    },
    {
      id: 2,
      name: "Tuesday",
      appointments: [4, 5]
    }
  ],
  appointments: {
    "1": { id: 1, time: "12pm", interview: null },
    "2": { id: 2, time: "1pm", interview: null },
    "3": {
      id: 3,
      time: "2pm",
      interview: { student: "Archie Cohen", interviewer: 2 }
    },
    "4": { id: 4, time: "3pm", interview: null },
    "5": {
      id: 5,
      time: "4pm",
      interview: { student: "Chad Takahashi", interviewer: 2 }
    }
  }
};

test("getAppointmentsForDay returns an array"), () => {
  const result = getAppointmentsForDay(state, 'Monday');
  expect(Array.isArray(result)).toBe(true)
}

test("getAppointmentsForDay returns an array with the correct length", () => {
  const result = getAppointmentsForDay(state, "Monday")
  expect(result.length).toEqual(3)
})

test("getAppointmentsForDay returns an array with the correct appointments", () => {
  const [first, second] = getAppointmentsForDay(state, "Tuesday")
  expect(first).toEqual(state.appointments['4'])
  expect(second).toEqual(state.appointments['5'])
})

test('getAppointmentsForDay returns an empty array when days is empty', () => {
  const result = getAppointmentsForDay({ days: [] }, "Tuesday")
  expect(result.length).toEqual(0)
})

test('getAppointmentsForDay returns an empty array when day is not found', () => {
  const result = getAppointmentsForDay(state, "Wednesday")
  expect(result.length).toEqual(0)
})