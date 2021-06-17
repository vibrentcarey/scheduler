import { useState } from "react"

export default useVisualMode = (initial) => {
  const [mode, setMode] = useState(initial)
  const [history, setHistory] = useState(initial)
  //Transition to the new mode
  const transition = (newMode, replace = false) => {
    setMode(newMode)
  }

  const back = () => {
    if (history.length > 0) {
      setHistory(prev => prev.pop())
      setMode(history[history.length - 1])
    } else {
      return
    }
  }
  return { mode, transition, back }
}