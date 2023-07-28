import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import AmountDetailsCard, { formattedBalance } from "./index";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";

const testProps = {
  coin: "BTC",
  coinValue: 50000,
  totalBalance: 10000,
  isBuycard: true,
  coinQuantity: 5,
  onSliderChange: jest.fn(),
};

describe("AmountDetailsCard", () => {
  beforeEach(() => {
    jest.mock("axios", () => ({
      get: jest.fn(() => Promise.resolve({ data: [] })),
    }));
  });

  test("renders the component with correct amount details", () => {
    render(<AmountDetailsCard {...testProps} />);

    const titleElement = screen.getByText("Amount details");
    expect(titleElement).toBeInTheDocument();

    const sliderElement = screen.getByRole("slider");
    expect(sliderElement).toHaveValue("50");
    act(() => {
      fireEvent.change(sliderElement, { target: { value: 70 } });
    });
  });

  test("displays the correct text when isBuycard is false", () => {
    const modifiedProps = { ...testProps, isBuycard: false };
    render(<AmountDetailsCard {...modifiedProps} />);

    const sellButtonElement = screen.getByText("Sell max");
    expect(sellButtonElement).toBeInTheDocument();
    act(() => {
      fireEvent.click(sellButtonElement);
    });
  });

  test("formattedBalance function formats balance correctly", () => {
    const balance = 12345.6789;
    const formatted = formattedBalance(balance);
    expect(formatted).toBe("12,345.68");
  });
});
