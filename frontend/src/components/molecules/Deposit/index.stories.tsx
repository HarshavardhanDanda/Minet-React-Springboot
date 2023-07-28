
import React from "react";
import { Story, Meta } from "@storybook/react";

import bitcoin  from "../../../../public/assets/Images/coins/Bitcoin Coin.svg";
import ethereum  from "../../../../public/assets/Images/coins/ethereum2.svg";
import Deposit, { DepositMethodProps } from ".";
import USD from "../../../../public/assets/Images/coins/USD Coin.svg"


export default {
  title: "molecules/Deposit",
  component: Deposit,
} as Meta;

const Template: Story<DepositMethodProps> = (args) => <Deposit {...args} />;

export const Default = Template.bind({});
Default.args = {

  src: USD,
};







