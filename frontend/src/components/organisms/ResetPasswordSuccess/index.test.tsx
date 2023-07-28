import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ResetPasswordSuccessOrganism from ".";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

describe("ResetPasswordSuccessOrganism", () => {
  test("renders correctly", () => {
    render(
      <BrowserRouter>
        <ResetPasswordSuccessOrganism />
      </BrowserRouter>
    );

    expect(screen.getByText("Reset Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Login" }));
  });
});
