import React from "react";
import { render, screen } from "@testing-library/react";
import ResetPasswordSuccess from ".";
import "@testing-library/jest-dom/extend-expect";

describe("ResetPasswordSuccessOrganism", () => {
  test("renders correctly", () => {
    render(<ResetPasswordSuccess />);

    expect(screen.getByText("Password reset successful")).toBeInTheDocument();
    expect(
      screen.getByText("Click on button below to proceed to login")
    ).toBeInTheDocument();
  });
});
