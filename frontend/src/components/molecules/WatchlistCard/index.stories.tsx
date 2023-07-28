import React from "react";
import { Story, Meta } from "@storybook/react";
import WatchlistCard, { WatchlistCardProps } from "./index";
import Bitcoin from "../../../../public/assets/Images/coins/bitcoin.svg"

export default {
  title: "molecules/WatchlistCard",
  component: WatchlistCard,
} as Meta;

const Template: Story<WatchlistCardProps> = (args) => <WatchlistCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: Bitcoin,
  coinName: "Bitcoin",
  price: 51000,
  priceChange: 2.3,
  graphData: [1, 2, 3, 4, 5],
};
