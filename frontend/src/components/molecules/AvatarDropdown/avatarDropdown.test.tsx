import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AvatarDropdown from ".";

describe("test for avatar dropdown molecule", () => {
  test("should render both avatar and downward arrow image", () => {
    render(<AvatarDropdown />);
    const avatarElement = screen.getByTestId("avatar");
    expect(avatarElement).toBeInTheDocument();
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
  });
  test("should render both avatar and downward arrow image with specified width and height", () => {
    render(
      <AvatarDropdown
        iconHeight="17.78"
        iconWidth="22.73px"
        sxAvatar={{ width: "32px", height: "32px" }}
      />
    );
    const avatarElement = screen.getByTestId("avatar");
    expect(avatarElement).toBeInTheDocument();
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
  });
});
