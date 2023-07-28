import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import TradeFrame from ".";
import { TradeFrameData } from "../../../constants";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import Bitcoin from "../../../../public/assets/Images/coins/bitcoin.svg";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import mockStore from "../../../mocks/mockStore/store";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("trade table", () => {
  beforeEach(() => {
    mockedAxios.get.mockImplementation((url: string) => {
      if (
        url === "https://bc88-be.fe-assignment.tk/portfolio/watchLists?userId=1"
      ) {
        return Promise.resolve({
          data: [
            {
              id: 1,
              userId: 1,
              cryptoCurrencyId: 2,
            },
          ],
        });
      } else {
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
      }
    });
    mockedAxios.post.mockResolvedValue({});
    mockedAxios.delete.mockResolvedValue({});
  });

  test("should renders table headers correctly", () => {
    const { getByText } = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <TradeFrame tableData={[]} />
        </BrowserRouter>
      </Provider>
    );

    expect(getByText("Name")).toBeInTheDocument();
    expect(getByText("Price")).toBeInTheDocument();
    expect(getByText("Change")).toBeInTheDocument();
    expect(getByText("Market Cap")).toBeInTheDocument();
    expect(getByText("Watch")).toBeInTheDocument();
  });

  test("should renders table rows for TradeFrameData", () => {
    const { getAllByTestId } = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <TradeFrame tableData={TradeFrameData} />
        </BrowserRouter>
      </Provider>
    );

    const tableRows = getAllByTestId("table-row");
    expect(tableRows.length).toBe(TradeFrameData.length);
    act(() => {
    fireEvent.click(tableRows[0]);
    })
  });

  test("should renders TradeFrame component", async () => {
    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <TradeFrame
            tableData={[
              {
                src: Bitcoin,
                coinHeight: "42px",
                coinWidth: "42px",
                coinName: "Bitcoin",
                symbol: "BTC",
                priceChange: 1.06,
                price: 3285553.73,
                marketCap: "$60.1T",
                checked: false,
                cryptoId: 1,
              },
              {
                src: Bitcoin,
                coinHeight: "42px",
                coinWidth: "42px",
                coinName: "Bitcoin",
                symbol: "BTC",
                priceChange: 1.06,
                price: 3285553.73,
                marketCap: "$60.1T",
                checked: false,
                cryptoId: 2,
              },
            ]}
          />
        </BrowserRouter>
      </Provider>
    );
    const box = await screen.findAllByRole("checkbox");
    expect(box[1]).toBeInTheDocument();
    act(() => {
      fireEvent.click(box[1]);
    });
    const tab = screen.getByText("Watchlist");
    expect(tab).toBeInTheDocument();
    act(() => {
      fireEvent.click(tab);
    });
    const search = screen.getByRole("textbox");
    expect(search).toBeInTheDocument();
    act(() => {
      fireEvent.change(search, { target: { value: "Bitcoin" } });
    });
  });
});
