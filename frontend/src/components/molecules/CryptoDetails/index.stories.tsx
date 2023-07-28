import React from "react";
import CryptoDetails from ".";
import { StoryObj, Meta } from "@storybook/react";
import { Box } from "@mui/material";

const meta: Meta<typeof CryptoDetails> = {
  title: "molecules/cryptoDetails",
  component: CryptoDetails,
  tags: ["autodocs"],
};

export default meta;

type story = StoryObj<typeof CryptoDetails>;

export const defaultCryptoDetails: story = {
  render: () => {
    return (
      <Box sx={{ width: "1237px", height: "312px" }}>
        <CryptoDetails />
      </Box>
    );
  },
};
