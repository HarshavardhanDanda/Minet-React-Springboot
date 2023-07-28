import React, { useState } from "react";
import TypographyComponent from "../../atoms/Typography";
import { Grid, Link, Stack } from "@mui/material";
import ButtonComponent from "../../atoms/Button";
import theme from "../../../theme";
import TextFieldWithLabel from "../../molecules/TextFieldWithLabel";
import styled from "@emotion/styled";
import {  getUsers } from "../../../services/users";
import { CreateDefaultToken } from "../../../store/JWT/tokens";
import { useDispatch } from "react-redux";
import { tokenActions } from "../../../store/JWT";


interface ForgotPasswordProps {
  onInput?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onButtonClick: (id?: number) => void;
  onLinkClick?: React.MouseEventHandler<HTMLAnchorElement> &
    React.MouseEventHandler<HTMLSpanElement>;
}

const StyledInput = styled(TextFieldWithLabel)({
  width: "100%",
  ".MuiOutlinedInput-root": {
    width: "100%",
  },
  ".MuiFormHelperText-root": {
    color: theme.palette.loss.borderColor,
  },
});

const FogotPassword = (props: ForgotPasswordProps) => {
  const [showHelperText, setShowHelperText] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const dispatch = useDispatch();
  const handelCheck = async (event: any) => {
    try {
      const token = await CreateDefaultToken();
      dispatch(tokenActions.saveToken(token))
      const users = await getUsers(token);
      const filteredUsers = users.filter((user: any) => user.emailId === value)
      if (filteredUsers.length != 0) {
        props.onButtonClick(filteredUsers[0].id);
      } else {
        setShowHelperText(true);
      }
    } catch (error) {}
  };
  return (
    <Stack
      data-testid="forgotPassword"
      direction={"row"}
      sx={{ width: "100%", height: "36%" }}
      justifyContent={"center"}
      alignItems={"flex-start"}
    >
      <Stack
        direction={"column"}
        sx={{ width: "71%", height: "100%" }}
        justifyContent={"space-between"}
      >
        <Grid item>
          <TypographyComponent
            variant="h4"
            color={theme.palette.textColor.highEmphasis}
          >
            Forgot Password
          </TypographyComponent>
        </Grid>
        <Grid item sx={{ width: "100%", height: "55%" }}>
          <Stack
            direction={"column"}
            sx={{ width: "100%", height: "100%" }}
            justifyContent={"space-between"}
          >
            <StyledInput
              value={value}
              label="Email"
              placeholder="you@company.com"
              helperText={
                showHelperText ? "The entered email is not valid" : ""
              }
              onChange={(ele) => {
                setValue(ele.target.value);
              }}
            />
            <ButtonComponent
              onClick={(event) => {
                handelCheck(event);
              }}
              disabled={
                value.length==0
              }
              variant="contained"
              sx={{
                width: "100%",
                height: "30%",
                "&.MuiButton-containedPrimary": {
                  backgroundColor: theme.palette.primary.primary500,
                },
              }}
            >
              Send Reset Link
            </ButtonComponent>
          </Stack>
        </Grid>
        <Grid item>
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <TypographyComponent
              variant="body1"
              color={theme.palette.textColor.mediumEmphasis}
            >
              Back to
            </TypographyComponent>
            <Link
              onClick={props.onLinkClick}
              variant="body1"
              color={theme.palette.primary.primary500}
              sx={{ textDecoration: "none",cursor:"pointer" }}
            >
              Login
            </Link>
          </Stack>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default FogotPassword;
