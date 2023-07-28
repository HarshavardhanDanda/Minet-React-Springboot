import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import TimeLineTabs from './index'

export default {
  title: 'molecules/TimeLineTabs',
  component: TimeLineTabs,
} as ComponentMeta<typeof TimeLineTabs>

const Template: ComponentStory<typeof TimeLineTabs> = (args: any) => (
  <TimeLineTabs {...args} />
)


export const TimeLineTabsStoryDetails = Template.bind({})
TimeLineTabsStoryDetails.args = {
  typevariant: "Detail",
}

export const TimeLineTabsStoryDashboard = Template.bind({});
TimeLineTabsStoryDashboard.args = {
  typevariant: "Dashboard",
};