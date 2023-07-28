import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import LineDivider from ".";

const meta: Meta<typeof LineDivider> = {
  title: "atoms/lineDivider",
  tags: ["autodocs"],
  component: LineDivider,
  argTypes: {
    sx: { control: { type: "object" } },
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
    },
    variant: {
      options: ["fullWidth", "inset", "middle"],
      control: { type: "select" },
    },
    textAlign: {
      options: ["center", "left", "right"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type story = StoryObj<typeof LineDivider>;

export const InLogin: story = {
  render: () => {
    return (
      <LineDivider sx={{ width: "512px", color: "#7D7D89" }}>Or</LineDivider>
    );
  },
};

export const dashedDivider: story = {
  render: (args) => {
    return (
      <LineDivider
        sx={args.sx}
        orientation={args.orientation}
        textAlign={args.textAlign}
        variant={args.variant}
        light={args.light}
        className={args.className}
      >
        {args.children}
      </LineDivider>
    );
  },
  args: {
    sx: {
      width: "512px",
      border: "1px",
      borderStyle: "dashed",
      borderColor: "#B4B4CF",
    },
    orientation: "vertical",
    children: "",
    textAlign: "center",
  },
};
