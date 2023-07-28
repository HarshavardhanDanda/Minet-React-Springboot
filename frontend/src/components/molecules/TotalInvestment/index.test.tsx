import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TotalInvestment, { TotalInvestmentProps } from ".";
import theme from "../../../theme";


describe("TotalInvestment Component", () => {
  test("should render TotalInvestment component with valid props", () => {
    const props: TotalInvestmentProps = {
      title: "Total Investment",
      value: "1,000,000",
      changePercentage: "+10%",
    };
    render(<TotalInvestment {...props} />);
    expect(screen.getByText("Total Investment")).toBeInTheDocument();
    expect(screen.getByText("1,000,000")).toBeInTheDocument();
    expect(screen.getByText("+10%")).toBeInTheDocument();
    expect(screen.getByText("+10%")).toHaveStyle("color: " + theme.palette.primary.success500);

  });
  test("should render TotalInvestment component with negative percentage", () => {
    const props: TotalInvestmentProps = {
      title: "Total Investment",
      value: "1,000,000",
      changePercentage: "-10%",
    };
    render(<TotalInvestment {...props} />);
    expect(screen.getByText("Total Investment")).toBeInTheDocument();
    expect(screen.getByText("1,000,000")).toBeInTheDocument();
    expect(screen.getByText("-10%")).toBeInTheDocument();
    expect(screen.getByText("-10%")).toHaveStyle("color: #B71A33");

  });
});