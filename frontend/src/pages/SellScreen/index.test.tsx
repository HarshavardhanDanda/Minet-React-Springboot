// Import necessary testing libraries
import { act, fireEvent, render, screen } from "@testing-library/react";
import SellScreenPage from ".";
import React from "react";
import "@testing-library/jest-dom";
import SellTotalBalance from "../../components/molecules/SellTotalBalance";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import mockStore from "../../mocks/mockStore/store";
import { API_GATEWAY_URL } from "../../constants";
import userEvent from "@testing-library/user-event";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe("SellScreenPage", () => {
  beforeEach(() => {
    jest
      .spyOn(require("react-router-dom"), "useParams")
      .mockReturnValue({ coinId: 1 });
    mockedAxios.get.mockImplementation((url: string) => {
      if (url === API_GATEWAY_URL + "/cryptocurrency/1") {
        return Promise.resolve({
          data: {
            id: 1,
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
      } else if (
        url ===
        API_GATEWAY_URL + "/wallets?cryptoCurrencyId=1&userId=1"
      ) {
        return Promise.reject(new Error("Failed to fetch cryptocurrency data"));
      } else if (url === API_GATEWAY_URL + "/cryptocurrency") {
        return Promise.resolve({
          data: [
            {
              id: 1,
              name: "Bitcoin",
              symbol: "BTC",
              marketCap: "$1",
              created: "2022-12-23",
              price: 100,
              priceAt1D: 1,
              priceAt1W: 1,
              priceAt1M: 1,
              totalSupply: "$11.5T",
              priceAt1H: 1,
              circulatingSupply: "11T USD",
              priceChange: 2.6,
            },
            {
              id: 2,
              name: "Bitcoin",
              symbol: "BTC",
              marketCap: "$1",
              created: "2022-12-23",
              price: 100,
              priceAt1D: 1,
              priceAt1W: 1,
              priceAt1M: 1,
              totalSupply: "$11.5T",
              priceAt1H: 1,
              circulatingSupply: "11T USD",
              priceChange: 2.6,
            },
            {
              id: 3,
              name: "Bitcoin",
              symbol: "BTC",
              marketCap: "$1",
              created: "2022-12-23",
              price: 100,
              priceAt1D: 1,
              priceAt1W: 1,
              priceAt1M: 1,
              totalSupply: "$11.5T",
              priceAt1H: 1,
              circulatingSupply: "11T USD",
              priceChange: 2.6,
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
  });

  test("renders Sell Crypto subtitle", () => {

    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <SellScreenPage />
        </BrowserRouter>
      </Provider>
    );
    const subtitle = screen.getByText("Sell Crypto");
    expect(subtitle).toBeInTheDocument();
    act(()=> {
    fireEvent.click(screen.getByText(/sell now/i));
    })
  });

  test("renders Sell Crypto subtitle else condition", () => {
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
      } else if (url === API_GATEWAY_URL + "/cryptocurrency") {
        return Promise.resolve({
          data: [
            {
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
          ],
        });
      } else if (
        url ===
        API_GATEWAY_URL + "/wallets?cryptoCurrencyId=3&userId=1"
      ) {
        return Promise.resolve({
          data: {
            id: 3,
            name: "USD Coin Wallet",
            balance: 60000000,
            cryptoCurrencyId: 1,
            priceChange: 6000000,
            userId: 1,
          },
        });
      } else if (
        url ===
        API_GATEWAY_URL + "/wallets?cryptoCurrencyId=1&userId=1"
      ) {
        return Promise.resolve({
          data: {
            id: 3,
            name: "USD Coin Wallet",
            balance: 232050.98011050798,
            cryptoCurrencyId: 1,
            priceChange: 0,
            userId: 1,
          },
        });
      } else {
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
      }
    });
    mockedAxios.post.mockResolvedValue({});
    mockedAxios.put.mockResolvedValue({});
    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <SellScreenPage />
        </BrowserRouter>
      </Provider>
    );
    const subtitle = screen.getByText("Sell Crypto");
    expect(subtitle).toBeInTheDocument();
    act(() => {
      fireEvent.click(screen.getByText(/sell now/i));
    });
  });

  test("renders ChooseCurrency component with coinId prop", () => {
    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <SellScreenPage />
        </BrowserRouter>
      </Provider>
    );
    const chooseCurrencyComponent = screen.getByTestId("chooseCurrency");
    expect(chooseCurrencyComponent).toBeInTheDocument();
  });

  test("renders SellTotalBalance component with balance, symbol, src, and coinName props", () => {
    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <SellTotalBalance
            balance={0}
            symbol="BTC"
            src="bitcoin.svg"
            coinName="Bitcoin"
          />
        </BrowserRouter>
      </Provider>
    );

    const sellTotalBalanceComponent = screen.getByTestId("sellTotalBalance");
    expect(sellTotalBalanceComponent).toBeInTheDocument();

    const balanceTypography = screen.getByText(/Total Balance/i);
    expect(balanceTypography).toBeInTheDocument();

    const balanceValue = screen.getByText("Bitcoin");
    expect(balanceValue).toBeInTheDocument();
  });
});
