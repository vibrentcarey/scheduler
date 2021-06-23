import React from 'react'

import 'components/InterviewerList.scss'
import InterviewListItem from './InterviewListItem';

const InterviewerList = ({ interviewers, selectedInterviewer, setInterviewer }) => {
  const interviewerList = interviewers.map(interviewer => {
    return (
      <InterviewListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.name === selectedInterviewer}
        setInterviewer={() => setInterviewer(interviewer.id)}
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