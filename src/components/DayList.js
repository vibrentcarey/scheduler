import React from 'react'
import DayListItem from './DayListItem'

const DayList = (props) => {
  const dayListItems = props.days.map(day => {
    return (
      <DayListItem
        key={props.id}
        name={day.name}
        spots={day.spots}
        selected={day.name === props.day}
        setDay={props.setDay}
      />
    )
  })
  return (
    <ul>
      {dayListItems}
    </ul>
  )
}
export default DayList