import { render, screen } from "@testing-library/react";
import WalletCard from "./index";
import React from "react";
import "@testing-library/jest-dom/extend-expect";

describe("WalletCard", () => {
  it("renders wallet information correctly", () => {
    const balance = 1000;

    render(<WalletCard balance={balance} />);

    // Assert the title
    const title = screen.getByText("My wallets");
    expect(title).toBeInTheDocument();

    // Assert the coin name and description
    const coinName = screen.getByText("USD Coin");
    expect(coinName).toBeInTheDocument();
    const coinDescription = screen.getByText("US Dollar");
    expect(coinDescription).toBeInTheDocument();

    // Assert the balance
    const balanceText = screen.getByText("$ 1,000.00");
    expect(balanceText).toBeInTheDocument();
  });
});
