import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextField from ".";
import "jest";

describe("to test the text field atom", () => {
  it("should render the textfield atom", () => {
    render(<TextField />);
    const ele = screen.getByRole("textbox");
    expect(ele).toBeInTheDocument();
  });
  it("should fire event on changing the value", () => {
    const mockedChange = jest.fn(() => {});
    render(<TextField onChange={mockedChange} />);
    const ele = screen.getByRole("textbox");
    fireEvent.change(ele, { target: { value: "hello" } });
    expect(ele).toBeInTheDocument();
    expect(mockedChange).toBeCalled();
  });
});
