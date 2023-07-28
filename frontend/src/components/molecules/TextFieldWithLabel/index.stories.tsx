import React from "react";
import TextFieldWithLabel from ".";
import { StoryObj, Meta } from "@storybook/react";
import Image from "../../atoms/Image";
import EyeIcon from "../../../../public/assets/Images/Eye.svg";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme";

const meta: Meta<typeof TextFieldWithLabel> = {
  title: "molecules/textFieldWithLabel",
  component: TextFieldWithLabel,
  tags: ["autodocs"],
  argTypes: {
    label: { control: { type: "text" } },
    placeholder: { control: { type: "text" } },
    value: { control: { type: "text" } },
    onChange: { action: "typed" },
    sxTextField: { control: "object" },
    sxTypography: { control: "object" },
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

type story = StoryObj<typeof TextFieldWithLabel>;

export const emailField: story = {
  render: () => {
    return (
      <ThemeProvider theme={theme}>
        <TextFieldWithLabel label="Email" placeholder="you@company.com" />
      </ThemeProvider>
    );
  },
};

export const passwordField: story = {
  render: () => {
    return (
      <ThemeProvider theme={theme}>
        <TextFieldWithLabel
          label="Password"
          placeholder="Password"
          type="password"
          endAdornment={<Image src={EyeIcon} width="20px" height="19.41px" />}
        />
      </ThemeProvider>
    );
  },
};

export const fullName: story = {
  render: () => {
    return (
      <ThemeProvider theme={theme}>
        <TextFieldWithLabel label="Full Name" placeholder="Eg: John Doe" />
      </ThemeProvider>
    );
  },
};
