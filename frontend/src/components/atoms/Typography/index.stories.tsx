import React from "react";
import TypographyComponent  from ".";
import {Story} from '@storybook/react';

export default {
  title: "Atoms/Typography",
  component: TypographyComponent,
};

const Template: Story<typeof TypographyComponent> = (args) => (
  <TypographyComponent {...args}></TypographyComponent>
);

export const h6Text = Template.bind({})
h6Text.args = {
  variant: 'h6',
  children: 'h6 Text',
}

export const h4Text = Template.bind({})
h4Text.args = {
  variant: 'h4',
  children: 'h4 Text',
}

export const body1 = Template.bind({})
body1.args = {
  variant: 'body1',
  children: 'body1 Text',
}
export const body2 = Template.bind({})
body2.args = {
  variant: 'body2',
  children: 'body2 Text',
}

export const subtitle1 = Template.bind({})
subtitle1.args = {
  variant: 'subtitle1',
  children: 'subtitle1 Text',
}

export const subtitle2 = Template.bind({})
subtitle2.args = {
  variant: 'subtitle2',
  children: 'subtitle2 Text',
}