import React from "react";
import CoinSlider from ".";
import { StoryObj, Meta } from "@storybook/react";
import { Box, ThemeProvider } from "@mui/material";
import theme from "../../../theme";

const meta: Meta<typeof CoinSlider> = {
  title: "molecules/coinSlider",
  component: CoinSlider,
  tags: ["autodocs"],
};

export default meta;

type story = StoryObj<typeof CoinSlider>;

export const defaultCoinSlider: story = {
  render: () => {
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "842px", height: "38px" }}>
          <CoinSlider />
        </Box>
      </ThemeProvider>
    );
  },
};
