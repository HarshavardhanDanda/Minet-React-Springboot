import React from "react";
import { render, screen } from "@testing-library/react";
import ResetPasswordPage from ".";
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import "@testing-library/jest-dom/extend-expect";
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

const mockStore = configureMockStore();
const store = mockStore({user: {id: 1, emailId: "email", password: "password"}, token: "token"});

describe("ResetPasswordPage", () => {
  test("renders AuthTemplate component with correct props", () => {
    jest
      .spyOn(require("react-router-dom"), "useParams")
      .mockReturnValue({ id: 1 });
    render(<Provider store={store}><ResetPasswordPage /></Provider>);
    const authTemplateElement = screen.getByTestId("auth-template");
    expect(authTemplateElement).toBeInTheDocument();
    const resetPasswordElement = screen.getByTestId("reset-password");
    expect(resetPasswordElement).toBeInTheDocument();
  });
});
