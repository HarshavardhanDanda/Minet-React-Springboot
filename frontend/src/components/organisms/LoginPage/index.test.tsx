import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import Login from "./index";
import "@testing-library/jest-dom/extend-expect";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import mockStore from "../../../mocks/mockStore/store";
import { API_GATEWAY_URL } from "../../../constants";

describe("Login", () => {
  const mock = new MockAdapter(axios);

  beforeEach(() => {
    mock.reset(); // Reset the mock adapter before each test
  });

  it("should render the login form correctly", () => {
    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText("Forgot Password")).toBeInTheDocument();
    expect(screen.getByText("Sign In")).toBeInTheDocument();
    expect(screen.getByText("Or")).toBeInTheDocument();
    expect(screen.getByText("Google")).toBeInTheDocument();
    expect(screen.getByText("Facebook")).toBeInTheDocument();
    expect(screen.getByText("Microsoft")).toBeInTheDocument();
    expect(screen.getByText("Don't have an account?")).toBeInTheDocument();
    expect(screen.getByText("Signup")).toBeInTheDocument();
  });

  it("should handle email and password changes", () => {
    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    const emailInput = screen.getByPlaceholderText("you@company.com");
    const passwordInput = screen.getByPlaceholderText("Enter Password");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("password123");
  });

  it("should toggle password visibility on eye icon click", () => {
    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    const passwordInput = screen.getByPlaceholderText("Enter Password");
    expect(passwordInput).toHaveAttribute("type", "password");

    const eyeIcon = passwordInput.nextElementSibling;

    if (eyeIcon instanceof HTMLElement) {
      fireEvent.click(eyeIcon);
    } else {
      throw new Error("Eye icon not found");
    }

    expect(passwordInput).toHaveAttribute("type", "text");

    if (eyeIcon instanceof HTMLElement) {
      fireEvent.click(eyeIcon);
    } else {
      throw new Error("Eye icon not found");
    }

    expect(passwordInput).toHaveAttribute("type", "password");
  });

  it("should handle forgot password change", () => {
    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.click(screen.getByText("Forgot Password"));
  });

  it("should handle submit for unsuccessful authentication", async () => {
    const mockData = [
      { emailId: "example@example.com", password: "password" },
      // Add more mock data if needed
    ];
    mock.onGet(API_GATEWAY_URL + "/users").reply(401, mockData);
    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    screen.debug();

    const emailInput = screen.getByPlaceholderText("you@company.com");
    const passwordInput = screen.getByPlaceholderText("Enter Password");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    fireEvent.click(screen.getByRole("button", { name: "Sign In" }));
    await waitFor(() => {
      expect(screen.queryByText("Error fetching JSON data:")).toBeNull();
    });
  });

  it("should handle submit for successful authentication", async () => {
    const mockData = [
      { emailId: "test@example.com", password: "password@123" },
    ];
    mock.onGet(API_GATEWAY_URL + "/users").reply(200, mockData);
    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    screen.debug();

    const emailInput = screen.getByPlaceholderText("you@company.com");
    const passwordInput = screen.getByPlaceholderText("Enter Password");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password@123" } });

    fireEvent.click(screen.getByRole("button", { name: "Sign In" }));
    await waitFor(() => {
      expect(screen.queryByText("Error fetching JSON data:")).toBeNull();
    });
  });
  it("should handle submit for successful authentication", async () => {
    const mockData = [
      { emailId: "test@example.com", password: "password@123" },
    ];
    mock.onGet(API_GATEWAY_URL + "/users").reply(200, mockData);
    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    screen.debug();

    const passwordInput = screen.getByPlaceholderText("Enter Password");
    const emailInput = screen.getByPlaceholderText("you@company.com");

    act(() => {
      fireEvent.change(emailInput, { target: { value: "text@example.com" } });
      fireEvent.change(passwordInput, { target: { value: "password@123" } });
    });

    act(() => {
      fireEvent.click(screen.getByRole("button", { name: "Sign In" }));
    });
  });
  test("should click on signUp ", () => {
    const mockData = [
      { emailId: "test@example.com", password: "password@123" },
    ];
    mock.onGet(API_GATEWAY_URL + "/users").reply(200, mockData);
    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    const link = screen.getByText("Signup");
    expect(link).toBeInTheDocument();
    fireEvent.click(link);
  });
});
