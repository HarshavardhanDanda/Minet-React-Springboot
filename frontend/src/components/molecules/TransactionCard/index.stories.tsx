import React from "react";
import { Story, Meta } from "@storybook/react";
import TransactionCard, { TransactionCardProps } from "./index";
import dots from "../../../../public/assets/Images/3dots.svg";
import Failed from "../../../../public/assets/Images/failed.svg";
import Success from "../../../../public/assets/Images/success.svg";


export default {
  title: "molecules/TransactionCard",
  component: TransactionCard,
  argTypes: {
    src: { control: "text" },
    coinName: { control: "text" },
    coinDescription: { control: "text" },
    valueBTC: { control: "text"},
    value: {control: "text"},
    month: {control: "text"},
    date: {control: "text",}
  },
} as Meta;

const Template: Story<TransactionCardProps> = (args) => <TransactionCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: dots,
  coinName: "Bitcoin",
  coinDescription: "From Badgley",
  valueBTC: "+0.0010 BTC",
  value: "+$900",
  date: "2023-06-15",
};

export const Coin1 = Template.bind({});
Coin1.args = {
  src: Failed,
  coinName: "Bitcoin",
  coinDescription: "From Badgley",
  valueBTC: "+0.0230 BTC",
  value: "+$1800",
  date: "2023-06-16",
};

export const Coin2 = Template.bind({});
Coin2.args = {
  src: Success,
  coinName: "Bitcoin",
  coinDescription: "From Leslie Alexander",
  valueBTC: "+0.0030 BTC",
  value: "+$1,200",
  date: "2023-06-17",
};