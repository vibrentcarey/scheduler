import React from 'react'

import 'components/InterviewerList.scss'

const InterviewerList = (props) => {
  return (
    <section className='interviewers'>
      <h4 className="interviewers__header text--light">InterViewer</h4>
      <ul className="interviewers__list"></ul>
    </section>
  )
}

export default InterviewerList