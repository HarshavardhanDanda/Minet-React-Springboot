import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Balance from ".";
import SellTotalBalance from ".";

describe("SellTotalBalance", () => {
  test("should renders total balance component with correct balance and symbol", () => {
    const balance = 10.1234567;
    const symbol = "BTC";
    const { getByText } = render(
      <SellTotalBalance
        balance={balance}
        symbol={symbol}
        src={"src"}
        coinName={"name"}
      />
    );

    const totalBalanceText = getByText("Total Balance");
    const balanceText = getByText("10.1234567 BTC");

    expect(totalBalanceText).toBeInTheDocument();
    expect(balanceText).toBeInTheDocument();
  });

  test("should renders the icon correctly", () => {
    const balance = 5000;
    const coinName = "Bitcoin";
    const symbol = "BTC";
    const src = "path/to/icon.svg";

    render(
      <Balance
        balance={balance}
        coinName={coinName}
        symbol={symbol}
        src={src}
      />
    );

    const icon = screen.getByRole("img");

    expect(icon).toHaveAttribute("src", src);
  });
});
