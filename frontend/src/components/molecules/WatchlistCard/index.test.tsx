import React from "react";
import { render, screen } from "@testing-library/react";
import WatchlistCard from "./index";
import Bitcoin from "../../../../public/assets/Images/coins/bitcoin.svg";
import theme from "../../../theme";
import "@testing-library/jest-dom/extend-expect";
import GraphWithTypography from "../GraphWithTypography";

jest.mock("react-apexcharts", () => ({
  __esModule: true,
  default: () => <div />,
}));

describe("WatchlistCard", () => {
  const mockProps = {
    src: Bitcoin,
    coinName: "Bitcoin",
    price: 51000,
    priceChange: 2.3,
    graphData: [1, 2, 3, 4, 5],
    priceAt1D: 50000,
  };

  it("should renders the WatchlistCard component", () => {
    render(<WatchlistCard {...mockProps} />);
  });

  it("should displays the coin name", () => {
    render(<WatchlistCard {...mockProps} />);
    const coinNameElement = screen.getByText("Bitcoin");
    expect(coinNameElement).toBeInTheDocument();
  });

  it("should displays the coin value", () => {
    render(<WatchlistCard {...mockProps} />);
    const coinValueElement = screen.getByText("$51,000");
    expect(coinValueElement).toBeInTheDocument();
  });

  it("should displays the 24h chip", () => {
    render(
      <WatchlistCard
        src={Bitcoin}
        coinName="Bitcoin"
        price={51000}
        priceChange={-2.3}
        graphData={[1, 2, 3, 4, 5]}
      />
    );
    const chipElement = screen.getByText("24h");
    expect(chipElement).toBeInTheDocument();
  });
  describe("test for the graph with typography component", () => {
    test("should display the typography and the graph", () => {
      const { container } = render(
        <GraphWithTypography
          componentSx={{ width: "190px", height: "82px" }}
          typographyColor={theme.palette.primary.success500!}
          text="+1.2%"
          graphData={[11, 6, 22, 13, 2, 44, 5]}
          graphHeight={"65%"}
          graphWidth={"100%"}
          graphColor={theme.palette.primary.success500}
        />
      );
      expect(container).toBeInTheDocument();
    });
    test("should display the typography and the graph", () => {
      const { container } = render(
        <GraphWithTypography
          typographyColor={theme.palette.primary.warning300!}
          text="+1.2%"
          graphData={[11, 6, 22, 13, 2, 44, 5]}
        />
      );
      expect(container).toBeInTheDocument();
    });
  });
});
