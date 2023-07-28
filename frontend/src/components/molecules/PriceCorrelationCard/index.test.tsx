import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Bitcoin from "../../../../public/assets/Images/coins/bitcoin2.svg";
import PriceCorrelationCard, { PriceCorrelationCardProps } from ".";

describe("PriceCorrelationCard Component", () => {
  test("renders PriceCorrelationCard component with valid props", () => {
    const props: PriceCorrelationCardProps = {
      src: Bitcoin,
      label: "Bitcoin",
      description: "Moves tightly together",
      amount: "$3,285,533.73",
      percentage: "100%",
    };
    render(<PriceCorrelationCard {...props} />);

    expect(screen.getByText("Bitcoin")).toBeInTheDocument();
    expect(screen.getByText("Moves tightly together")).toBeInTheDocument();
    expect(screen.getByText("$3,285,533.73")).toBeInTheDocument();
    expect(screen.getByText("100%")).toBeInTheDocument();
  });

});
