import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import RecentTransactions from ".";
import { recentTransactions } from "./MockTransactions";

export default {
  title: "Organisms/Recent Transactions",
  component: RecentTransactions,
} as Meta<typeof RecentTransactions>;

const Template: StoryFn<typeof RecentTransactions> = () => (
  <RecentTransactions recentTransactions={recentTransactions}/>
);

export const Default = Template.bind({});
