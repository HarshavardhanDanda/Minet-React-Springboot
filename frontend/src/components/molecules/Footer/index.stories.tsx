import React from 'react';
import { Meta, Story } from '@storybook/react';
import Footer from '.';



export default {
  title: 'molecules/Footer',
  component: Footer,
} as Meta;

const Template: Story = () => <Footer />;

export const Default = Template.bind({});
