import React from "react";
import CoinInfo from ".";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import "jest";
import { act } from "react-dom/test-utils";
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { API_GATEWAY_URL } from "../../../constants";
import mockStore from "../../../mocks/mockStore/store";


jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("test for the coin info organism", () => {
  test("should render the coin info", () => {
    mockedAxios.get.mockResolvedValue({
      data: {
        id: 2,
        name: "Ethereum",
        symbol: "ETH",
        marketCap: "$162.92B",
        created: "2022-12-23",
        price: 1297.93,
        priceAt1H: 1290.9,
        priceAt1D: 1299.99,
        priceAt1W: 1300.9,
        priceAt1M: 1296.55,
        totalSupply: "$11.5B",
        circulatingSupply: "122.60M ETH",
        priceChange: -0.6,
        icon: "https://w7.pngwing.com/pngs/268/1013/png-transparent-ethereum-eth-hd-logo-thumbnail.png",
      },
    });
    act(() => {
      render(<Provider store={mockStore}><CoinInfo coinId={2} /></Provider>);
    });
    const text = screen.getByText(/ethereum/i);
    expect(text).toBeInTheDocument();
  });
  test("should render the coin info with provided props", async () => {
    mockedAxios.get.mockResolvedValue({
      data: {
        id: 2,
        name: "Bitcoin",
        symbol: "ETH",
        marketCap: "$162.92B",
        created: "2022-12-23",
        price: 1297.93,
        priceAt1H: 1290.9,
        priceAt1D: 1299.99,
        priceAt1W: 1300.9,
        priceAt1M: 1296.55,
        totalSupply: "$11.5B",
        circulatingSupply: "122.60M ETH",
        priceChange: 10,
      },
    });
    act(() => {
      render(
        <Provider store={mockStore}>
          <CoinInfo coinId={2} height={"15vh"} width={"95vw"} />
        </Provider>
      );
    });
    const text = await screen.findByText(/ethereum/i);
    expect(text).toBeInTheDocument();
  });

  test("should render the coin info with all provided props", async () => {
    mockedAxios.get.mockRejectedValue(new Error("mocked"));
    act(() => {
      render(
        <Provider store={mockStore}>
          <CoinInfo coinId={2} height={"15vh"} width={"95vw"} />
        </Provider>
      );
    });
    const text = await screen.findByText(/ethereum/i);
    expect(text).toBeInTheDocument();
  });

  test("should add to watchlist on button click", async () => {
    mockedAxios.get.mockRejectedValue(new Error("mocked"));
    mockedAxios.get.mockImplementation((url: string) => {
      if (url === API_GATEWAY_URL + "/cryptocurrency/2") {
        return Promise.resolve({
          data: {
            id: 2,
            name: "Bitcoin",
            symbol: "BTC",
            marketCap: "$1",
            created: "2022-12-23",
            price: 1,
            priceAt1D: 1,
            priceAt1W: 1,
            priceAt1M: 1,
            totalSupply: "$11.5T",
            priceAt1H: 1,
            circulatingSupply: "11T USD",
            priceChange: 2.6,
          },
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
      } else {
        return Promise.resolve({
          data1: [
            {
              id: 1,
              name: "BitCoin Wallet",
              // balance: 1.23,
              userId: 1,
              cryptoCurrencyId: 1,
              priceChange: 1.6,
            },
          ],
        });
      }
    });
    mockedAxios.post.mockResolvedValue({});
    mockedAxios.put.mockResolvedValue({});
    act(() => {
      render(
        <Provider store={mockStore}>
          <CoinInfo coinId={2} height={"15vh"} width={"95vw"} />
        </Provider>
      );
    });
   const buttonElement = screen.getByRole("button", { name: /ADD TO WATCHLIST/i }); // Update with the correct button text if needed
   expect(buttonElement).toBeInTheDocument();
   fireEvent.click(buttonElement);
  });
});
