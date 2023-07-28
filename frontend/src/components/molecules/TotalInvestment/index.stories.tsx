import React from "react";
import { Story, Meta } from "@storybook/react";
import TotalInvestment, { TotalInvestmentProps } from "./index";

export default {
  title: "molecules/totalInvestment",
  component: TotalInvestment,
} as Meta;

const Template: Story<TotalInvestmentProps> = (args) => (
  <TotalInvestment {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Total Investement",
  value: "$0.00",
  changePercentage: "+1.00%",
};