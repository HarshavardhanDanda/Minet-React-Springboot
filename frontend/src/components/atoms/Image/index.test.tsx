import React from "react";
import "jest";
import { render, screen } from "@testing-library/react";
import Image from "./index";
import "@testing-library/jest-dom/extend-expect";

import login from "../../../../public/assets/Images/login.svg";

it("Should render Image", () => {
  const props = {
    src: login,
    width: "200px",
    height: "150px",
  };

  render(<Image {...props} />);

  const imageElement = screen.getByRole("img");
  expect(imageElement).toHaveAttribute("src", props.src);
  expect(imageElement).toHaveAttribute("width", props.width.toString());
  expect(imageElement).toHaveAttribute("height", props.height.toString());
});
