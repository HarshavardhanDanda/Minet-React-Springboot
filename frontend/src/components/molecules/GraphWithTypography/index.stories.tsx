import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import GraphWithTypogeaphy from ".";
import theme from "../../../theme";

const meta: Meta<typeof GraphWithTypogeaphy> = {
  title: "molecules/graphWithTypography",
  component: GraphWithTypogeaphy,
  tags: ["autodocs"],
};

export default meta;

type story = StoryObj<typeof GraphWithTypogeaphy>;

export const defaultGraph: story = {
  render: (props) => {
    return <GraphWithTypogeaphy {...props} />;
  },

  args: {
    componentSx: { width: "188.5px", height: "73px" },
    typographyColor: theme.palette.primary.success500!,
    text: "+12%",
    graphData: [11, 6, 22, 13, 2, 44, 5],
    graphHeight: "68.5px",
    graphWidth: "188.5px",
    graphColor: theme.palette.primary.success500,
  },
};

