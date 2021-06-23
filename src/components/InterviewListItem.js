import React from 'react';

import 'components/InterviewListItem.scss'

const InterviewListItem = (props) => {
  return (
    <li className="interviewers__item" onClick={() => props.setInterviewer(props.id)}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  )
}

export default InterviewListItem
