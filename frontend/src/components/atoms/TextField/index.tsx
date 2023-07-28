import React from "react";
import { TextField as MuiTextField, SxProps } from "@mui/material";
import { Theme } from "@emotion/react";

interface TextFieldProps {
  value?: string;
  placeholder?: string;
  helperText?: string;
  variant?: "filled" | "outlined" | "standard";
  type?: React.HTMLInputTypeAttribute;
  label?: string;
  color?: "error" | "primary" | "secondary" | "info" | "success" | "warning";
  className?: string;
  id?: string;
  name?: string;
  error?: boolean;
  dataTestId?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  sx?: SxProps<Theme>;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const TextField = (props: TextFieldProps) => {
  const defaultProps: TextFieldProps = {
    dataTestId: "textField",
    variant: "outlined",
    color: "primary",
    type: "text",
    ...props,
  };
  return (
    <MuiTextField
      data-testid={defaultProps.dataTestId}
      id={defaultProps.id}
      name={defaultProps.name}
      placeholder={defaultProps.placeholder}
      helperText={defaultProps.helperText}
      value={defaultProps.value}
      variant={defaultProps.variant}
      InputProps={{
        startAdornment: defaultProps.startAdornment,
        endAdornment: defaultProps.endAdornment,
      }}
      error={defaultProps.error}
      sx={defaultProps.sx}
      className={defaultProps.className}
      onChange={defaultProps.onChange}
      color={defaultProps.color}
      label={defaultProps.label}
      type={defaultProps.type}
      onBlur={defaultProps.onBlur}
      onFocus={defaultProps.onFocus}
    />
  );
};

export default TextField;
