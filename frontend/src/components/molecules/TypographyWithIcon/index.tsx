import React from "react";
import TypographyComponent from "../../atoms/Typography";
import { Stack, SxProps } from "@mui/material";
import Image from "../../atoms/Image";
import { Theme } from "@emotion/react";

interface TypographyWithIconProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  spacing?: string | number;
  typogerphyVariant?:
    | "h4"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption1"
    | "caption2"
    | "overline";
  iconSrc: string;
  iconWidth?: string;
  iconHeight?: string;
  sxStack?: SxProps<Theme>;
  typographyColor?: string;
  sxTypography?: SxProps<Theme>;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
}

interface DefaultProps {
  spacing?: string | number;
  typogerphyVariant?:
    | "h4"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption1"
    | "caption2"
    | "overline";
  iconWidth?: string;
  iconHeight?: string;
  sxStack?: SxProps<Theme>;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
}
const defaultProps: DefaultProps = {
  direction: "row",
  iconHeight: ".9vh",
  iconWidth: ".9vw",
  typogerphyVariant: "caption1",
  sxStack: {
    width: "16.6%",
    height: "7.7%",
    cursor: "default",
  },
  spacing: ".6vw",
};

const TypographyWithIcon = (props: TypographyWithIconProps) => {
  return (
    <Stack
      direction={props.direction ?? defaultProps.direction}
      alignItems={"center"}
      onClick={props.onClick}
      spacing={props.spacing ?? defaultProps.spacing}
      sx={props.sxStack ?? defaultProps.sxStack}
    >
      <TypographyComponent
        variant={props.typogerphyVariant ?? defaultProps.typogerphyVariant}
        color={props.typographyColor}
      >
        {props.label}
      </TypographyComponent>
      <Image
        src={props.iconSrc}
        width={props.iconWidth ?? defaultProps.iconWidth!}
        height={props.iconHeight ?? defaultProps.iconHeight!}
      />
    </Stack>
  );
};

export default TypographyWithIcon;
