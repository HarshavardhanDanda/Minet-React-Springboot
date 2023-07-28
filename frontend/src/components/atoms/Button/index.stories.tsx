import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Button from ".";
import theme from "../../../theme";

export default {
  title: "Atoms/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Outlined = Template.bind({});
export const Text = Template.bind({});
export const DashBoard = Template.bind({});
export const Buy = Template.bind({});
export const BuyNow = Template.bind({});
export const Sell = Template.bind({});

Outlined.args = {
  variant: "outlined",
  children: "BUY CRYPTO",
  sx: {
    color: theme.palette.primary.primary500,
  }
};

Text.args = {
  variant: "text",
  children: "Text",
  sx: {
    color: theme.palette.primary.primary500,
  }
};

DashBoard.args = {
  variant: "contained",
  children: "DASHBOARD",
  backgroundColor: theme.palette.primary.primary500,
};

Sell.args = {
  variant: "contained",
  children: "SELL",
  backgroundColor: "#FFA74F",
  sx: {
    borderRadius: "4px",
    padding: "0px 16px 0px 16px",
    width: "120px",
    height: "42px",
  },
};

Buy.args = {
  variant: 'contained',
  children: 'BUY',
  backgroundColor: theme.palette.primary.primary500,
  sx: {
    borderRadius: '4px',
    padding: '0px 16px 0px 16px',
    width: '120px',
    height: '42px',
  }
};
  
BuyNow.args = {
  variant: "contained",
  children: "BUY NOW",
  backgroundColor: theme.palette.primary.primary500,
  sx: {
    borderRadius: "4px",
    padding: "0px 16px 0px 16px",
    width: "479px",
    height: "42px",
  },
};
