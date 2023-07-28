import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import PurchaseScreenPage from ".";
import "@testing-library/jest-dom";
import axios from "axios";
import { API_GATEWAY_URL } from "../../constants";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import mockStore from "../../mocks/mockStore/store";
import { act } from "react-dom/test-utils";

jest.mock("react-apexcharts", () => ({
  __esModule: true,
  default: () => <div />,
}));
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // Keep all original functionalities
  useParams: () => ({
    coinId: 1, // Set the desired mocked coinId value
  }),
}));
describe("PurchaseScreenPage", () => {
  beforeEach(() => {
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
        API_GATEWAY_URL + "/wallets?cryptoCurrencyId=1&userId=1"
      ) {
        return Promise.reject(new Error("Failed to fetch cryptocurrency data"));
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
  });
  it("renders without errors", () => {
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
          data: 
            {
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
          data: 
            {
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
          <PurchaseScreenPage />
        </BrowserRouter>
      </Provider>
    );
    act(() => {
      fireEvent.click(screen.getByText(/buy now/i));
    });
  });

  it("renders without errors if condition", () => {
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
          data: 
            {
              id: 3,
              name: "USD Coin Wallet",
              balance: 0,
              cryptoCurrencyId: 1,
              priceChange: 0,
              userId: 1,
            },
        });
      } else if (
        url ===
        API_GATEWAY_URL + "/wallets?cryptoCurrencyId=1&userId=1"
      ) {
        return Promise.resolve({
          data: 
            {
              id: 3,
              name: "USD Coin Wallet",
              balance: 500000000,
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
          <PurchaseScreenPage />
        </BrowserRouter>
      </Provider>
    );
    act(() => {
      fireEvent.click(screen.getByText(/buy now/i));
    });
  });

  it("displays the correct page name in the header", () => {
    const { getByText } = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <PurchaseScreenPage />
        </BrowserRouter>
      </Provider>
    );
    const headerElement = getByText("Checkout");
    expect(headerElement).toBeInTheDocument();
  });

  it("renders the 'Buy Crypto' title", () => {
    const { getByText } = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <PurchaseScreenPage />
        </BrowserRouter>
      </Provider>
    );
    const titleElement = getByText("Buy Crypto");
    expect(titleElement).toBeInTheDocument();
  });
});
