import { styled } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import TypographyComponent from "../../atoms/Typography";
import theme from "../../../theme";
import TextFieldWithLabel from "../../molecules/TextFieldWithLabel";
import ButtonComponent from "../../atoms/Button";
import EyeIconComponent from "../../molecules/EyeIconComponent";
import { resetPasswordService } from "../../../services/users";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

interface ResetPasswordProps {
  onSubmit: Function;
}

const StyledDiv = styled("div")(() => ({
  width: "512px",
  height: "364px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "24px",
}));

const SyledButtonComponent = styled(ButtonComponent)(() => ({
  borderRadius: "4px",
  padding: "0px 16px 0px 16px",
  width: "512px",
  height: "42px",
}));

export const passwordRegex =
  /^(?=.*[!@#$%^&*()\-=_+{}[\]:;"'<>,.?/|`~])(?=.*[\d]).{9,}$/;

const ResetPassword = (props: ResetPasswordProps) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fieldTypePassword, setFieldTypePassword] = useState("password");
  const [fieldTypeConfirmPassword, setFieldTypeConfirmPassword] =
    useState("password");

  const [formErrors, setFormErrors] = useState({
    passwordError: false,
    confirmPasswordError: false,
  });
  const { id } = useParams();

  const handleEyeIconClickPassword = () => {
    fieldTypePassword == "password"
      ? setFieldTypePassword("text")
      : setFieldTypePassword("password");
  };
  const handleEyeIconClickConfirmPassword = () => {
    fieldTypeConfirmPassword == "password"
      ? setFieldTypeConfirmPassword("text")
      : setFieldTypeConfirmPassword("password");
  };

  const handlePassChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassChange = (event: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const validatePassword = (password: string) => {
    return passwordRegex.test(password);
  };

  const token = useSelector((state: any) => {
    return state.token.token
  });

  const handleSubmit = () => {
    const passwordError = !validatePassword(password);
    const confirmPasswordError = password != confirmPassword;
    if (passwordError || confirmPasswordError) {
      setFormErrors({
        passwordError: passwordError,
        confirmPasswordError: confirmPasswordError,
      });
    } else {
      const resetPassword = async () => {
        try {
          await resetPasswordService(parseInt(id!), password, token);
        } catch (error) {
          console.error("Error fetching JSON data:", error);
        }
      };
      resetPassword();
      props.onSubmit();
    }
  };

  return (
    <StyledDiv data-testid="reset-password">
      <TypographyComponent
        variant="h4"
        color={theme.palette.textColor.highEmphasis}
      >
        Reset Password
      </TypographyComponent>
      <TextFieldWithLabel
        label="Enter Password"
        placeholder="Enter Password"
        type={fieldTypePassword}
        endAdornment={EyeIconComponent({
          onClick: handleEyeIconClickPassword,
        })}
        onChange={handlePassChange}
        error={formErrors.passwordError}
        helperText={
          formErrors.passwordError ? "Password format incorrect!" : ""
        }
      />
      <TextFieldWithLabel
        label="Re-Enter Password"
        placeholder="Enter Password"
        type={"text"}
        endAdornment={EyeIconComponent({
          onClick: handleEyeIconClickConfirmPassword,
        })}
        onChange={handleConfirmPassChange}
        error={formErrors.confirmPasswordError}
        helperText={
          formErrors.confirmPasswordError
            ? "Password and reset password must be same!"
            : ""
        }
      />
      <TypographyComponent
        variant="caption2"
        color={theme.palette.greyColors.grey500}
      >
        A min of 8 charaters with atleast 1 special character and number
        included
      </TypographyComponent>
      <SyledButtonComponent
        variant="contained"
        backgroundColor={theme.palette.primary.primary500}
        disabled={password === "" || confirmPassword === ""}
        onClick={handleSubmit}
      >
        Reset Password
      </SyledButtonComponent>
    </StyledDiv>
  );
};

export default ResetPassword;
