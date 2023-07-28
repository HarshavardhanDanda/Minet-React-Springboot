import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CryptoTransactionHistory from "./index";
import { transactionHistory } from "./mockTransactionHistory";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

describe("CryptoTransactionHistory", () => {
  const transactionHistorySlice = transactionHistory.slice(0, 3);

  it("should render the component correctly", () => {
    render(
      <CryptoTransactionHistory
        transactionCardDetails={transactionHistorySlice}
      />
    );

    expect(screen.getAllByRole("img")[0]).toBeInTheDocument();
    expect(screen.getAllByRole("img")[1]).toBeInTheDocument();
    expect(screen.getAllByRole("img")[2]).toBeInTheDocument();
    expect(screen.getAllByText("Bitcoin")[0]).toBeVisible();
    expect(screen.getAllByText("From Badgley")[0]).toBeVisible();
    expect(screen.getAllByText("Purchased")[0]).toBeVisible();
    expect(screen.getAllByText("+0.0010 BTC")[0]).toBeVisible();
    expect(screen.getAllByText("+$900")[0]).toBeVisible();

    const textbox = screen.getByRole("textbox");
    expect(textbox).toBeInTheDocument();
    fireEvent.change(textbox, { target: { value: "hello" } });
  });

  it("should render the dropdown correctly", async () => {
    const fn = jest.fn();
    render(
      <CryptoTransactionHistory
        transactionCardDetails={transactionHistorySlice}
      />
    );

    const dropdown = screen.getByText("ALL");
    expect(dropdown).toBeVisible();
    if (dropdown.firstChild) {
      fireEvent.keyDown(dropdown.firstChild, { key: "ArrowDown" });
      await screen.findByText("1W");
      const ele = screen.getByText("1W");
      fireEvent.click(ele);

      fireEvent.keyDown(dropdown.firstChild, { key: "ArrowDown" });
      await screen.findByText("1M");
      const ele2 = screen.getByText("1M");
      fireEvent.click(ele2);

      fireEvent.keyDown(dropdown.firstChild, { key: "ArrowDown" });
      await screen.findByText("1Y");
      const ele3 = screen.getByText("1Y");
      fireEvent.click(ele3);
    }
  });
});
