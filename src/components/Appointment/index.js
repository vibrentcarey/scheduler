import { useVisualMode } from 'hooks/useVisualMode'
import React, { useState } from 'react'
import Empty from './Empty'
import Header from './Header'
import Show from './Show'
import Form from './Form'
import Status from './Status'
import Confirm from './Confirm'

import './styles.scss'


const EMPTY = 'EMPTY'
const SHOW = 'SHOW'
const CREATE = 'CREATE'
const SAVE = 'SAVE'
const DELETE = 'DELETE'
const CONFIRM = 'CONFIRM'

const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];

const Appointment = ({ id, time, interview, bookInterview }) => {
  //Destructure the properties from the function
  const { mode, transition, back, edit, cancel } = useVisualMode(interview ? SHOW : EMPTY)
  const [selectedInterviewer, setSelectedInterviewer] = useState(null)
  const [newInterview, setNewInterview] = useState(null)

  //Use the name an interviewer to book a new interview
  const save = (name, interviewer) => {
    if(name && interviewer){
    const newInterview = {
      student: name,
      interviewer
    };

    setNewInterview(newInterview)
    transition(SAVE);
    setTimeout(() => {
      transition(SHOW);
    }, 1000)
  } else {
    alert('Please fill in your name and select an interviewer')
  }
  }

  //Set the interviewer using the id
  const setInterviewer = (id) => {
    const chosenInterviewer = interviewers.filter(interviewer => {
      return interviewer.id === id
    })[0].name

    setSelectedInterviewer(chosenInterviewer)
  }
  //Delete an interview 
  const deleteInterview = () => {
    transition(CONFIRM)
  }

  const confirmDelete = () => {
    transition(DELETE);
    setNewInterview(null)
    setTimeout(() => {
      transition(EMPTY);
    }, 1000)
  }

  const resetForm = () => {
    setNewInterview(null)
    setSelectedInterviewer(null)
    back()
  }

  return (
    <article className="appointment">
      <Header time={time} />{mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SAVE && <Status message='Saving' />}
      {mode === DELETE && <Status message='Deleting' />}
      {mode === CONFIRM && <Confirm
        message='Are you sure you want to delete?'
        onCancel={cancel}
        onConfirm={confirmDelete}
      />}

      {mode === SHOW && <Show
        student={newInterview && newInterview.student}
        interviewer={newInterview && newInterview.interviewer}
        onDelete={deleteInterview}
        onEdit={edit}
      />
      }
      {mode === CREATE && <Form
        onSave={save}
        setInterviewer={setInterviewer}
        interviewers={interviewers}
        onCancel={back}
        selectedInterviewer={selectedInterviewer}
        name={newInterview && newInterview.student}
        resetForm={resetForm}
      />}
    </article>
  )
}

export default Appointment