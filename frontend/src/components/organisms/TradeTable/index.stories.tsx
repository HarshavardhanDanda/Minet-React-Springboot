// Import necessary dependencies for Storybook
import React from 'react';
import { Story, Meta } from '@storybook/react';
import TradeFrame from '.';
import { TradeFrameData } from '../../../constants';


export default {
  title: 'Organisms/TradeFrame',
  component: TradeFrame,
} as Meta;


const Template: Story = () => <TradeFrame tableData={TradeFrameData} />;

export const Default = Template.bind({});
Default.args = {};

