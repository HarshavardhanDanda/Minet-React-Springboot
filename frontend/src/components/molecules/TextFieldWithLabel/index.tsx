import TextField from "../../atoms/TextField";
import React from "react";
import { Grid, InputLabel, SxProps } from "@mui/material";
import { Theme } from "@emotion/react";
import "./index.css";
import theme from "../../../theme";

interface TextFieldProps {
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  label: string;
  placeholder?: string;
  helperText?: string;
  className?: string;
  id?: string;
  name?: string;
  error?: boolean;
  dataTestId?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  sxTypography?: SxProps<Theme>;
  sxTextField?: SxProps<Theme>;
  FormHelperTextProps?: {
    style?: React.CSSProperties;
  };
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}
const TextFieldWithLabel = (props: TextFieldProps) => {
  const defaultProps: TextFieldProps = {
    sxTextField: {
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
    sxTypography: {
      "&.MuiInputLabel-root": {
        color: "#344054",
        fontSize: "14px",
        fontWeight: 500,
        fontFamily: "interMedium",
        lineHeight: "24px",
      },
    },
    type: "text",
    ...props,
  };
  return (
    <Grid container direction={"column"} spacing="8px">
      <Grid item>
        <InputLabel sx={defaultProps.sxTypography}>
          {defaultProps.label}
        </InputLabel>
      </Grid>
      <Grid item>
        <TextField
          type={defaultProps.type}
          value={defaultProps.value}
          placeholder={defaultProps.placeholder}
          error={defaultProps.error}
          helperText={defaultProps.helperText}
          startAdornment={defaultProps.startAdornment}
          endAdornment={defaultProps.endAdornment}
          onChange={defaultProps.onChange}
          onBlur={defaultProps.onBlur}
          onFocus={defaultProps.onFocus}
          id={defaultProps.id}
          className={defaultProps.className}
          dataTestId={defaultProps.dataTestId}
          sx={defaultProps.sxTextField}
        />
      </Grid>
    </Grid>
  );
};

export default TextFieldWithLabel;
