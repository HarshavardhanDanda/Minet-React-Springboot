import React from "react";
import { Divider, SxProps } from "@mui/material";
import { Theme } from "@emotion/react";

interface DividerProps {
  children?: React.ReactNode;
  dataTestId?: string;
  className?: string;
  variant?: "fullWidth" | "inset" | "middle";
  orientation?: "horizontal" | "vertical";
  light?: boolean;
  textAlign?: "center" | "left" | "right";
  sx?: SxProps<Theme>;
}

const LineDivider = (props: DividerProps) => {
  const defaultProps: DividerProps = {
    dataTestId: "lineDivider",
    variant: "fullWidth",
    orientation: "horizontal",
    textAlign: "center",
    ...props,
  };
  return (
    <Divider
      className={defaultProps.className}
      data-testid={defaultProps.dataTestId}
      orientation={defaultProps.orientation}
      light={defaultProps.light}
      sx={{ ...defaultProps.sx }}
      textAlign={defaultProps.textAlign}
      variant={defaultProps.variant}
    >
      {defaultProps.children}
    </Divider>
  );
};

export default LineDivider;
