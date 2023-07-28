
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import DeliveryDropdown from './index'

export default {
  title: 'molecules/DeliveryDropdown',
  component: DeliveryDropdown,
} as ComponentMeta<typeof DeliveryDropdown>

const Template: ComponentStory<typeof DeliveryDropdown> = (args) => (
  <div style={{ width: '36rem' }}>
    <DeliveryDropdown {...args} />
  </div>
)

export const primary = Template.bind({})

primary.args = {
  instantTime: '3-5',
  fee: '0.001',
  title: 'Select speed delivery',
}




