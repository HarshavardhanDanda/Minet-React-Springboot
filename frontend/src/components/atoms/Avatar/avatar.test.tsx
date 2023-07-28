import React from "react";
import Avatar from ".";
import { screen, render, fireEvent } from "@testing-library/react";
import "jest";
import "@testing-library/jest-dom";

describe("test for the avatar component", () => {
  test("to test if the component is in the document", () => {
    render(<Avatar dataTestId="avatar" />);
    const element = screen.getByTestId("avatar");
    expect(element).toBeInTheDocument();
  });

  test("to fire an event", () => {
    const onClickedMock = jest.fn(() => {
      console.log("clicked");
    });
    render(
      <Avatar dataTestId="avatar" id="avatarTest" onClick={onClickedMock} />
    );
    const element = screen.getByTestId("avatar");
    expect(element).toBeInTheDocument();
    fireEvent.click(element);
    expect(onClickedMock).toBeCalled();
  });
});
