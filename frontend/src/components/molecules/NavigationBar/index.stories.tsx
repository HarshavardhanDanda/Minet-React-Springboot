import React from "react";
import { Story } from "@storybook/react";
import SideNavComponent from ".";

export default {
  title: "molecules/SideNavComponent",
  component: SideNavComponent,
};

interface IconProps {
  showCheckIcon: boolean;
}

const Template: Story<IconProps> = (args) => <SideNavComponent {...args} />;

export const WithActiveDashboard = Template.bind({});
WithActiveDashboard.args = {
  showCheckIcon: true,
};

export const WithoutActiveDashboard = Template.bind({});
WithoutActiveDashboard.args = {
  showCheckIcon: false,
};
