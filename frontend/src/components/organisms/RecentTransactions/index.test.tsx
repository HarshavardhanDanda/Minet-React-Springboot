import React from "react";
import { render, screen } from "@testing-library/react";
import RecentTransactions, { TransactionCardProps } from "./index";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

describe("RecentTransactions", () => {
  const mockTransactions: TransactionCardProps[] = [
    {
      src: "image1.jpg",
      coinSymbol: "BTC",
      coinName: "Bitcoin",
      transactionType: "sell",
      valueBTC: "0.0234",
      value: 1234,
      date: "2023-06-23",
    },
    {
      src: "image2.jpg",
      coinName: "Ethereum",
      valueBTC: "0.4567",
      value: 2345,
      date: "2023-06-14",
      transactionType: "sell",
      coinSymbol: "BTC",
    },
  ];

  test("renders the recent transactions", () => {
    const handleViewAll = jest.fn();
    render(<BrowserRouter><RecentTransactions recentTransactions={mockTransactions} handleViewAll={handleViewAll}/></BrowserRouter>);

    // Assert that the "Recent transactions" text is rendered
    expect(screen.getByText("Recent transactions")).toBeInTheDocument();

    // Assert that the transaction data is rendered
    expect(screen.getByText("Jun 23")).toBeInTheDocument();
    expect(screen.getByText("Bitcoin")).toBeInTheDocument();
    expect(screen.getAllByText("Sold")[0]).toBeInTheDocument();
    expect(screen.getByText("-0.0234 BTC")).toBeInTheDocument();
    expect(screen.getByText("-1,234.00")).toBeInTheDocument();
    expect(screen.getByText("Recent transactions")).toBeInTheDocument();
    expect(screen.getByText("View All")).toBeInTheDocument();

    expect(screen.getByText("Jun 14")).toBeInTheDocument();
    expect(screen.getByText("Ethereum")).toBeInTheDocument();
    expect(screen.getAllByText("Sold")[1]).toBeInTheDocument();
    expect(screen.getByText("-0.4567 BTC")).toBeInTheDocument();
    expect(screen.getByText("-2,345.00")).toBeInTheDocument();
  });
});
