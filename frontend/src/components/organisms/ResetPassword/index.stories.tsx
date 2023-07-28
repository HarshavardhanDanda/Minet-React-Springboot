import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import ResetPassword from ".";

export default {
  title: "Organisms/Reset Password",
  component: ResetPassword,
} as Meta<typeof ResetPassword>;

const Template: StoryFn<typeof ResetPassword> = () => <ResetPassword />;

export const Reset_Password = Template.bind({});

