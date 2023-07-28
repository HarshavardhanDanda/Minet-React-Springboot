import React from "react";
import CryptoDetails from ".";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("test for crypto details", () => {
  test("should render the details of bitcoin", () => {
    render(<CryptoDetails />);
    const ele = screen.getByTestId("cryptoDetails");
    expect(ele).toBeInTheDocument();
    expect(screen.getByText(/about bitcoin/i)).toBeInTheDocument();
    expect(screen.getByText(/resources/i)).toBeInTheDocument();
    const images = screen.getAllByRole("img");
    {
      images.forEach((image) => {
        expect(image).toBeInTheDocument();
      });
    }
  });
});
