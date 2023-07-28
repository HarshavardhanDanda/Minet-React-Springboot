import React from "react";
import HomeTemplate from ".";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";

describe("tests for the home template", () => {
  test("should render the home template", () => {
    render(
      <HomeTemplate
        navCopmponent={"nav"}
        headerCopmponent={"header"}
        middleLeftComponent={"middle left"}
        middleRightComponent={"middle right"}
      />
    );
    const template = screen.getByTestId("home-template");
    expect(template).toBeInTheDocument();
  });
});
