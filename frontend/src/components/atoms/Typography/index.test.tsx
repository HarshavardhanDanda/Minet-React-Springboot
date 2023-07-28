import { render, screen } from "@testing-library/react"
import React from "react"
import TypographyComponent from './index'
import 'jest'
import '@testing-library/jest-dom'

describe("TypographyComponent",()=>{
it('should render Typography', ()=>{
    render(<TypographyComponent>Hello</TypographyComponent>)
    const typo = screen.getByText('Hello')
    expect(typo).toBeInTheDocument()
})
});