import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import AvatarDropdown from ".";

const meta: Meta<typeof AvatarDropdown> = {
  title: "molecules/avatarDropdown",
  component: AvatarDropdown,
};

export default meta;

type story = StoryObj<typeof AvatarDropdown>;

export const defaultAvatarDropdown: story = {
  render: () => {
    return <AvatarDropdown />;
  },
};
