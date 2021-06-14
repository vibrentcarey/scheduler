const DayListItem = (props) => {
  return (
    <li>
      <h2>{props.name}</h2>
      <h3>{props.spots} Remaining</h3>
    </li>
  )
}

export default DayListItem