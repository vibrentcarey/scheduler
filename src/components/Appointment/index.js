import { useVisualMode } from 'hooks/useVisualMode'
import React, { useState } from 'react'
import Empty from './Empty'
import Header from './Header'
import Show from './Show'
import Form from './Form'
import './styles.scss'


const EMPTY = 'EMPTY'
const SHOW = 'SHOW'
const CREATE = 'CREATE'

const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];

const Appointment = ({ id, time, interview, bookInterview }) => {
  //Destructure the properties from the function
  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY)
  const [selectedInterviewer, setSelectedInterviewer] = useState(null)
  const [newInterview, setNewInterview] = useState(null)

  function save(name, interviewer) {
    const newInterview = {
      student: name,
      interviewer
    };

    setNewInterview(newInterview)
    transition(SHOW);

    // bookInterview(id, newInterview)
    // if (newInterview) {
    //   transition(SHOW);
    // }
  }

  const setInterviewer = (id) => {
    const chosenInterviewer = interviewers.filter( interviewer => {
      return interviewer.id === id
    })[0].name

    setSelectedInterviewer(chosenInterviewer)
  }

  return (
    <article className="appointment">
      <Header time={time} />{mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && <Show
        student={newInterview && newInterview.student}
        interviewer={newInterview && newInterview.interviewer}
      />
      }
      {mode === CREATE && <Form
        onSave={save}
        setInterviewer={setInterviewer}
        interviewers={interviewers}
        onCancel={back} 
        selectedInterviewer={selectedInterviewer}
        />}
    </article>
  )
}

export default Appointment