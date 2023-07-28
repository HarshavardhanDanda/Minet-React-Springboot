import React from "react";
import AuthTemplate from ".";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import login from "../../../../public/assets/Images/login.svg"


describe("tests for the authtemplate", () => {
  test("should render the auth template", () => {
    render(
      <AuthTemplate 
        src={login}
        RightComponent={"right"}
      />
    );
    const template = screen.getByTestId("auth-template");
    expect(template).toBeInTheDocument();
  });
});