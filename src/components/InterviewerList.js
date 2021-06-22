import React from 'react'

import 'components/InterviewerList.scss'
import InterviewListItem from './InterviewListItem';
import { props } from 'bluebird';

const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];


const InterviewerList = ({setInterviewer}) => {
  const interviewerList = interviewers.map(interviewer => {
    return (
      <InterviewListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.name === props.interviewer}
        // setInterviewer={setInterviewer(interviewer.id)}
      />
    )
  })
  return (
    <section className='interviewers'>
      <h4 className="interviewers__header text--light">InterViewer</h4>
      <ul className="interviewers__list">{interviewerList}</ul>
    </section>
  )
}

export default InterviewerList