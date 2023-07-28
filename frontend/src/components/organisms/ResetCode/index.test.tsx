import React from "react";
import ResetCode from ".";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

describe("test for the reset code organism", () => {
  test("should render the reset code", () => {
    const mockFun = jest.fn(() => {});
    render(<ResetCode onButtonClick={mockFun} onLinkClick={mockFun} />);
    const organism = screen.getByTestId("reset-code");
    expect(organism).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeDisabled();
    const textField = screen.getByRole("textbox");
    act(() => {
      fireEvent.change(textField, { target: { value: "12345678" } });
    });
    expect(screen.getByRole("button")).toBeEnabled();
  });
});
