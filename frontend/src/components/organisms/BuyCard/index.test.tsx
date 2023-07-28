import React from "react";
import BuyCard from ".";
import { screen, render, getByText } from "@testing-library/react";
import "@testing-library/jest-dom";

const props = {
  isBuycard: false,
  coinAmount: 0.0234510,
  coinCost: 3406069.54,
  symbol:"BTC",
  paymentCard: "Bitcoin wallet",
  delivery: "0.001 BTC",
  wallet: "Rupee Coin",
  amount: 34000,
  transactionFee: 1000,
};

describe("test for the buy card component", () => {
  test("shoud render the buy card component", () => {
    render(
      <BuyCard
        isBuycard={true}
        coinAmount={props.coinAmount}
        coinCost={props.coinCost}
        paymentCard="Visa credit ...8845"
        delivery={props.delivery}
        wallet="bitcoin wallet"

        transactionFee={props.transactionFee} symbol={"BTC"}      />
    );
    const component = screen.getByTestId("buyAndSell");
    expect(component).toBeInTheDocument();
    expect(screen.getByText(/buy now/i)).toBeInTheDocument();
    expect(screen.getByText("Visa credit ...8845")).toBeInTheDocument();
  });
  test("shoud render the sell card component", () => {
    render(
      <BuyCard
        isBuycard={false}
        coinAmount={props.coinAmount}
        coinCost={props.coinCost}
        paymentCard={props.paymentCard}
        delivery={props.delivery}
        wallet={props.wallet}
        transactionFee={props.transactionFee} symbol={props.symbol}      />
    );
    const component = screen.getByTestId("buyAndSell");
    expect(component).toBeInTheDocument();
    expect(screen.getByText(/sell now/i)).toBeInTheDocument();
    expect(screen.getByText("Bitcoin wallet")).toBeInTheDocument();
  });
});
