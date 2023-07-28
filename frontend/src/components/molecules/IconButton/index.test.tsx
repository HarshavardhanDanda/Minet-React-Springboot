import React from "react";
import "jest";
import { getByRole, render, screen, fireEvent } from "@testing-library/react";
import IconButton from "./index";
import "@testing-library/jest-dom/extend-expect";
import facebook from "../../../../public/assets/icons/stripe.svg";

it("should render icon button", () => {
  const { container } = render(
    <IconButton src={facebook} text="Facebook" />
  );

  const iconButton = screen.getByRole("img");
  expect(iconButton).toBeVisible();
  expect(screen.getByText("Facebook")).toBeVisible();
});
