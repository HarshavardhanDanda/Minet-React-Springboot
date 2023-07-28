import React from "react";
import Graph from ".";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
jest.mock("react-apexcharts", () => ({
  __esModule: true,
  default: () => <div />,
}));

describe("test for the graph component", () => {
  test("should render the area graph", () => {
    render(
      <Graph
        series={[{ name: "bitcoin", data: [7, 23, 31, 61, 43, 51] }]}
        type="area"
        showLegend={false}
        colors={["#FF0000"]}
      />
    );
    const graph = screen.getByTestId("graph-component");
    expect(graph).toBeInTheDocument();
  });
  test("should render the area graph with given offset and box props", () => {
    render(
      <Graph
        series={[{ name: "bitcoin", data: [7, 23, 31, 61, 43, 51] }]}
        type="area"
        showLegend={false}
        colors={["#FF0000"]}
        height={"100%"}
        width={"100%"}
        boxSx={{ width: "700px", height: "300px" }}
        offSetY={0}
      />
    );
    const graph = screen.getByTestId("graph-component");
    expect(graph).toBeInTheDocument();
  });
});
