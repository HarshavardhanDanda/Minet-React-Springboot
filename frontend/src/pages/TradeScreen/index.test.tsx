import React from "react";
import { render } from "@testing-library/react";
import TradeScreen from "./index";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import mockStore from "../../mocks/mockStore/store";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("STradeScreen Page", () => {
  it("should renders without errors", () => {
    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <TradeScreen />
        </BrowserRouter>
      </Provider>
    );
  });

  beforeEach(() => {
    mockedAxios.get.mockImplementation((url: string) => {
      if (url === "https://bc88-ms.fe-assignment.tk/portfolio/watchLists?userId=1") {
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
});
