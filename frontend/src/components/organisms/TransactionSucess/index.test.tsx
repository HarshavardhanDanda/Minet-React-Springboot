import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TransactionSuccess from ".";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

it("should renders the Success buy card", async () => {
  render(
    <BrowserRouter>
      <TransactionSuccess price="1000" successType="sell" />
    </BrowserRouter>
  );
  const wrapper = screen.getByTestId("transaction-success-container");
  expect(wrapper).toBeInTheDocument();
});
it("should renders the Success sell card", async () => {
  render(
    <BrowserRouter>
      <TransactionSuccess price="1000" successType="buy" />
    </BrowserRouter>
  );
  const wrapper = screen.getByTestId("transaction-success-container");
  expect(wrapper).toBeInTheDocument();
  const buttons = screen.getAllByRole("button");
  fireEvent.click(buttons[1]);
});
