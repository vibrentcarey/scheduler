import { useEffect, useState } from "react"

export const useVisualMode = (initial) => {
  const [mode, setMode] = useState(initial)
  const [history, setHistory] = useState([])
  //Transition to the new mode
  const transition = (newMode, replace = false) => {
    setMode(newMode)
  }
useEffect(()=> {
  setHistory(prev => [...prev, mode])

}, [mode])

  const back = () => {
    if (history.length > 0) {
      setHistory(prev => console.log(prev))
      setMode(history[history.length - 1])
    } else {
      return
    }
  }
  return { mode, transition, back }
}