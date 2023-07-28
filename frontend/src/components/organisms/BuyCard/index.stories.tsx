import React from "react";
import BuyCard from ".";
import { StoryObj, Meta } from "@storybook/react";
import { Box } from "@mui/material";

const meta: Meta<typeof BuyCard> = {
  title: "organisms/buyCard",
  component: BuyCard,
  tags: ["autodocs"],
};

export default meta;

type story = StoryObj<typeof BuyCard>;

export const buyCard: story = {
  render: (props) => {
    return (
      <Box sx={{ width: "527px", height: "600px" }}>
        <BuyCard {...props} />
      </Box>
    );
  },
  args: {
    isBuycard: true,
    coinAmount: 0.0234510,
    coinCost: 34560.67,
    paymentCard: "Visa credit ...8845",
    delivery: "0.001 BTC",
    wallet: "Bitcoin wallet",
    
    transactionFee: 1000,
  },
};

export const sellCard: story = {
  render: (props) => {
    return (
      <Box sx={{ width: "527px", height: "600px" }}>
        <BuyCard {...props} />
      </Box>
    );
  },
  args: {
    isBuycard: false,
    coinAmount: 0.0234510 ,
    coinCost:3450.76,
    paymentCard: "Bitcoin wallet",
    delivery: "0.001 BTC",
    wallet: "Rupee Coin",
  
    transactionFee: 1000,
  },
};
