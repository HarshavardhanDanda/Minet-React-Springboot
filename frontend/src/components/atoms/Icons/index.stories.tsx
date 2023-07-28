import IconComponent from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Chart from "../../../../public/assets/icons/chart.svg";
import Switch from "../../../../public/assets/icons/switch.svg";


import React from "react";

export default {
  title: "atoms/IconComponent",
  component: IconComponent,
} as ComponentMeta<typeof IconComponent>;

const Template: ComponentStory<typeof IconComponent> = (args: any) => (
  <IconComponent {...args} />
);

export const IconComponentStory = Template.bind({});
IconComponentStory.args = {
  height: "32px",
  width: "32px",
  padding:"10px",
  src:Chart,
  
};

export const IconComponentStory1 = Template.bind({});
IconComponentStory1.args = {
  height: "32px",
  width: "32px",
  src:Switch,

 
};