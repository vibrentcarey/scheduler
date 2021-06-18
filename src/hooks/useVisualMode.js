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
      setHistory(prev => prev.filter((_,idx) => idx < prev.length - 1))
      setMode(history[0])
    } else {
      return
    }
  }
  return { mode, transition, back }
}