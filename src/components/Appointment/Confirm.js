import React from 'react'
import Button from 'components/Button'

const Confirm = ({ message, onConfirm, onCancel }) => {
  return (
    <main className="appointment__card appointment__card--confirm">
      <h1 className="text--semi-bold">{message}</h1>
      <section className="appointment__actions">
        <Button danger onClick={onConfirm}>Cancel</Button>
        <Button danger onClick={onCancel}>Confirm</Button>
      </section>
    </main>
  )
}

export default Confirm