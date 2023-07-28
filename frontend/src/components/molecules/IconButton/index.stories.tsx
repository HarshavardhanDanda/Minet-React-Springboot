import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import IconButton from ".";
import google from "../../../../public/assets/icons/google.svg";
import facebook from "../../../../public/assets/icons/stripe.svg";
import microsoft from "../../../../public/assets/icons/xero.svg";
import bluestar from "../../../../public/assets/icons/bluestar.svg";

export default {
  title: "molecules/IconButton",
  component: IconButton,
} as Meta;

const Template: StoryFn = (args: any) => <IconButton {...args} />;

export const Google = Template.bind({});
export const Facebook = Template.bind({});
export const Microsoft = Template.bind({});
export const AddedToWatchlist = Template.bind({});

Google.args = {
  src: google,
  text: "Google",
};

Facebook.args = {
  src: facebook,
  text: "Facebook",
};

Microsoft.args = {
  src: microsoft,
  text: "Microsoft"
};

AddedToWatchlist.args = {
  src: bluestar,
  text: "ADDED TO WATCHLIST",
  sx: {
    width: "215px",
    height: "42px",
    border: "1px solid #0052FF",
    display: "flex",
    flexDirection: "row",
    gap: "4px",
    padding: "0px, 16px, 0px, 8px",
    borderRadius: "4px",
  },
  styleIcon: { iconWidth: "19px", iconHeight: "18px" },
  textVariant: "button",
  styleText: { color: "#0052FF" }
};
