import React from "react";
import { screen, render, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FogotPassword from ".";
import axios from "axios";
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();
const store = mockStore({user: {id: 1, emailId: "email", password: "password"}, token: "token"});

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe("test for forgot password organism", () => {
  test("should render the forgot password", () => {
    mockedAxios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          emailId: "qwerty@gmail.com",
          password: "qwerty",
        },
      ],
    });
    render(<Provider store={store}><FogotPassword onButtonClick={() => {}} /></Provider>);
    const organism = screen.getByTestId("forgotPassword");
    expect(organism).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button"));
  });
  test("should render the forgot password with fireing event", () => {
    mockedAxios.get.mockRejectedValue(new Error("mocked"));
    render(<Provider store={store}><FogotPassword onButtonClick={() => {}} /></Provider>);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    act(() => {
      fireEvent.change(input, { target: { value: "saicharan@gmail.com" } });
    });
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  test("should render the forgot password and with given props", () => {
    mockedAxios.get.mockResolvedValue({ data: [] });
    const mockedFun = jest.fn(() => {});
    render(
      <Provider store={store}>
      <FogotPassword
        onButtonClick={mockedFun}
        onInput={mockedFun}
        onLinkClick={mockedFun}
      /></Provider>
    );
    expect(screen.getByText("Email")).toBeInTheDocument();
    const button = screen.getByRole("button");
    fireEvent.click(button);
  });
});
