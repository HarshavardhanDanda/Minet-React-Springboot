import { Stack, styled } from "@mui/material";
import React from "react";
import TypographyComponent from "../../atoms/Typography";
import theme from "../../../theme";
import ResetPasswordSuccess from "../../molecules/ResetPasswordSuccess";
import ButtonComponent from "../../atoms/Button";
import { useNavigate } from "react-router-dom";

const SyledButtonComponent = styled(ButtonComponent)(() => ({
  borderRadius: "4px",
  padding: "0px 16px 0px 16px",
  width: "100%",
  height: "42px",
  marginTop: "24px",
}));

const ResetPasswordSuccessOrganism = () => {
  const nav = useNavigate();
  return (
    <Stack direction={"column"} width={"71%"} height={"32%"}>
      <TypographyComponent
        variant="h4"
        color={theme.palette.textColor.highEmphasis}
        sx={{ marginBottom: "32px" }}
      >
        Reset Password
      </TypographyComponent>
      <ResetPasswordSuccess />
      <SyledButtonComponent
        variant="contained"
        backgroundColor={theme.palette.primary.primary500}
        disabled={false}
        onClick={() => {
          nav("/");
        }}
      >
        Login
      </SyledButtonComponent>
    </Stack>
  );
};

export default ResetPasswordSuccessOrganism;
