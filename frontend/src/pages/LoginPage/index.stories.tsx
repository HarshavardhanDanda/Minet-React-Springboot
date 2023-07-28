import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import LoginPage from ".";

export default {
  title: "Templates/LoginPage",
  component: LoginPage,
} as Meta;

const Template: StoryFn = () => <LoginPage />;

export const Default = Template.bind({});
