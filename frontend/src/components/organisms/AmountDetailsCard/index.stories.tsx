import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import AmountDetailsCard from "./index";

export default {
  title: "organisms/AmountDetailsCard",
  component: AmountDetailsCard,
} as Meta;

const Template: StoryFn<typeof AmountDetailsCard> = (args) => (
  <AmountDetailsCard {...args} />
);

export const BuyCard = Template.bind({});
BuyCard.args = {
  coin: "BTC",
  coinValue: 3406069.54,
  totalBalance: 3000.9876,
  isBuycard:true,
  
};

export const SellCard = Template.bind({});
SellCard.args = {
  coin: "BTC",
  coinValue: 3406069.54,
  totalBalance: 3000.9876,
  coinQuantity:2,
  isBuycard:false
  
};