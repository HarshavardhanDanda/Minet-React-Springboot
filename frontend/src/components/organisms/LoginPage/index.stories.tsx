import React from 'react';
import { Story, Meta } from '@storybook/react';
import Login from './index';

export default {
  title: 'organisms/Login',
  component: Login,
} as Meta;

const Template: Story = (args) =><Login {...args} />;

export const Default = Template.bind({});
Default.args = {};