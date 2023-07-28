import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Image from "./index";
import login from "../../../../public/assets/Images/login.svg";
import signup from "../../../../public/assets/Images/signup.svg";
import noGraphAlt from "../../../../public/assets/Images/noGraphAlt.svg";
import recentTransactionAlt from "../../../../public/assets/Images/recentTransactionAlt.svg";

export default {
  title: "atoms/Image",
  component: Image,
} as Meta;

const Template: StoryFn = (args: any) => <Image {...args} />;

export const Login = Template.bind({});
export const Signup = Template.bind({});
export const NoGraphAlt = Template.bind({});
export const RecentTransactionAlt = Template.bind({});

Login.args = {
  src: login,
  height: "400px",
  width: "380px"
};

Signup.args = {
  src: signup,
  height: "400px",
  width: "380px",
};

NoGraphAlt.args = {
  src: noGraphAlt,
  height: "223px",
  width: "297px",
};

RecentTransactionAlt.args = {
  src: recentTransactionAlt,
  height: "61px",
  width: "162px",
};
