import { useEffect, useState } from "react"

export const useVisualMode = (initial) => {
  const [mode, setMode] = useState(initial)
  const [history, setHistory] = useState([initial])
  //Transition to the new mode
  const transition = (newMode, replace = false) => {
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

  const cancel = () => {
   setMode(history[history.length - 2])
  }
  return { mode, transition, back, cancel }
}