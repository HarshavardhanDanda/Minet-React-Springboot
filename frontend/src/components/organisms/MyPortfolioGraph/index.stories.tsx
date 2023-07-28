import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import MyportfolioGraph, { MyportfolioGraphProps } from './index';

export default {
  title: 'organisms/MyportfolioGraph',
  component: MyportfolioGraph,
} as Meta;

const Template: StoryFn<MyportfolioGraphProps> = (args) => <MyportfolioGraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  title1: 'Total Investment',
  value1: '$11,900,204',
  changePercentage1: '-1.2%',
};

export const Graph = Template.bind({});
Graph.args = {
  title1: 'Total Investment',
  title2: 'Bitcoin',
  value1: '$11,900,204',
  value2: '$12,400',
  changePercentage1: '-1.2%',
  changePercentage2: '+8.2%',

  type: 'area',
  series: [
    { name: 'Bitcoin', data: [20, 42, 38, 55, 44, 48] },
    { name: 'Total Investment', data: [20, 35, 30, 28, 38, 40] },
  ],
  showLegend: true,
  legendPosition: 'top',
  legendHorizontalPosition: 'right',
  height: '100%',
  width: '100%',
  colors: ['#ffa74f', '#0052ff'],
  strokeCurve: 'smooth',
  xAxisCategories: ['JUN 8', 'JUN 15', 'JUN 22', 'JUN 29', 'JUL 6', 'JUL 13'],
  showXaxis: true,
  showGrid: true,
  showXaxisBorders: true,
  boxSx: {width:"100%", height:"100%"},
};