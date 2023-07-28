import React from "react";
import CoinInfo from ".";
import { StoryObj, Meta } from "@storybook/react";

const meta: Meta<typeof CoinInfo> = {
  title: "organisms/coinInfo",
  component: CoinInfo,
};

export default meta;

type story = StoryObj<typeof CoinInfo>;

export const ethereum: story = {
  render: (props) => {
    return <CoinInfo {...props} />;
  },
  args: {
    height: "15vh",
    width: "96vw",
    coinId: 2,
  },
};
