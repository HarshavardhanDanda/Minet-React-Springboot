import React from "react";
import { Story, Meta } from "@storybook/react";
import PriceCorrelationCard, { PriceCorrelationCardProps } from "./index";
import Bitcoin from "../../../../public/assets/Images/coins/bitcoin2.svg";
import Ethereum from "../../../../public/assets/Images/coins/ethreum.svg";
import XRP from "../../../../public/assets/Images/coins/XRP.svg";
import Tether from "../../../../public/assets/Images/coins/tether.svg";

export default {
  title: "molecules/priceCorrelationCard",
  component: PriceCorrelationCard,
} as Meta;

const Template: Story<PriceCorrelationCardProps> = (args) => (
  <PriceCorrelationCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Price Correlation",
  src: Bitcoin,
  label: "Bitcoin",
  description: "Moves tightly together",
  amount: "$3,285,533.73",
  percentage: "100%",
};

export const Coin2 = Template.bind({});
Coin2.args = {
  title: "Price Correlation",
  src: Ethereum,
  label: "Ethereum",
  description: "Moves tightly together",
  amount: "$230,966.85",
  percentage: "86%",
};

export const Coin3 = Template.bind({});
Coin3.args = {
  title: "Price Correlation",
  src: XRP,
  label: "XRP",
  description: "Moves tightly together",
  amount: "$60.20",
  percentage: "10%",
};

export const Coin4 = Template.bind({});
Coin4.args = {
  title: "Price Correlation",
  src: Tether,
  label: "Tether",
  description: "Moves tightly together",
  amount: "$74.28",
  percentage: "2%",
};