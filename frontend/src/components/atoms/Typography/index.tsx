import { ThemeProvider, Typography,TypographyProps } from "@mui/material";
import React from "react";
import theme from "../../../theme";


interface TypographyComponentPros extends TypographyProps {
  children?: string;
}

const TypographyComponent = (props: TypographyComponentPros) => {
  return (
  <ThemeProvider theme={theme}>
    <Typography data-testid="Hello" variant={props.variant} {...props}>
      {props.children}
    </Typography>
    </ThemeProvider>
  
  );
};

export default TypographyComponent;