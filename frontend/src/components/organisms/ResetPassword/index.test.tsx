import React from "react";
import "jest";
import { render, screen, fireEvent } from "@testing-library/react";
import ResetPassword from "./index";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

const mockStore = configureMockStore();
const store = mockStore({user: {id: 1, emailId: "email", password: "password"}, token: "token"});

it("should render input fields", () => {
  jest
    .spyOn(require("react-router-dom"), "useParams")
    .mockReturnValue({ id: 1 });
  render(
    <BrowserRouter>
    <Provider store={store}>
      <ResetPassword onSubmit={() => {}} />
      </Provider>
    </BrowserRouter>
  );
  expect(screen.getByText("Enter Password")).toBeVisible();
  expect(screen.getAllByText("Reset Password")[0]).toBeVisible();
  expect(screen.getByText("Re-Enter Password")).toBeVisible();
  const inputs = screen.getAllByPlaceholderText("Enter Password");
  const password = inputs[0] as HTMLInputElement;
  expect(password).toHaveAttribute("type", "password");
  expect(password).toHaveAttribute("placeholder", "Enter Password");
  fireEvent.change(password, { target: { value: "Values@123" } });
  expect(password.value).toBe("Values@123");

  const confirmPassword = inputs[1] as HTMLInputElement;
  expect(confirmPassword).toHaveAttribute("type", "text");
  expect(confirmPassword).toHaveAttribute("placeholder", "Enter Password");
  fireEvent.change(confirmPassword, { target: { value: "Values@123" } });
  expect(confirmPassword.value).toBe("Values@123");
});

it("should render helper text", () => {
  jest
    .spyOn(require("react-router-dom"), "useParams")
    .mockReturnValue({ id: 1 });
  render(
    <BrowserRouter>
    <Provider store={store}>
      <ResetPassword onSubmit={() => {}} />
      </Provider>
    </BrowserRouter>
  );
  expect(
    screen.getByText(
      "A min of 8 charaters with atleast 1 special character and number included"
    )
  ).toBeVisible();
});

it("should render reset password button", () => {
  jest
    .spyOn(require("react-router-dom"), "useParams")
    .mockReturnValue({ id: 1 });
  render(
    <BrowserRouter>
    <Provider store={store}>
      <ResetPassword onSubmit={() => {}} />
      </Provider>
    </BrowserRouter>
  );
  const inputs = screen.getAllByPlaceholderText("Enter Password");
  const password = inputs[0] as HTMLInputElement;
  fireEvent.change(password, { target: { value: "Values@123" } });
  expect(password.value).toBe("Values@123");

  const confirmPassword = inputs[1] as HTMLInputElement;
  fireEvent.change(confirmPassword, { target: { value: "Values@123" } });
  expect(confirmPassword.value).toBe("Values@123");
  const button = screen.getByRole("button", { name: "Reset Password" });

  fireEvent.click(button); // Simulate button click

  expect(button).toHaveAttribute("type", "button");
});

it("eye icon should be functional", () => {
  jest
    .spyOn(require("react-router-dom"), "useParams")
    .mockReturnValue({ id: 1 });
  render(
    <BrowserRouter>
    <Provider store={store}>
      <ResetPassword onSubmit={() => {}} />
      </Provider>
    </BrowserRouter>
  );
  const eyeIcon1 = screen.getAllByRole("img")[0];
  fireEvent.click(eyeIcon1);
  expect(eyeIcon1).toHaveAttribute("alt", "Eye Icon");
  expect(eyeIcon1).toHaveAttribute("class", "hoverable-image");
  expect(eyeIcon1).toHaveAttribute("height", "19.41px");
  expect(eyeIcon1).toHaveAttribute("width", "20px");

  const eyeIcon2 = screen.getAllByRole("img")[1];
  fireEvent.click(eyeIcon2);
  expect(eyeIcon2).toHaveAttribute("class", "hoverable-image");
  expect(eyeIcon2).toHaveAttribute("height", "19.41px");
  expect(eyeIcon2).toHaveAttribute("width", "20px");
});
