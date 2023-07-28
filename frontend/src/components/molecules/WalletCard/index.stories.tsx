import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import WalletCard from "./index";

export default {
  title: "Molecules/WalletCard",
  component: WalletCard,
} as Meta;

const Template: StoryFn<typeof WalletCard> = (args) => <WalletCard {...args} />;


export const Wallet_Card = Template.bind({});

Wallet_Card.args = {
  balance: 34000.0,
};
