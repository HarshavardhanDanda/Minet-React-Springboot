import React from "react";
import { Story, Meta } from "@storybook/react";
import TableCryptoDetailsCard, {
  TableCryptoDetailsCardProps,
} from "../TableCryptoDetailsCard";
import Bitcoin from "../../../../public/assets/Images/coins/bitcoin.svg"
import Ethereum2 from "../../../../public/assets/Images/coins/ethereum3.svg"

export default {
  title: "molecules/TableCryptoDetailsCard",
  component: TableCryptoDetailsCard,
} as Meta;

const Template: Story<TableCryptoDetailsCardProps> = (args) => (
  <TableCryptoDetailsCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  src: Bitcoin,
  coinHeight: "42px",
  coinWidth: "42px",
  coinName: "Bitcoin",
  symbol: "BTC",
  priceChange: 6.2,
  price: 3285553,
  marketCap: "$60.1T",
};

export const Coin2 = Template.bind({});
Coin2.args = {
  src: Ethereum2,
  coinHeight: "42px",
  coinWidth: "42px",
  coinName: "Ethereum 2",
  symbol: "ETH2",
  priceChange: 5.49,
  price: 216678.10,
  marketCap: "$25.4T",
};
