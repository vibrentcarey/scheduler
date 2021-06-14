import React from 'react';

import 'components/InterviewListItem.scss'

const InterviewListItem = (props) => {
  return (
    <li className="interviewers__item">
      <img
        className="interviewers__item-image"
        src="../../public/images/joseph.png"
        alt="Joseph Goncalez"
      />
    </li>
  )
}

export default InterviewListItem
