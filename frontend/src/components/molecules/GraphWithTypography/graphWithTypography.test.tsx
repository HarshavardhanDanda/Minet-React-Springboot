import React from "react";
import GraphWithTypogeaphy from ".";
import { screen, render, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import theme from "../../../theme";
jest.mock("react-apexcharts", () => ({
  __esModule: true,
  default: () => <div />,
}));

describe("test for the graph with typography component", () => {
  test("should display the typography and the graph", () => {
    const { container } = render(
      <GraphWithTypogeaphy
        componentSx={{ width: "188.5px", height: "73px" }}
        typographyColor={theme.palette.primary.success500!}
        text="+12%"
        graphData={[11, 6, 22, 13, 2, 44, 5]}
        graphHeight={"68.5px"}
        graphWidth={"188.5px"}
        graphColor={theme.palette.primary.success500}
      />
    );
    expect(container).toBeInTheDocument();
  });
  test("should display the typography and the graph", () => {
    const { container } = render(
      <GraphWithTypogeaphy
        typographyColor={theme.palette.primary.warning300!}
        text="+12%"
        graphData={[11, 6, 22, 13, 2, 44, 5]}
      />
    );
    expect(container).toBeInTheDocument();
  });
});
