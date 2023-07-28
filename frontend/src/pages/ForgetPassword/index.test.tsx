import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ForgotPasswordPage from ".";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();
const store = mockStore({user: {id: 1, emailId: "email", password: "password"}, token: "token"});
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe("ForgotPasswordPage", () => {
  test("renders AuthTemplate component with correct props", () => {
    render(
      <BrowserRouter>
      <Provider store={store}>
        <ForgotPasswordPage />
        </Provider>
      </BrowserRouter>
    );
    const authTemplateElement = screen.getByTestId("auth-template");
    expect(authTemplateElement).toBeInTheDocument();
    const forgotPasswordElement = screen.getByTestId("forgotPassword");
    expect(forgotPasswordElement).toBeInTheDocument();
    fireEvent.click(screen.getByText("Login"));
  });

  test("renders forgot password and button gets enabled on correct email", () => {
    mockedAxios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          emailId: "qwerty@gmail.com",
          password: "qwerty",
        },
      ],
    });
    render(
      <BrowserRouter>
      <Provider store={store}>
        <ForgotPasswordPage />
        </Provider>
      </BrowserRouter>
    );
    const inputs = screen.getByRole("textbox");
    fireEvent.change(inputs, { target: { value: "saicharan1@gmail.com" } });
    fireEvent.click(screen.getByRole("button"));
  });
});
