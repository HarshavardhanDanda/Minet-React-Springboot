import React from "react";
import MainTemplate from ".";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("test for the main template", () => {
  test("should render the main template", () => {
    render(
      <MainTemplate
        navComponent={"nav"}
        headerComponent={"header"}
        middeleComponent={"middel"}
      />
    );
    const templete = screen.getByTestId("mainTemplate");
    expect(templete).toBeInTheDocument();
  });
});
