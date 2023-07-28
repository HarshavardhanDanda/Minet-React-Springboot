import React from 'react'
import {
  render,
  screen,
  fireEvent,
  waitFor,
  getByText,
  getByLabelText,
} from '@testing-library/react'
import '@testing-library/jest-dom'
import DropDownComponent from '.'

it('should renders drop down component', async () => {
  const menuList = ['1H', '24H', '1W', '1M', '1Y', 'ALL']
  const fn = jest.fn()
  render(<DropDownComponent onChange={fn} menuList={menuList} width="77px" variant={'button'}/>)
  const dropDown = screen.getByTestId('dropDown')
  expect(dropDown).toBeInTheDocument()
  if (dropDown.firstChild) {
    fireEvent.keyDown(dropDown.firstChild, { key: 'ArrowDown' })
    await screen.findByText('1W')
    const ele = screen.getByText('1W')
    fireEvent.click(ele)
    expect(fn).toHaveBeenCalledTimes(1)
    expect(fn).toHaveBeenCalledWith('1W')
  }
})
it('should render drop down component and handle onChange event', async () => {
  const menuList = ['1H', '24H', '1W', '1M', '1Y', 'ALL']
  const fn = jest.fn()
  render(<DropDownComponent onChange={fn} menuList={menuList} width="77px" variant={'button'} />)
  const dropDown = screen.getByTestId('dropDown')
  expect(dropDown).toBeInTheDocument()

  if (dropDown.firstChild) {
    fireEvent.keyDown(dropDown.firstChild, { key: 'ArrowDown' })
    await screen.findByText('1W')
    const ele = screen.getByText('1W')
    fireEvent.click(ele)

    expect(fn).toHaveBeenCalledTimes(1)
    expect(fn).toHaveBeenCalledWith('1W')
  }
})