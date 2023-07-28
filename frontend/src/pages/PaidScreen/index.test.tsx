import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PaidScreen from ".";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import mockStore from "../../mocks/mockStore/store";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));
describe("PaidScreen", () => {
  it("renders the PaidScreen component correctly", () => {
    jest
      .spyOn(require("react-router-dom"), "useParams")
      .mockReturnValue({ type: "sell", price: "1234" });
    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <PaidScreen />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getAllByText("Dashboard")[0]).toBeInTheDocument();
    expect(screen.getByText("SELL")).toBeInTheDocument();
  });
});
