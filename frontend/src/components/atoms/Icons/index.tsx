import { styled } from "@mui/material";
import React from "react";

interface IconComponentProps {
  width?: string;
  height?: string;
  padding?: string;
  src: string;
}

const StyledIcon = styled("img")((props: IconComponentProps) => ({
  height: props.height,
  width: props.width,
  padding: props.padding,
}));

const IconComponent: React.FC<IconComponentProps> = (
  { src, width, height, padding, ...props }
) => {
  return (
    <div>
      <StyledIcon
        data-testid="iconComponent"
        src={src}
        width={width}
        height={height}
        padding={padding}
        alt="icon"
        {...props}
      />
    </div>
  );
};

export default IconComponent;