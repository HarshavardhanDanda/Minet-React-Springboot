import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import TransactionSuccess from './index'

export default {
  title: 'organisms/TransactionSuccess',
  component: TransactionSuccess,
} as ComponentMeta<typeof TransactionSuccess>

const Template: ComponentStory<typeof TransactionSuccess> = (args: any) => (
  <TransactionSuccess {...args} />
)

export const TransactionSuccessBuy = Template.bind({})
TransactionSuccessBuy.args = {
  successType: 'buy',
  price: '0.0234510 BTC',
}

export const TransactionSuccessSell = Template.bind({})
TransactionSuccessSell.args = {
  successType: 'sell',
  price: '0.0234510 BTC',
}