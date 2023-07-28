import { render, screen } from "@testing-library/react";
import SelectedCryptoCard from "./index";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import bitcoin from "../../../../public/assets/Images/coins/bitcoin.svg";

describe("SelectedCryptoCard", () => {
  const defaultProps = {
    isSelected: false,
    coinName: "Bitcoin",
    coinValue: 50000,
    src: bitcoin,
  };

  test("renders crypto with default props", () => {
    render(<SelectedCryptoCard {...defaultProps} />);

    // Assert the presence of elements with default props
    expect(screen.getByText("Bitcoin")).toBeInTheDocument();
    expect(screen.getByText("$50,000")).toBeInTheDocument();
  });

  test("renders crypto with selected state", () => {
    const props = {
      ...defaultProps,
      isSelected: true,
    };
    render(<SelectedCryptoCard {...props} />);

    // Assert the presence of elements with selected state
    const tickIcon = screen.getAllByRole("img")[0];
    expect(tickIcon).toBeInTheDocument();
    expect(tickIcon).toHaveAttribute("alt", "icon");
    expect(tickIcon).toHaveAttribute("height", "11.43px");
    expect(tickIcon).toHaveAttribute("width", "16.66px");
  });
});
