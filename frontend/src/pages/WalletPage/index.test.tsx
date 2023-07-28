import React from "react";
import WalletPage from ".";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import { act } from "react-dom/test-utils";
import { API_GATEWAY_URL } from "../../constants";
import { Provider } from "react-redux";
import mockStore from "../../mocks/mockStore/store";
import { BrowserRouter } from "react-router-dom";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("test for the wallet page", () => {
  test("should render the wallet screen", async () => {
    mockedAxios.get.mockImplementation((url: string) => {
      if (url === API_GATEWAY_URL + "/wallets?cryptoCurrencyId=2&userId=1") {
        return Promise.resolve({
          data: {
            id: 3,
            name: "USD COIN",
            balance: 35000,
            cryptoCurrencyId: 3,
            userId: 1,
            priceChange: 0,
          },
        });
      } else {
        return Promise.resolve({
          data: [
            {
              id: 1,
              amount: 3000,
              transactionType: "sell",
              status: "success",
              transactionFee: 1000,
              transactionTime: "2022-03-25T12:00:00-06:30",
              quantity: 0.0245,
              walletId: 1,
              cryptoCurrencyId: 3,
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
              cryptoCurrencyId: 3,
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
              cryptoCurrencyId: 3,
              userId: 1,
            },
          ],
        });
      }
    });
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <WalletPage />
          </Provider>
        </BrowserRouter>
      );
    });
    expect(await screen.findByTestId("mainTemplate")).toBeInTheDocument();
  });

  test("should render the wallet screen with rejects", async () => {
    mockedAxios.get.mockImplementation((url: string) => {
      if (url === API_GATEWAY_URL + "/wallets?cryptoCurrencyId=2&userId=1") {
        return Promise.reject(new Error("error getting user wallet"));
      } else {
        return Promise.reject(new Error("error getting user transactions"));
      }
    });
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <WalletPage />
          </Provider>
        </BrowserRouter>
      );
    });
    expect(await screen.findByTestId("mainTemplate")).toBeInTheDocument();
  });
});
