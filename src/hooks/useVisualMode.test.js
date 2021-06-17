import { renderHook, act } from "@testing-library/react-hooks";

import useVisualMode from "hooks/useVisualMode";

//Initial mode
const FIRST = 'FIRST'

test('useVisualMode should initialize with a default view', () => {
  const {result} = renderHook(()=> useVisualMode(FIRST))

  expect(result.current.mode).toBe(FIRST)
})