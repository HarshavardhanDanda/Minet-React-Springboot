import React from "react";
import ResetCodePage from ".";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));
describe("test for reset code page", () => {
  test("should render the resetcode page", () => {
    jest
      .spyOn(require("react-router-dom"), "useParams")
      .mockReturnValue({ id: 1 });
    render(
      <BrowserRouter>
        <ResetCodePage />
      </BrowserRouter>
    );
    const page = screen.getByTestId("auth-template");
    expect(page).toBeInTheDocument();
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 12345678 } });
    expect(screen.getByRole("button")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button"));
  });
  test("should render the resetcode page to login", () => {
    jest
      .spyOn(require("react-router-dom"), "useParams")
      .mockReturnValue({ id: 1 });
    render(
      <BrowserRouter>
        <ResetCodePage />
      </BrowserRouter>
    );
    const page = screen.getByTestId("auth-template");
    expect(page).toBeInTheDocument();
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 12345678 } });
    expect(screen.getByRole("button")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Login"));
  });
});
