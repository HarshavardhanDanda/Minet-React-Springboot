import React from "react";
import { Story } from "@storybook/react";
import WalletBalance, { WalletBalanceProps } from "../WalletBalance";
import Dollar from "../../../../public/assets/Images/dollar.svg"

export default {
  title: "molecules/WalletBalance",
  component: WalletBalance,
};

const Template: Story<WalletBalanceProps> = (args) => <WalletBalance {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: Dollar,
  coinHeight: "56px",
  coinWidth: "56px",
  coinName: "USD Coin",
  coinDescription: "Cash",
  typographyChildren: "Total balance",
  button1: "CASH DEPOSIT",
  button2: "WITHDRAWAL",
  label: "Wallet",
  value: "$34,000",
  buttonHeight: "42px",
};
