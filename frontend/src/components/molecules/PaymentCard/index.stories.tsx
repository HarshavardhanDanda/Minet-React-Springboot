import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import PaymentMethod from "./index";

export default {
  title: "Molecules/PaymentMethod",
  component: PaymentMethod,
} as Meta;

const Template: StoryFn<typeof PaymentMethod> = (args) => (
  <PaymentMethod {...args} />
);

export const Payment_Method = Template.bind({});

Payment_Method.args = {
  balance: 34000.0,
};
