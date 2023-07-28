import React, { useState } from "react";
import { Stack, Link, Box } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import ButtonComponent from "../../atoms/Button";
import theme from "../../../theme";
import TextFieldWithLabel from "../../molecules/TextFieldWithLabel";
import styled from "@emotion/styled";

interface ResetCodeProps {
  onButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  onLinkClick: React.MouseEventHandler<HTMLAnchorElement> &
    React.MouseEventHandler<HTMLSpanElement>;
}

const StyledTextField = styled(TextFieldWithLabel)({
  width: "100%",
  ".MuiOutlinedInput-root": {
    width: "100%",
  },
});

const ResetCode = (props: ResetCodeProps) => {
  const [isDisabled, setDisabled] = useState<boolean>(true);
  const disabled = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const pattern = /\d{8}/;
    setDisabled(
      !(pattern.test(event.target.value) && event.target.value.length === 8)
    );
  };
  return (
    <Stack
      data-testid="reset-code"
      direction={"row"}
      sx={{ width: "100%", height: "100%" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack
        direction={"row"}
        sx={{ width: "100%", height: "37%" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack
          direction={"column"}
          sx={{ width: "71%", height: "100%" }}
          justifyContent={"space-between"}
        >
          <Box sx={{ width: "100%", height: "19%" }}>
            <TypographyComponent
              variant="h6"
              color={theme.palette.textColor.highEmphasis}
              children="Forgot password"
            />
          </Box>
          <Stack
            direction={"column"}
            sx={{ width: "100%", height: "55%" }}
            justifyContent={"space-between"}
          >
            <StyledTextField
              label="Reset Code"
              placeholder="8 digit code"
              onChange={disabled}
            ></StyledTextField>
            <ButtonComponent
              color="primary"
              variant="contained"
              disabled={isDisabled}
              sx={{
                width: "100%",
                height: "30%",
                borderRadius: "4px",
                backgroundColor: theme.palette.primary.primary500,
                "&.Mui-disabled": {
                  backgroundColor: theme.palette.primary.primary300,
                },
              }}
              onClick={props.onButtonClick}
            >
              Reset Password
            </ButtonComponent>
          </Stack>
          <Stack
            direction="row"
            sx={{ width: "100%", height: "8%" }}
            alignItems={"center"}
            spacing={1}
          >
            <TypographyComponent
              variant="body1"
              color={theme.palette.textColor.mediumEmphasis}
              children="Back to "
            />
            <Link
              onClick={props.onLinkClick}
              color={theme.palette.primary.primary500}
              variant="body1"
              sx={{ textDecoration: "none", cursor: "default" }}
            >
              Login
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ResetCode;
