import { render, screen } from "@testing-library/react";
import PaymentCard from "./index";
import React from "react";
import "@testing-library/jest-dom/extend-expect";

describe("PaymentCard", () => {
  it("renders payment card information correctly", () => {
    const balance = 1000;

    render(<PaymentCard balance={balance} />);

    // Assert the title
    const title = screen.getByText("Payment Method");
    expect(title).toBeInTheDocument();

    // Assert the coin name and description
    const coinName = screen.getByText("USD Coin (Cash)");
    expect(coinName).toBeInTheDocument();

    // Assert the balance
    const balanceText = screen.getByText("Total Balance - $ 1,000");
    expect(balanceText).toBeInTheDocument();

    // Assert the default label
    const defaultLabel = screen.getByText("Default");
    expect(defaultLabel).toBeInTheDocument();
  });
});
