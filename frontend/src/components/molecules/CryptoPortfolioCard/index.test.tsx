import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CryptoPortfolioCard from ".";
import Bitcoin from "../../../../public/assets/Images/coins/bitcoin.svg";
import theme from "../../../theme";

describe("test for the crypto portfolio card", () => {
  test("should render the coin image and the coin name and details", () => {
    render(
      <CryptoPortfolioCard
        iconSrc={Bitcoin}
        coinName="Bitcoin"
        coinShortForm="BTC"
        amount={0}
        percentage={0}
      />
    );
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    const coinName = screen.getByText(/bitcoin/i);
    expect(coinName).toBeInTheDocument();
    const shortForm = screen.getByText(/btc/i);
    expect(shortForm).toBeInTheDocument();
  });
  test("should render the coin image and the coin name and details with specified color and style", () => {
    render(
      <CryptoPortfolioCard
        iconSrc={Bitcoin}
        coinName="Bitcoin"
        coinShortForm="BTC"
        amount={0}
        percentage={0}
        percentageColor={theme.palette.primary.success500}
        sxCard={{
          width: "370px",
          height: "58px",
          padding: "8px 12px 8px 24px",
          "&.MuiGrid-container": {
            "&:hover": {
              boxShadow: "0px 1px 10px rgba(44, 44, 44, 0.08);",
            },
          },
        }}
        iconHeight="42px"
        iconWidth="42px"
      />
    );
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    const coinName = screen.getByText(/bitcoin/i);
    expect(coinName).toBeInTheDocument();
    const shortForm = screen.getByText(/btc/i);
    expect(shortForm).toBeInTheDocument();
  });
});
