import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import DropDownComponent from './index'
import AvatarComponent from './index'
import theme from '../../../theme'

export default {
  title: 'molecules/DropDownComponent',
  component: DropDownComponent,
} as ComponentMeta<typeof DropDownComponent>

const Template: ComponentStory<typeof DropDownComponent> = (args: any) => (
  <AvatarComponent {...args} />
)
const handleChange =() => {
};

export const TimeDropDown = Template.bind({})
TimeDropDown.args = {
  onChange: handleChange,
  menuList: ["1H","24H","1W","1M","1Y","ALL"],
  width:"77px",
  variant:"body1",
  fontColor: theme.palette.greyColors.grey500
}

export const LangugaeDropDown = Template.bind({})
LangugaeDropDown.args = {
  onChange: handleChange,
  menuList: ["English","Telugu","Hindi"],
  width: "170px",
  variant:"body2",
  fontColor: theme.palette.textColor.highEmphasis,
}

export const AssetsDropDown = Template.bind({})
AssetsDropDown.args = {
  onChange: handleChange,
  menuList: ["All Assets"],
  width: "130px",
  variant:"body1",
  fontColor: theme.palette.greyColors.grey500
}