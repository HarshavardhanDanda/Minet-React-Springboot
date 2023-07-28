import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import HomePage from ".";
import axios from "axios";
import { act } from "react-dom/test-utils";
import "jest";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { API_GATEWAY_URL } from "../../constants";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import mockStore from "../../mocks/mockStore/store";

jest.mock("react-apexcharts", () => ({
  __esModule: true,
  default: () => <div />,
}));

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

mockedAxios.get.mockImplementation((url: string) => {
  if (url === API_GATEWAY_URL + "/cryptocurrency/1") {
    return Promise.resolve({
      data: {
        id: 1,
        name: "Bitcoin",
        symbol: "BTC",
        marketCap: "$54.6T",
        created: "2022-12-23",
        price: 345466.54,
        priceAt1H: 345460.4,
        priceAt1D: 345470.4,
        priceAt1W: 345500.31,
        priceAt1M: 345456.33,
        totalSupply: "$2.9T",
        circulatingSupply: "18.8M BTC",
        priceChange: 1.6,
      },
    });
  } else if (url === API_GATEWAY_URL + "/portfolio/transactions?userId=1") {
    return Promise.resolve({
      data: [
        {
          id: 1,
          amount: 3000,
          type: "purchase",
          status: "success",
          transactionFee: 1000,
          transactionTime: "2022-03-25T12:00:00-06:30",
          quantity: 0.0245,
          walletId: 1,
          cryptoCurrencyId: 1,
          userId: 1,
        },
        {
          id: 2,
          amount: 3000,
          type: "purchase",
          status: "fail",
          transactionFee: 1000,
          transactionTime: "2021-03-25T12:00:00-06:30",
          quantity: 0.245,
          walletId: 1,
          cryptoCurrencyId: 1,
          userId: 1,
        },
        {
          id: 3,
          amount: 3000,
          type: "purchase",
          status: "pending",
          transactionFee: 900,
          transactionTime: "2020-03-25T12:00:00-06:30",
          quantity: 0.025,
          walletId: 1,
          cryptoCurrencyId: 1,
          userId: 1,
        },
      ],
    });
  } else if (url === API_GATEWAY_URL + "/portfolio/watchLists?userId=1") {
    return Promise.resolve({
      data: [
        {
          id: 1,
          userId: 1,
          cryptoCurrencyId: 1,
        },
        {
          id: 2,
          userId: 1,
          cryptoCurrencyId: 2,
        },
      ],
    });
  } else if (url === API_GATEWAY_URL + "/wallets?userId=1") {
    return Promise.resolve({
      data: [
        {
          id: 1,
          name: "Bitcoin Wallet",
          balance: 2.5429,
          cryptoCurrencyId: 1,
          userId: 1,
          priceChange: 2.6,
        },
      ],
    });
  } else if (url === API_GATEWAY_URL + "/wallets?cryptoCurrencyId=1&userId=1") {
    return Promise.resolve({
      data: [
        {
          id: 1,
          name: "Bitcoin Wallet",
          balance: 2.529,
          cryptoCurrencyId: 1,
          userId: 1,
          priceChange: 2.6,
        },
      ],
    });
  } else {
    return Promise.resolve({
      data: [
        {
          id: 1,
          name: "usd coin Wallet",
          balance: 2.5429,
          cryptoCurrencyId: 1,
          userId: 1,
          priceChange: 2.6,
        },
      ],
    });
  }
});

describe("HomePage", () => {
  test("renders the page components correctly", () => {
    act(() => {
      render(
        <Provider store={mockStore}>
          <BrowserRouter>
            <HomePage />
          </BrowserRouter>
        </Provider>
      );
    });
    expect(screen.getAllByText("Dashboard")[0]).toBeInTheDocument;
    expect(screen.getAllByText("Bitcoin")[0]).toBeInTheDocument;
    fireEvent.click(screen.getAllByText("Bitcoin")[0]);
    fireEvent.click(screen.getAllByText("Bitcoin")[1]);
    expect(screen.getAllByText("Ethereum")[0]).toBeInTheDocument;
    fireEvent.click(screen.getAllByText("Ethereum")[0]);
    fireEvent.click(screen.getAllByText("Ethereum")[1]);
    fireEvent.click(screen.getByText("View All"));
    // screen.debug()
  });
  test("renders the page components correctly", () => {
    act(() => {
      render(
        <Provider store={mockStore}>
          <BrowserRouter>
            <HomePage />
          </BrowserRouter>
        </Provider>
      );
    });
    const ele = screen.getByText(/view all/i);
    expect(ele).toBeInTheDocument();
    act(() => {
      fireEvent.click(ele);
    });
  });
});
