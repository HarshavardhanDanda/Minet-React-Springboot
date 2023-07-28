import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import SelectedCryptoCard from "./index";
import ethereum from "../../../../public/assets/Images/coins/ethereum2.svg";
import bitcoin from "../../../../public/assets/Images/coins/bitcoin.svg";

export default {
  component: SelectedCryptoCard,
  title: "Molecules/SelectedCryptoCard",
} as Meta;

const Template: StoryFn<typeof SelectedCryptoCard> = (args) => (
  <SelectedCryptoCard {...args} />
);

export const UnselectedCard = Template.bind({});
UnselectedCard.args = {
  isSelected: false,
  coinName: "Bitcoin",
  coinValue: 50000,
  src: bitcoin,
};

export const SelectedCard = Template.bind({});
SelectedCard.args = {
  isSelected: true,
  coinName: "Ethereum",
  coinValue: 3000,
  src: ethereum,
};
