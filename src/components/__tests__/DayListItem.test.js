import React from 'react'

import { render, cleanup } from '@testing-library/react'
import DayListItem from 'components/DayListItem'

afterEach(cleanup)

it('renders without crashing', () => {
  render(<DayListItem />)
})

it("renders '0 spots remaining' when there are 0 spots", () => {
  const { getByText } = render(<DayListItem name="Monday" spots={0} />);
  expect(getByText("0 spots remaining")).toBeInTheDocument();
})

it("renders '1 spot remaining' when there is 1 spot", () => {
  const { getByText } = render(<DayListItem name="Monday" spots={1} />);
  expect(getByText("1 spot remaining")).toBeInTheDocument()
})

it("renders '2 spot remaining' when there is 1 spot", () => {
  const { getByText } = render(<DayListItem name="Monday" spots={2} />);
  expect(getByText("2 spots remaining")).toBeInTheDocument()
})