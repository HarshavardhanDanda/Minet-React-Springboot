import React from "react";
import DetailsPage from ".";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import { API_GATEWAY_URL } from "../../constants";
import { act } from "react-dom/test-utils";
import { BrowserRouter, Router, useParams } from "react-router-dom";
import { Provider } from "react-redux";
import mockStore from "../../mocks/mockStore/store";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

jest.mock("react-apexcharts", () => ({
  __esModule: true,
  default: () => <div />,
}));
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("test for details page", () => {
  test("should render the details page", async () => {
    jest
      .spyOn(require("react-router-dom"), "useParams")
      .mockReturnValue({ screen: "Overview", coinId: 1 });
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
      } else if (
        url ===
        API_GATEWAY_URL + "/portfolio/transactions?cryptoCurrencyId=1&userId=1"
      ) {
        return Promise.resolve({
          data: [
            {
              id: 1,
              amount: 3000,
              transactionType: "purchase",
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
              transactionType: "purchase",
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
              transactionType: "sell",
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
      } else {
        return Promise.resolve({
          data: {
            id: 1,
            name: "Bitcoin Wallet",
            balance: 2.5429,
            cryptoCurrencyId: 1,
            userId: 1,
            priceChange: 2.6,
          },
        });
      }
    });
    act(() => {
      render(
        <Provider store={mockStore}>
          <BrowserRouter>
            <DetailsPage />
          </BrowserRouter>
        </Provider>
      );
    });
    act(async () => {
      const page = await screen.findByTestId("mainTemplate");
      expect(page).toBeInTheDocument();
    });
    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[0]);
  });

  test("should render the details page but with rejected axios", async () => {
    jest
      .spyOn(require("react-router-dom"), "useParams")
      .mockReturnValue({ screen: "Overview", coinId: 1 });
    mockedAxios.get.mockImplementation((url: string) => {
      if (url === API_GATEWAY_URL + "/cryptocurrency/1") {
        return Promise.reject(new Error("mocked cryptodata"));
      } else if (
        url ===
        API_GATEWAY_URL + "/portfolio/transactions?cryptoCurrencyId=1&userId=1"
      ) {
        return Promise.reject(new Error("mocked transaction data"));
      } else {
        return Promise.reject(new Error("mocked"));
      }
    });
    act(() => {
      render(
        <Provider store={mockStore}>
          <BrowserRouter>
            <DetailsPage />
          </BrowserRouter>
        </Provider>
      );
    });
    act(async () => {
      const page = await screen.findByTestId("mainTemplate");
      expect(page).toBeInTheDocument();
    });
  });
});
