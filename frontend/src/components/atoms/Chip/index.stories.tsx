import { ComponentStory, ComponentMeta } from '@storybook/react'
import theme from '../../../theme'
import ChipItem from '.'
import React from 'react'


export default {
  title: 'Atoms/ChipItem',
  component: ChipItem,
} as ComponentMeta<typeof ChipItem>

const Template: ComponentStory<typeof ChipItem> = (args) => (
  <ChipItem {...args} />
)

export const ChipItemRoundedLight = Template.bind({})

ChipItemRoundedLight.args = {
  label: '24 h',
  chipvariant: 'light',
  chiptype: 'rounded'
}

export const ChipItemRoundedDark = Template.bind({})

ChipItemRoundedDark.args = {
  label: 'Purchased',
  chipvariant: 'dark',
  chiptype: 'rounded'
}

export const ChipItemSquaredSelected = Template.bind({})

ChipItemSquaredSelected.args = {
  chiptype: 'squared',
  chipcolor: theme.palette.chipColors.main,
  label: 'Bitcoin',
  selected: true
}

export const ChipItemSquaredUnselected = Template.bind({})

ChipItemSquaredUnselected.args = {
  chiptype: 'squared',
  chipcolor: theme.palette.chipColors.main,
  label: 'Bitcoin',
  selected: false
}