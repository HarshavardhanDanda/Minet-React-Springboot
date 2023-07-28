import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import TypographyComponent from "../../components/atoms/Typography";

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height: "98vh",
  justifyContent: "center",
  alignItems: "center",
});

const PageNotFound = () => {
  return (
    <StyledBox>
      <TypographyComponent variant="h4">Page not found</TypographyComponent>
    </StyledBox>
  );
};

export default PageNotFound;
