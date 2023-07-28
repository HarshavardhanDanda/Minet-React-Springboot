import React from "react";
import "jest";
import { getByRole, render, screen, fireEvent } from "@testing-library/react";
import ButtonComponent from "./index";
import "@testing-library/jest-dom/extend-expect";

it("Should render button", () => {
  const onClickView = jest.fn();
  const { container } = render(
    <ButtonComponent
      variant="contained"
      backgroundColor="primary"
      onClick={onClickView}
    >
      Buy Now
    </ButtonComponent>
  );

  const button = screen.getByRole("button") as HTMLInputElement;
  expect(button).toBeVisible();
  expect(screen.getByText("Buy Now")).toBeVisible();

  fireEvent.click(button);
  expect(onClickView).toBeCalled();
});
