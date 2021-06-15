import { props } from 'bluebird'
import React from 'react'
import Empty from './Empty'
import Header from './Header'
import Show from './Show'
import './styles.scss'

const Appointment = ({ time, interview }) => {
  return (
    <article className="appointment">
      <Header time={time} />
      {interview ? <Show /> : <Empty />}
    </article>
  )
}

export default Appointment