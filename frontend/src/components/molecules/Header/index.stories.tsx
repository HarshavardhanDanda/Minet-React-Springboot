import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header, { IHeaderProps } from './index';

export default {
  title: 'Molecules/Header',
  component: Header,
  decorators: [(Story) => (
    <Router>
      <Story />
    </Router>
  )],
} as Meta;

const Template: Story<IHeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  pageName: 'Home',
  displayButtons:true
};

export const WithDifferentButtons = Template.bind({});
WithDifferentButtons.args = {
  pageName: 'Dashboard',
};
