import React from "react";
import { Stack, styled } from "@mui/material";
import tickCircle from "../../../../public/assets/icons/tick-circle.svg";
import IconComponent from "../../atoms/Icons";
import TypographyComponent from "../../atoms/Typography";
import theme from "../../../theme";

const MainStack = styled(Stack)(() => ({
  width: "90.6%",
  height: "19%",
  display: "flex",
  flexDirection: "row",
  gap: "12px",
  padding: "24px",
  border: "1px solid #E8E8F7",
  borderRadius: "12px",
  backgroundColor: theme.palette.primary.primary100,
}));

const ResetPasswordSuccess = () => {
  return (
    <MainStack>
      <IconComponent src={tickCircle} width="32px" height="32px" />
      <Stack display={"flex"} direction={"column"}>
        <TypographyComponent
          variant="body1"
          color={theme.palette.textColor.highEmphasis}
        >
          Password reset successful
        </TypographyComponent>
        <TypographyComponent
          variant="body2"
          color={theme.palette.textColor.mediumEmphasis}
        >
          Click on button below to proceed to login
        </TypographyComponent>
      </Stack>
    </MainStack>
  );
};

export default ResetPasswordSuccess;
