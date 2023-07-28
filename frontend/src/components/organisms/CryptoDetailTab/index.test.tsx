import React from "react";
import CryptoDetailsTab from ".";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import UpArrow from "../../../../public/assets/icons/UpwardArrow.svg";
import theme from "../../../theme";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

jest.mock("react-apexcharts", () => ({
  __esModule: true,
  default: () => <div />,
}));

const componentProps = {
  coinCost: "$3,285,553.73",
  iconSrc: UpArrow,
  textColor: theme.palette.primary.success500,
  percantage: "+8.6%",
  graphColor: ["#FFA74F"],
  graphdata: [{ name: "bitcoin", data: [8, 3, 12, 7, 5] }],
  graphXaxisLabels: ["jun 10", "jun 14", "jun 20", "jun 28", "jul 4"],
  wallet: <></>,
};

describe("test for the crypto details tab", () => {
  test("should render the crypto details tab", () => {
    render(
      <BrowserRouter>
        <CryptoDetailsTab
          coinCost={componentProps.coinCost}
          iconSrc={componentProps.iconSrc}
          textColor={componentProps.textColor!}
          percantage={componentProps.percantage}
          graphColor={componentProps.graphColor}
          graphdata={componentProps.graphdata}
          graphXaxisLabels={componentProps.graphXaxisLabels}
          wallet={componentProps.wallet}
          coinId={1}
        />
      </BrowserRouter>
    );
    const component = screen.getByTestId("cryptoDetailsTab");
    expect(component).toBeInTheDocument();
    expect(screen.getByTestId("graph-component")).toBeInTheDocument();
    const tab = screen.getByText("Wallet");
    expect(tab).toBeInTheDocument();
    act(() => {
      fireEvent.click(tab);
    });
  });
});
