import React from "react";
import Graph from ".";
import { StoryObj, Meta } from "@storybook/react";

const meta: Meta<typeof Graph> = {
  title: "molecules/graph",
  tags: ["autodocs"],
  component: Graph,
};

export default meta;

type story = StoryObj<typeof Graph>;

export const demoGraph: story = {
  render: (props) => {
    return <Graph {...props} />;
  },
  args: {
    showGrid: true,
    showXaxis: true,
    xAxisCategories: ["jun 8", "jun 15", "jun 22", "jun 29", "jul 6", "jul13"],
    series: [
      { name: "total investment", data: [4, 6, 5, 7, 9] },
      { name: "bitcoin", data: [4, 7, 8, 10, 9.5] },
    ],
    showLegend: true,
    legendPosition: "top",
    legendHorizontalPosition: "right",
    colors: ["#0052FF", "#FFA74F"],
    type: "area",
    strokeCurve: "smooth",
    height: "100%",
    width: "100%",
  },
};
