import { act, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import ChooseCurrency, { Cryptocurrency } from ".";
import "@testing-library/jest-dom";
import axios from "axios";
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();
const store = mockStore({user: {id: 1, emailId: "email", password: "password"}, token: "token"});

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("choose crypto testcases", () => {
  it("should render the cards", async () => {
    const mockData = [
      {
        id: 1,
        name: "Bitcoin",
        symbol: "BTC",
        marketCap: "$1",
        created: "2022-12-23",
        price: 1,
        priceAt1H: 1,
        priceAt1D: 1,
        priceAt1W: 1,
        priceAt1M: 1,
        totalSupply: "$11.5T",
        circulatingSupply: "11T USD",
        priceChange: 2.6,
      },
    ];

    mockedAxios.get.mockResolvedValue({ data: mockData });
    render(<Provider store={store}><ChooseCurrency coinId={1} /></Provider>);
    await waitFor(() => {
      const bitcoinCard = screen.getByText("Bitcoin");
      expect(bitcoinCard).toBeInTheDocument();
    });
  });
});
