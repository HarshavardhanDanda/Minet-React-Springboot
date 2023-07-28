import React from "react";
import FogotPassword from ".";
import { StoryObj, Meta } from "@storybook/react";
import { Box, ThemeProvider } from "@mui/material";
import theme from "../../../theme";

const meta: Meta<typeof FogotPassword> = {
  title: "organisms/forgotPassword",
  component: FogotPassword,
  tags: ["autodocs"],
};

export default meta;

type story = StoryObj<typeof FogotPassword>;

export const defaultForgetPassword: story = {
  render: () => {
    return (
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            width: "720px",
            height: "768px",
            alignItems: "center",
            display: "flex",
          }}
        >
          <FogotPassword />
        </Box>
      </ThemeProvider>
    );
  },
};
