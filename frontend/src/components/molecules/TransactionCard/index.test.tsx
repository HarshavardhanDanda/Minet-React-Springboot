import React from "react";
import { render, screen } from "@testing-library/react";
import TransactionCard from "./index";
import dots from "../../../../public/assets/Images/3dots.svg";
import "@testing-library/jest-dom/extend-expect";

describe("TransactionCard", () => {
  const defaultProps = {
    src: dots,
    coinName: "Bitcoin",
    coinDescription: "From Badgley",
    valueBTC: "+0.0010 BTC",
    value: "+$900",
    date: "2023-02-28",
    type: "purchase",
  };

  it("should renders the TransactionCard component without errors", () => {
    render(<TransactionCard {...defaultProps} />);
  });

  it("should displays the coin name correctly", () => {
    render(<TransactionCard {...defaultProps} />);
    const coinNameElement = screen.getByText("Bitcoin");
    expect(coinNameElement).toBeInTheDocument();
  });

  it("should displays the coin description correctly", () => {
    render(<TransactionCard {...defaultProps} />);
    const coinDescriptionElement = screen.getByText("From Badgley");
    expect(coinDescriptionElement).toBeInTheDocument();
  });

  it("should displays the value in BTC correctly", () => {
    render(<TransactionCard {...defaultProps} />);
    const valueBTCElement = screen.getByText("+0.0010 BTC");
    expect(valueBTCElement).toBeInTheDocument();
  });

  it("should displays the value in USD correctly", () => {
    render(<TransactionCard {...defaultProps} />);
    const valueElement = screen.getByText("+$900");
    expect(valueElement).toBeInTheDocument();
  });

  it("should displays the month correctly", () => {
    render(<TransactionCard {...defaultProps} />);
    const monthElement = screen.getByText("Feb");
    expect(monthElement).toBeInTheDocument();
  });

  it("should displays the date correctly", () => {
    render(
      <TransactionCard
        {...{
          src: dots,
          coinName: "Bitcoin",
          coinDescription: "From Badgley",
          valueBTC: "+0.0010 BTC",
          value: "+$900",
          date: "2023-02-28",
          type: "sell",
        }}
      />
    );
    const dateElement = screen.getByText("28");
    expect(dateElement).toBeInTheDocument();
  });
});
