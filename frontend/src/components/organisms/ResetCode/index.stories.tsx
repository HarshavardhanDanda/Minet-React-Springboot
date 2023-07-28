import React from "react";
import ResetCode from ".";
import { StoryObj, Meta } from "@storybook/react";
import { Box, ThemeProvider } from "@mui/material";
import theme from "../../../theme";

const meta: Meta<typeof ResetCode> = {
  title: "organisms/resetCode",
  component: ResetCode,
  tags: ["autodocs"],
};

export default meta;

type story = StoryObj<typeof ResetCode>;

export const defaultRecetCode: story = {
  render: (props) => {
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "720px", height: "768px" }}>
          <ResetCode {...props} />
        </Box>
      </ThemeProvider>
    );
  },
  args: {
    onButtonClick: () => {
      console.log("button clicked");
    },
    onLinkClick: () => {
      console.log("clicked the link");
    },
  },
};
