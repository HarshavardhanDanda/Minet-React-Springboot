import React from "react";
import { Story, Meta } from "@storybook/react";
import PriceCorrelation from "../PriceCorrelation";

export default {
  title: "Organisms/PriceCorrelation",
  component: PriceCorrelation,
} as Meta;

const Template: Story = () => <PriceCorrelation />;

export const Default = Template.bind({});