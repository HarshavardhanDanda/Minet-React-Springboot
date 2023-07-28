import React from "react";
import CryptoDetailsTab from ".";
import { Box } from "@mui/material";
import { StoryObj, Meta } from "@storybook/react";
import UpArrow from "../../../../public/assets/icons/UpwardArrow.svg";
import theme from "../../../theme";

const meta: Meta<typeof CryptoDetailsTab> = {
  title: "organisms/cryptoDetailsTab",
  component: CryptoDetailsTab,
  tags: ["autodocs"],
};

export default meta;

type story = StoryObj<typeof CryptoDetailsTab>;

export const Overview: story = {
  render: (props) => {
    return (
      <Box sx={{ width: "1239px", height: "922px" }}>
        <CryptoDetailsTab {...props} />
      </Box>
    );
  },
  args: {
    coinCost: "$3,285,553.73",
    iconSrc: UpArrow,
    textColor: theme.palette.primary.success500,
    percantage: "+8.6%",
    graphColor: ["#FFA74F"],
    graphdata: [{ name: "bitcoin", data: [8, 3, 12, 7, 5] }],
    graphXaxisLabels: ["JUN 10", "JUN 14", "JUN 20", "JUN 28", "JUL 4"],
    wallet: <></>,
  },
};
