import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SignUp from "./index";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { CreateDefaultToken } from "../../../store/JWT/tokens";

// import mockStore from "../../../mocks/mockStore/store";
import configureMockStore from 'redux-mock-store';
import axios from "axios";
import { GetJWTToken } from "../../../services/token";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const store = configureMockStore();
const mockStore = store({user: {id: 1, emailId: "email", password: "password"}, token: "token"});

jest.mock('../../../services/token', () => ({
  GetJWTToken: jest.fn().mockResolvedValue({ data: { token: 'mocked-token' } })
}));

describe("SignUp", () => {
  it("renders SignUp component", () => {
    mockedAxios.get.mockResolvedValue({ data: [] });
    mockedAxios.post.mockResolvedValue({});
    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>
      </Provider>
    );

    const signUpElement = screen.getByText("Signup with Minet");
    expect(signUpElement).toBeInTheDocument();
  });

  it("validates form fields and displays error messages", () => {
    mockedAxios.get.mockResolvedValue({ data: [] });
    mockedAxios.post.mockResolvedValue({});
    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>
      </Provider>
    );

    const nameInput = screen.getByPlaceholderText("Eg: John Doe");
    const emailInput = screen.getByPlaceholderText("you@company.com");
    const passwordInput = screen.getByPlaceholderText("Create Password");
    fireEvent.change(nameInput, { target: { value: "name" } });
    fireEvent.change(emailInput, { target: { value: "invalid_email" } });
    fireEvent.change(passwordInput, { target: { value: "invalid_password" } });
    fireEvent.click(screen.getByRole("button"));

    fireEvent.click(screen.getAllByRole("img")[0]);

    fireEvent.click(screen.getByText(/login/i));

    expect(screen.getByText("Already have an account?")).toBeInTheDocument();
    expect(
      screen.getByText(
        "A min of 8 charaters with atleast 1 special character and number included"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Google")).toBeInTheDocument();
    expect(screen.getByText("Facebook")).toBeInTheDocument();
    expect(screen.getByText("Microsoft")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });
  test("should fire the text field events", () => {
    mockedAxios.get.mockResolvedValue({ data: [] });
    mockedAxios.post.mockResolvedValue({});
    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>
      </Provider>
    );

    const nameInput = screen.getByPlaceholderText("Eg: John Doe");
    const emailInput = screen.getByPlaceholderText("you@company.com");
    const passwordInput = screen.getByPlaceholderText("Create Password");
    fireEvent.change(nameInput, { target: { value: "Jhon doe" } });
    fireEvent.change(emailInput, { target: { value: "JohnDoe@gmail.com" } });
    fireEvent.change(passwordInput, {
      target: { value: "JhonDoe@password.com1" },
    });
    fireEvent.click(screen.getByRole("button"));
  });
  test("should fire the text field events with existig users", () => {
    mockedAxios.get.mockResolvedValue({
      data: [{ id: 1, email: "jhon@gmail.com" }],
    });
    mockedAxios.post.mockResolvedValue({});
    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>
      </Provider>
    );

    const nameInput = screen.getByPlaceholderText("Eg: John Doe");
    const emailInput = screen.getByPlaceholderText("you@company.com");
    const passwordInput = screen.getByPlaceholderText("Create Password");
    fireEvent.change(nameInput, { target: { value: "Jhon doe" } });
    fireEvent.change(emailInput, { target: { value: "JohnDoe@gmail.com" } });
    fireEvent.change(passwordInput, {
      target: { value: "JhonDoe@password.com1" },
    });
    fireEvent.click(screen.getByRole("button"));
  });
  test("should fire the text field events with existig users", () => {
    mockedAxios.get.mockResolvedValueOnce({ data: [] }).mockResolvedValueOnce({
      data: [{ id: 1, email: "jhon@gmail.com" }],
    });
    mockedAxios.post.mockResolvedValue({});
    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>
      </Provider>
    );

    const nameInput = screen.getByPlaceholderText("Eg: John Doe");
    const emailInput = screen.getByPlaceholderText("you@company.com");
    const passwordInput = screen.getByPlaceholderText("Create Password");
    fireEvent.change(nameInput, { target: { value: "Jhon doe" } });
    fireEvent.change(emailInput, { target: { value: "JohnDoe@gmail.com" } });
    fireEvent.change(passwordInput, {
      target: { value: "JhonDoe@password.com1" },
    });
    fireEvent.click(screen.getByRole("button"));
  });
});
