import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextFieldWithLabel from ".";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme";

describe("tests for the input with label component", () => {
  test("should render the label and the text field", () => {
    render(
      <ThemeProvider theme={theme}>
        <TextFieldWithLabel label="Email" placeholder="email" />
      </ThemeProvider>
    );
    const textElement = screen.getByText(/email/i);
    expect(textElement).toBeInTheDocument();
    const inputField = screen.getByRole("textbox");
    expect(inputField).toBeInTheDocument();
  });
  test("should fire event on changing input", () => {
    const mockedFun = jest.fn(() => {});
    render(
      <ThemeProvider theme={theme}>
        <TextFieldWithLabel
          label="Email"
          placeholder="email"
          onChange={mockedFun}
        />
      </ThemeProvider>
    );
    const inputField = screen.getByRole("textbox");
    expect(inputField).toBeInTheDocument();
    fireEvent.change(inputField, { target: { value: "hello" } });
    expect(mockedFun).toBeCalled();
  });
});
