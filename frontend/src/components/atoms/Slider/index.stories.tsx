import { ThemeProvider } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import  {SliderBar}  from ".";

import React from "react";
import theme from "../../../theme";
export default {
  title: "atoms/Slider",
  component: SliderBar,
} as ComponentMeta<typeof SliderBar>;

const Template: ComponentStory<typeof SliderBar> = (args) => <ThemeProvider theme={theme}><SliderBar {...args} /></ThemeProvider>;

export const Slider = Template.bind({});
Slider.args = {
  sx:{color:theme.palette.grey[400],height:"300px"}
}