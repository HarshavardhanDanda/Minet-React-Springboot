import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cardano from "../../../../public/assets/Images/coins/Cardano.svg";
import WatchList from ".";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import mockStore from "../../../mocks/mockStore/store";

jest.mock("react-apexcharts", () => ({
  __esModule: true,
  default: () => <div />,
}));

test("renders watchlist header", () => {
  render(
    <Provider store={mockStore}>
      <BrowserRouter>
        <WatchList cardProps={[]} />
      </BrowserRouter>
    </Provider>
  );

  const watchlistHeader = screen.getByText("Watchlist");
  expect(watchlistHeader).toBeInTheDocument();
});

test("renders WatchList component without errors", () => {
  render(
    <Provider store={mockStore}>
      <BrowserRouter>
        <WatchList cardProps={[]} />
      </BrowserRouter>
    </Provider>
  );
});

test("displays the correct title", () => {
  render(
    <Provider store={mockStore}>
      <BrowserRouter>
        <WatchList cardProps={[]} />
      </BrowserRouter>
    </Provider>
  );
  const titleElement = screen.getByText("Watchlist");
  expect(titleElement).toBeInTheDocument();
});

test("clicks 'Discover assets' link", () => {
  render(
    <Provider store={mockStore}>
      <BrowserRouter>
        <WatchList cardProps={[]} />
      </BrowserRouter>
    </Provider>
  );
  const discoverAssetsLink = screen.getByText("Discover assets");
  fireEvent.click(discoverAssetsLink);
});

const cardPropsMock = [
  {
    id: 1,
    src: Cardano,
    coinName: "Bitcoin",
    price: 3000,
    priceChange: 2.3,
    graphData: [1, 2, 3, 4, 5],
  },
];

test("displays watchlist cards", () => {
  render(
    <Provider store={mockStore}>
      <BrowserRouter>
        <WatchList cardProps={cardPropsMock} />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByText("View Watchlist")).toBeInTheDocument();
  expect(screen.getByText("$3,000")).toBeInTheDocument();
  expect(screen.getByText("Bitcoin")).toBeInTheDocument();
  expect(screen.getByText("+2.3%")).toBeInTheDocument();
  fireEvent.click(screen.getByText("View Watchlist"));
});

test("displays watchlist cards", () => {
  render(
    <Provider store={mockStore}>
      <BrowserRouter>
        <WatchList cardProps={cardPropsMock} />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByTestId("watchListCard")).toBeInTheDocument();
  fireEvent.click(screen.getByTestId("watchListCard"));
});
