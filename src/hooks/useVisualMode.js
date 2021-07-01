import { useState } from "react"

export const useVisualMode = (initial) => {
  const [mode, setMode] = useState(initial)
  const [history, setHistory] = useState([initial])

  //Transition to the new mode
  const transition = (newMode) => {
    setMode(newMode)
    setHistory(prev => [...prev, newMode])
  }

  const back = () => {
    if (history.length > 0) {
      setMode(history[0])
    } else {
      return
    }
  }

  const edit = () => {
    setMode(history[1])
  }

  const cancel = () => {
    setMode(history[history.length - 2])
    setHistory(prev => prev.filter((_, idx) => idx < history.length - 1))
  }


  return { mode, transition, back, edit, cancel }
}