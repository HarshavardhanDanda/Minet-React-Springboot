import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  TypographyProps,
} from "@mui/material";
import TypographyComponent from "../Typography";

interface ButtonProps extends MuiButtonProps {
  backgroundColor?: string | React.CSSProperties;
  children: string;
  typographyVariant?:
    | "button"
    | "h4"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption1"
    | "caption2"
    | "overline";
  typographyProps?: TypographyProps;
}

const buttonStyles = (backgroundColor: ButtonProps["backgroundColor"]) => ({
  "&:hover": {
    backgroundColor: backgroundColor,
    cursor: "pointer",
  },
  "&.Mui-disabled": {
    backgroundColor: "#CCE3FF",
    color: "#FFFFFF",
  },
});

const ButtonComponent: React.FC<ButtonProps> = ({
  variant,
  children,
  typographyVariant = "button",
  typographyProps,
  backgroundColor,
  ...props
}) => {
  const styles = buttonStyles(backgroundColor);
  return (
    <MuiButton
      data-testid="button"
      variant={variant}
      {...props}
      sx={{
        ...props.sx,
        backgroundColor: backgroundColor,
        ...styles,
      }}
    >
      <TypographyComponent
        variant={typographyVariant}
        {...typographyProps}
        children={children}
        sx={{whiteSpace: 'nowrap'}}
      
      ></TypographyComponent>
    </MuiButton>
  );
};

export default ButtonComponent;
