import React from "react";
import 'components/DayListItem.scss'

let classNames = require('classnames')

const DayListItem = (props) => {
  const dayItemClass = classNames('day-list__item', {
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.full
  })

  const spotsText = props.spots === 1 ?
    `${props.spots} spot remaining` :
    `${props.spots} spots remaining`

  return (
    <li className={dayItemClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{spotsText}</h3>
    </li>
  )
}

export default DayListItem