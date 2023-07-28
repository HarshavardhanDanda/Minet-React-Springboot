import React from "react";
import LineDivider from ".";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("test for the line divider", () => {
  test("to check if the divider is getting displayed", () => {
    render(<LineDivider />);
    const ele = screen.getByTestId("lineDivider");
    expect(ele).toBeInTheDocument();
  });
});
