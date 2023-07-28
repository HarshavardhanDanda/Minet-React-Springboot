import React from "react";
import CryptoPortfolioCard from ".";
import { StoryObj, Meta } from "@storybook/react";
import Bitcoin from "../../../../public/assets/Images/coins/bitcoin.svg";
import EthereumIcon from "../../../../public/assets/Images/coins/ethreum.svg";
const meta: Meta<typeof CryptoPortfolioCard> = {
  title: "molecules/cryptoPortfolioCard",
  tags: ["autodocs"],
  component: CryptoPortfolioCard,
  argTypes: {
    iconSrc: { control: "text" },
    coinName: { control: "text" },
    coinShortForm: { control: "text" },
    amount: { control: "text" },
    percentage: { control: "text" },
    percentageColor: { control: "color" },
    sxCard: { control: "object" },
  },
};

export default meta;

type story = StoryObj<typeof CryptoPortfolioCard>;

export const bitcoin: story = {
  render: () => {
    return (
      <CryptoPortfolioCard
        iconSrc={Bitcoin}
        coinName="Bitcoin"
        coinShortForm="BTC"
        amount="$ 0.00"
        percentage="+0.00%"
      />
    );
  },
};

export const ethereum: story = {
  render: () => {
    return (
      <CryptoPortfolioCard
        iconSrc={EthereumIcon}
        coinName="Ethereum"
        coinShortForm="ETH"
        amount="$ 0.00"
        percentage="+0.00%"
      />
    );
  },
};
