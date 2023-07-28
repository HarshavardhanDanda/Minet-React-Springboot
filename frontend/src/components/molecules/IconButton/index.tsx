import { SxProps, styled } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import IconComponent from "../../atoms/Icons";
import React, { MouseEventHandler } from "react";
import { TypographyVariant } from "../../../theme";

interface IconButtonProps {
  src: string;
  text: string;
  sx?: SxProps;
  styleIcon?: { iconWidth?: string; iconHeight?: string };
  textVariant?: TypographyVariant;
  styleText?: { color?: string; variant?: string };
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const StyledDiv = styled("div")(() => ({
  width: "157px",
  height: "96px",
  borderRadius: "12px",
  Padding: "20px, 40px, 20px, 40px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1px",
  border: "1px solid #E8E8F7",
  backgroundColor: "#FAFCFF",
  "&:hover": {
    backgroundColor: "#FAFCFF",
    cursor: "pointer",
  },
}));

const IconButton: React.FC<IconButtonProps> = ({
  src,
  text,
  sx,
  styleIcon,
  styleText,
  textVariant,
  onClick,
  ...props
}) => {

  IconButton.defaultProps = {
    styleIcon: { iconWidth: "21px", iconHeight: "20px" },
  };

  return (
    <StyledDiv sx={sx} onClick={onClick}>
      <IconComponent
        src={src}
        width={styleIcon?.iconWidth}
        height={styleIcon?.iconHeight}
      />
      <TypographyComponent
        variant={textVariant ?? "body1"}
        color="#7D7D89"
        style={styleText}
      >
        {text}
      </TypographyComponent>
    </StyledDiv>
  );
};

export default IconButton;
