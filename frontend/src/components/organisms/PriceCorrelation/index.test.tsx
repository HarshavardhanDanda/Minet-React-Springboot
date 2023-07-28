import React from "react";
import { render, screen } from "@testing-library/react";
import PriceCorrelation from "./index";
import "@testing-library/jest-dom/extend-expect";


describe("PriceCorrelation", () => {
  it("should renders the Price correlation component", () => {
    render(<PriceCorrelation />);
  });

  it("should renders the title correctly", () => {
    render(<PriceCorrelation />);
    const titleElement = screen.getByText("Price correlation with");
    expect(titleElement).toBeInTheDocument();
  });

  it("should displays the correct labels for price correlation cards", () => {
    render(<PriceCorrelation />);
    const labels = screen.getAllByText(/Bitcoin|Ethereum|XRP|Tether/);
    expect(labels.length).toBe(8); // Assert that all 12 cards have the correct labels
  });

  it("should displays the correct amount for price correlation cards", () => {
    render(<PriceCorrelation />);
    const amountElements = screen.getAllByText(/\$\d+(,\d{3})*\.\d{2}/); // Matches the format "$x,xxx,xxx.xx"
    const expectedAmounts = [
      "$3,285,533.73",
      "$230,966.85",
      "$60.20",
      "$74.28",
      "$3,285,533.73",
      "$230,966.85",
      "$60.20",
      "$74.28",
    ];
    expect(amountElements).toHaveLength(8);
    amountElements.forEach((amountElement, index) => {
      expect(amountElement).toHaveTextContent(expectedAmounts[index]);
    });
  });
  
  it("should displays the correct percentage for price correlation cards", () => {
    render(<PriceCorrelation />);
    const percentageElements = screen.getAllByText(/\d+%$/); // Matches the format "xx%"
    const expectedPercentages = [
      "100%",
      "86%",
      "10%",
      "2%",
      "100%",
      "86%",
      "10%",
      "2%",
    ];
    expect(percentageElements).toHaveLength(8);
    percentageElements.forEach((percentageElement, index) => {
      expect(percentageElement).toHaveTextContent(expectedPercentages[index]);
    });
  });
});
