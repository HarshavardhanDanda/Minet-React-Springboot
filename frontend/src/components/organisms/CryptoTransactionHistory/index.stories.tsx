import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CryptoTransactionHistory from "./index";
import { transactionHistory } from "./mockTransactionHistory";

export default {
  title: "organisms/CryptoTransactionHistory",
  component: CryptoTransactionHistory,
} as Meta;

const Template: StoryFn<typeof CryptoTransactionHistory> = (args) => {

  return <CryptoTransactionHistory {...args} />;
};

export const TransactionHistory = Template.bind({});
TransactionHistory.args = {
  transactionCardDetails: transactionHistory
};
