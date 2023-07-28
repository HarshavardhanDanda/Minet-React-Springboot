
import React from "react";
import { Story, Meta } from "@storybook/react";
import Balance, { BalnceMethodProps } from ".";
import bitcoin  from "../../../../public/assets/Images/coins/Bitcoin Coin.svg";
import ethereum  from "../../../../public/assets/Images/coins/ethereum2.svg";


export default {
  title: "molecules/SellTotalBalance",
  component: Balance,
} as Meta;

const Template: Story<BalnceMethodProps> = (args) => <Balance {...args} />;

export const Default = Template.bind({});
Default.args = {
  balance: 5000,
  coinName: "Bitcoin",
  symbol: "BTC",
  src: bitcoin,
};

export const primary = Template.bind({});
primary.args = {
  balance: 5000,
  coinName: "Bitcoin",
  symbol: "BTC",
  src: ethereum,
};





