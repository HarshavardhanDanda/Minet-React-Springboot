import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import Avatar from ".";
import Profile from "../../../../public/assets/Images/profile.svg";

const meta: Meta<typeof Avatar> = {
  title: "atoms/avatar",
  component: Avatar,
  argTypes: {
    src: { control: { type: "file", accept: ".svg" } },
    sx: { control: "object" },
    variant: {
      options: ["circular", "rounded", "square"],
      control: { type: "radio" },
    },
    onClick: { control: { action: "clicked" } },
  },
};

export default meta;

type story = StoryObj<typeof Avatar>;

export const defaultAvatar: story = {
  render: () => {
    return <Avatar src={Profile} />;
  },
};
