import React, { useState } from 'react'

import Button from 'components/Button'
import InterviewerList from 'components/InterviewerList'

const Form = ({ resetForm, selectedInterviewer, name, interviewers, interviewer, onSave, onCancel, setInterviewer }) => {
  const [studentName, setStudentName] = useState(name || '')
  const [finalInterviewer, setFinalInterviewer] = useState(interviewer || null)

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
        </form>

        <InterviewerList 
        interviewers={interviewers} 
        value={finalInterviewer} 
        setInterviewer={setInterviewer}
        selectedInterviewer={selectedInterviewer}
        />

      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={resetForm}>Cancel</Button>
          <Button confirm onClick={() => onSave(studentName, selectedInterviewer)}>Save</Button>
        </section>
      </section>
    </main>
  )
}

export default Form