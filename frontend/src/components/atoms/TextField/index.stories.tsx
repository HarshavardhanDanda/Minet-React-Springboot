import React from "react";
import TextField from ".";
import { StoryObj, Meta } from "@storybook/react";
import EyeIcon from "../../../../public/assets/Images/Eye.svg";
import Image from "../Image";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme";

const meta: Meta<typeof TextField> = {
  title: "atoms/textField",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "text" } },
    color: {
      options: ["error", "primary", "secondary", "info", "success", "warning"],
      control: "select",
    },
    onChange: { action: "typed" },
    sx: { control: "object" },
    type: { options: ["text", "password"], control: "select" },
    helperText: { control: "text" },
    className: { control: { type: "text" } },
    id: { control: { type: "text" } },
    name: { control: { type: "text" } },
    dataTestId: { control: { type: "text" } },
    startAdornment: { control: "object" },
    endAdornment: { control: "object" },
  },
};

export default meta;

type story = StoryObj<typeof TextField>;

export const emailTextField: story = {
  render: (args) => {
    return (
      <ThemeProvider theme={theme}>
        <TextField
          placeholder={args.placeholder}
          type={args.type}
          sx={args.sx}
          color={args.color}
          helperText={args.helperText}
          value={args.value}
        />
      </ThemeProvider>
    );
  },
  args: {
    placeholder: "you@company.com",
    sx: {
      ".MuiOutlinedInput-root": {
        width: "512px",
        height: "48px",
        padding: "12px, 16px, 12px, 16px",
        borderRadius: "8px",
        boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        boxSizing: "border-box",
      },
      ".MuiOutlinedInput-input": {
        fontFamily: "interNormal",
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "24px",
        color: theme.palette.textColor.highEmphasis,
        "&::placeholder": {
          color: "black",
          fontFamily: "interNormal",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "24px",
        },
      },
    },
    type: "text",
  },
};

export const passwordField: story = {
  render: (args) => {
    return (
      <ThemeProvider theme={theme}>
        <TextField
          placeholder={args.placeholder}
          type={args.type}
          sx={args.sx}
          color={args.color}
          helperText={args.helperText}
          value={args.value}
          endAdornment={args.endAdornment}
        />
      </ThemeProvider>
    );
  },
  args: {
    placeholder: "Enter Password",
    sx: {
      ".MuiOutlinedInput-root": {
        width: "512px",
        height: "48px",
        padding: "12px, 16px, 12px, 16px",
        borderRadius: "8px",
        boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        boxSizing: "border-box",
      },
      ".MuiOutlinedInput-input": {
        fontFamily: "interNormal",
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "24px",
        color: theme.palette.textColor.highEmphasis,
        "&::placeholder": {
          color: "black",
          fontFamily: "interNormal",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "24px",
        },
      },
    },
    type: "password",
    endAdornment: <Image src={EyeIcon} width="20px" height="19.41px" />,
  },
};
