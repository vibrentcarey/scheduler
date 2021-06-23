import React, { useState } from 'react'

import Button from 'components/Button'
import InterviewerList from 'components/InterviewerList'

const Form = ({ selectedInterviewer, name, interviewers, interviewer, onSave, onCancel, setInterviewer }) => {
  const [finalName, setFinalName] = useState(name || '')
  const [finalInterviewer, setFinalInterviewer] = useState(interviewer || null)

  const reset = () => {
    setFinalName('')
    setFinalInterviewer(null)
  }

  const cancel = () => {
    reset()
    onCancel()
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={finalName}
            onChange={(e) => setFinalName(e.target.value)}
          />
        </form>

        <InterviewerList 
        interviewers={interviewers} 
        value={interviewer} 
        setInterviewer={setInterviewer}
        selectedInterviewer={selectedInterviewer}
        />

      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={onSave}>Save</Button>
        </section>
      </section>
    </main>
  )
}

export default Form