import React from "react";
import TypographyWithIcon from ".";
import { StoryObj, Meta } from "@storybook/react";
import BlueEdit from "../../../../public/assets/Images/BlueEdit.svg";
import BlueDot from "../../../../public/assets/Images/BlueDot.svg";
import theme from "../../../theme";

const meta: Meta<typeof TypographyWithIcon> = {
  title: "molecules/typographyWithIcon",
  tags: ["autodocs"],
  component: TypographyWithIcon,
  argTypes: {
    label: { control: "text" },
    typogerphyVariant: {
      options: [
        "h4",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "caption1",
        "caption2",
        "overline",
      ],
      control: { type: "select" },
    },
    onClick: { action: "clicked" },
    typographyColor: { control: "color" },
    direction: {
      options: ["row", "column", "row-reverse", "column-reverse"],
      control: "radio",
    },
    iconSrc: { control: "text" },
    sxStack: { control: "object" },
    sxTypography: { control: "object" },
    spacing: { control: "text" },
  },
};

export default meta;

type story = StoryObj<typeof TypographyWithIcon>;

export const watchList: story = {
  render: () => {
    return (
      <TypographyWithIcon
        iconSrc={BlueEdit}
        label="View Watchlist"
        typographyColor={theme.palette.primary.primary500}
      />
    );
  },
};

export const totalInvestment: story = {
  render: () => {
    return (
      <TypographyWithIcon
        label="Total Investment"
        typogerphyVariant="overline"
        iconSrc={BlueDot}
        direction={"row-reverse"}
        spacing={"4px"}
      />
    );
  },
};
