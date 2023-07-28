import React from "react";
import { render } from "@testing-library/react";
import WalletBalance from "../WalletBalance";
import Dollar from "../../../../public/assets/Images/dollar.svg";
import "@testing-library/jest-dom/extend-expect";

describe("WalletBalance Component", () => {
  const props = {
    src: Dollar,
    coinHeight: "56px",
    coinWidth: "56px",
    coinName: "USD Coin",
    coinDescription: "Cash",
    typographyChildren: "Total balance",
    button1: "CASH DEPOSIT",
    button2: "WITHDRAWAL",
    label: "Wallet",
    value: "$34,000",
    buttonHeight: "42px",
  };

  test("should render Wallet Balance component", () => {
    render(<WalletBalance {...props} />);
  });


  test("should displays the coin image with the correct source", () => {
    const { container } = render(<WalletBalance {...props} />);
    const coinImage = container.querySelector("img");
    expect(coinImage).toBeInTheDocument();
    expect(coinImage?.getAttribute("src")).toBe(props.src);
  });

  test("should displays the coin name and description", () => {
    const { getByText } = render(<WalletBalance {...props} />);
    const coinName = getByText("USD Coin");
    const coinDescription = getByText("Cash");
    expect(coinName).toBeInTheDocument();
    expect(coinDescription).toBeInTheDocument();
  });

  test("should displays the buttons with the correct labels", () => {
    const { getByText } = render(<WalletBalance {...props} />);
    const button1 = getByText("CASH DEPOSIT");
    const button2 = getByText("WITHDRAWAL");
    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
  });

  test("should displays the label and value with the correct text", () => {
    const { getByText } = render(<WalletBalance {...props} />);
    const label = getByText("Wallet");
    const value = getByText("$34,000");
    expect(label).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });
});
