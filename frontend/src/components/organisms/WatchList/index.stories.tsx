import React from "react";
import { Story, Meta } from "@storybook/react";
import WatchList, { WatchListProps } from ".";

import { WatchlistCardProps } from "../../molecules/WatchlistCard";
import ethereum from "../../../../public/assets/Images/coins/ethereum2.svg";
import bitcoin from "../../../../public/assets/Images/coins/bitcoin.svg";
import ethreum2 from "../../../../public/assets/Images/coins/ethreum.svg";
import Cardano from "../../../../public/assets/Images/coins/Cardano.svg";

export const cardProps: WatchlistCardProps[] = [
  {
    src: bitcoin,
    coinName: "Bitcoin",
    price: 51000,
    priceChange: 2.3,
    graphData: [1, 2, 3, 4, 5],
  },
  {
    src: ethreum2,
    coinName: "Ethereum",
    price: 1000,
    priceChange: 2.3,
    graphData: [5, 4, 3, 2, 1],
  },
  {
    src: Cardano,
    coinName: "Cardano",
    price: 1000,
    priceChange: 2.3,
    graphData: [5, 4, 3, 2, 1],
  },
  {
    src: ethereum,
    coinName: "Ethereum",
    price: 1000,
    priceChange: 2.3,
    graphData: [5, 4, 3, 2, 1],
  },
];


export default {
  title: "Organisms/WatchList",
  component: WatchList,
} as Meta;

const Template: Story<WatchListProps> = (args) => <WatchList {...args} />;

export const SingleGraph = Template.bind({});
export const DoubleGraph = Template.bind({});
SingleGraph.args = {
  cardProps: cardProps.slice(0, 1),
};

DoubleGraph.args = {
  cardProps: cardProps.slice(0, 2),
};
