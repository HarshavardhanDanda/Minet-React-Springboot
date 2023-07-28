import React from 'react'
import 'jest'
import { fireEvent, render, screen } from '@testing-library/react'
import TimeLineTabs from './index'

it('Should check tabs', () => {
  render(<TimeLineTabs typevariant='Dashboard' />)

  const element = screen.getByTestId('tabs')
  expect(element).toBeDefined()
})

it('Should check selected tab', () => {
  render(<TimeLineTabs typevariant="Detail" />)

  const element = screen.getByTestId('tab-1H')
  expect(element).toBeDefined()
  fireEvent.click(element)
  expect(element).toBeDefined()
})

it('Should check onselect function', () => {
  render(<TimeLineTabs typevariant="Detail" onSelectTab={()=>{}} />)

  const element = screen.getByTestId('tab-1H')
  expect(element).toBeDefined()
  fireEvent.click(element)
  expect(element).toBeDefined()
})