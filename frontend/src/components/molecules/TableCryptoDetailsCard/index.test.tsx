import React from "react";
import { render, screen } from "@testing-library/react";
import TableCryptoDetailsCard, { TableCryptoDetailsCardProps } from "../TableCryptoDetailsCard";
import Bitcoin from "../../../../public/assets/Images/coins/bitcoin.svg";
import theme from "../../../theme";
import "@testing-library/jest-dom/extend-expect";
import { formattedBalance } from "../../organisms/AmountDetailsCard";

describe("TableCryptoDetailsCard", () => {
  const props: TableCryptoDetailsCardProps = {
    src: Bitcoin,
    coinHeight: "42px",
    coinWidth: "42px",
    coinName: "Bitcoin",
    symbol: "BTC",
    priceChange: +1.06,
    price: 3285553.73,
    marketCap: "$60.1T",
    checked: false,
    onChange: jest.fn(),
    cryptoId:1,
  };

  it("should render Table Crypto Details Card", () => {
    render(<TableCryptoDetailsCard {...props} />);
    expect(screen.getByText("Bitcoin")).toBeInTheDocument();
    expect(screen.getByText("BTC")).toBeInTheDocument();
    expect(screen.getByText("+1.06%")).toBeInTheDocument();
    const formattedPrice = formattedBalance(props.price);
    if (formattedPrice !== undefined) {
      expect(screen.getByText(new RegExp(formattedPrice))).toBeInTheDocument();
    } else {
      expect(formattedPrice).toBeDefined(); // Optional: Check that formattedPrice is defined
    }

     expect(screen.getByText("$60.1T")).toBeInTheDocument();
  });

  it("should render the checkbox unchecked by default", () => {
    render(<TableCryptoDetailsCard {...props} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it("calls the onChange function when the checkbox is clicked", () => {
    render(<TableCryptoDetailsCard {...props} />);
    const checkbox = screen.getByRole("checkbox");
    checkbox.click();
    expect(props.onChange).toHaveBeenCalled();
  });

  it("renders the correct typography color based on the price change value", () => {
    const propsPositive: TableCryptoDetailsCardProps = {
      ...props,
      priceChange: 1.06,
    };
    render(<TableCryptoDetailsCard {...propsPositive} />);
    const typographyPositive = screen.getByText("+1.06%");
    expect(typographyPositive).toHaveStyle(`color: ${theme.palette.primary.success500}`);

    const propsNegative: TableCryptoDetailsCardProps = {
      ...props,
      priceChange: -5.49,
    };
    render(<TableCryptoDetailsCard {...propsNegative} />);
    const typographyNegative = screen.getByText("-5.49%");
    expect(typographyNegative).toHaveStyle(`color: ${theme.palette.loss.borderColor}`);
  });
});
