import CoinSlider from ".";
import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("test for the coinslider component", () => {
  test("should render the coin slider", () => {
    render(<CoinSlider />);
    const ele = screen.getByTestId("coinSlider");
    expect(ele).toBeInTheDocument();
  });
  test("should render the bitcoin button and ethereum buttons", () => {
    const mockFun = jest.fn(() => {});
    render(
      <CoinSlider
        componentHeight={"50%"}
        bitCoinButton={{ onClick: mockFun }}
        ethereumButton={{ onClick: mockFun }}
      />
    );
    const bitcoinButton = screen.getByTestId("bitcoinButton");
    const ethereumButton = screen.getByTestId("ethereumButton");
    fireEvent.click(bitcoinButton)
    fireEvent.click(bitcoinButton);
    fireEvent.click(ethereumButton);
    fireEvent.click(ethereumButton);
    expect(bitcoinButton).toBeInTheDocument();
    expect(ethereumButton).toBeInTheDocument();
  });
});
