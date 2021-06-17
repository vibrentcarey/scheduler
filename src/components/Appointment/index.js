import { useVisualMode } from 'hooks/useVisualMode'
import React from 'react'
import Empty from './Empty'
import Header from './Header'
import Show from './Show'
import Form from './Form'
import './styles.scss'


const EMPTY = 'EMPTY'
const SHOW = 'SHOW'
const CREATE = 'CREATE'

const Appointment = ({ id, time, interview }) => {
  //Destructure the properties from the function
  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY)
  return (
    <article className="appointment">
      <Header time={time} />{mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && <Show
        student={interview.student}
        interviewer={interview.interviewer.name}
      />
      }
      {mode === CREATE && <Form interviewers={[]} onCancel={back}/>}
    </article>
  )
}

export default Appointment