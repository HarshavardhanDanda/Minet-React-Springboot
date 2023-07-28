import { styled } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import TypographyComponent from "../../atoms/Typography";
import theme from "../../../theme";
import TextFieldWithLabel from "../../molecules/TextFieldWithLabel";
import EyeIconComponent from "../../molecules/EyeIconComponent";
import ButtonComponent from "../../atoms/Button";
import LineDivider from "../../atoms/LineDivider";
import IconButton from "../../molecules/IconButton";
import google from "../../../../public/assets/icons/google.svg";
import facebook from "../../../../public/assets/icons/stripe.svg";
import microsoft from "../../../../public/assets/icons/xero.svg";
import { passwordRegex } from "../ResetPassword";
import { createUser, getUsers } from "../../../services/users";
import { useNavigate } from "react-router-dom";

import { userActions } from "../../../store/user";
import { tokenActions } from "../../../store/JWT";
import { useDispatch } from "react-redux";
import { CreateDefaultToken } from "../../../store/JWT/tokens";
import { CreateWallet } from "../../../services/wallets";

const MainContainer = styled("div")(() => ({
  width: "100%",
  minHeight: "700px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const SignUpOuterDiv = styled("div")(({ theme }) => ({
  width: "80%",
  maxWidth: "512px",
  minHeight: "60vh",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  alignItems: "flex-start",
  padding: theme.spacing(4),
}));

const SignUpForm = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));

const SocialLoginIconButtons = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1),
}));

const FooterText = styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
}));

const StyledButtonComponent = styled(ButtonComponent)(({ theme }) => ({
  borderRadius: "6px",
  padding: theme.spacing(0, 2),
  width: "100%",
  height: "42px",
  cursor: "pointer",
}));

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fieldTypePassword, setFieldTypePassword] = useState("password");
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    password: false,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEyeIconClickPassword = () => {
    fieldTypePassword == "password"
      ? setFieldTypePassword("text")
      : setFieldTypePassword("password");
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const validatePassword = (password: string) => {
    return passwordRegex.test(password);
  };

  const handleLoginButtonClick = () => {
    navigate("/");
  };

  const { loginWithRedirect } = useAuth0();

  const handleSubmit = () => {
    const nameError: boolean = name === "";
    const emailError: boolean = !validateEmail(email);
    const passwordError: boolean = !validatePassword(password);

    if (emailError || passwordError || nameError) {
      setFormErrors({
        name: nameError,
        email: emailError,
        password: passwordError,
      });
      return;
    } else {
      authentication();
    }
    async function authentication() {
      const token = await CreateDefaultToken();
      dispatch(tokenActions.saveToken(token))
      const allUsers = await getUsers(token);
      const users = allUsers.filter((user: any) => (user.emailId === email));
      if (users.length === 0) {
        try {
          const user = await createUser(name, email, password, token);
          dispatch(
            userActions.loginUser(user)
          );
          await CreateWallet({
            name: "USD Coin Wallet",
            balance: 40000,
            cryptoCurrencyId: 3,
            userId: user.id,
            priceChange: 0,
          }, token);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
        }
      } else {
        setFormErrors({ name: false, email: true, password: false });
      }
    }
  };

  return (
    <MainContainer>
      <SignUpOuterDiv>
        <TypographyComponent
          variant="h4"
          color={theme.palette.textColor.highEmphasis}
          sx={{ marginBottom: "1.66vw" }}
        >
          Signup with Minet
        </TypographyComponent>
        <SignUpForm>
          <TextFieldWithLabel
            label="Full name"
            placeholder="Eg: John Doe"
            type="text"
            onChange={handleNameChange}
            error={formErrors.name}
            helperText={formErrors.name ? "Name cannot be empty!" : ""}
          />
          <TextFieldWithLabel
            label="Email"
            placeholder="you@company.com"
            type="email"
            onChange={handleEmailChange}
            error={formErrors.email}
            helperText={formErrors.email ? "Wrong email format!" : ""}
          />
          <TextFieldWithLabel
            label="Password"
            placeholder="Create Password"
            type={fieldTypePassword}
            endAdornment={EyeIconComponent({
              onClick: handleEyeIconClickPassword,

              clicked: !(fieldTypePassword === "password"),
            })}
            onChange={handlePassChange}
            error={formErrors.password}
            helperText={formErrors.password ? "Wrong password format!" : ""}
          />
          <TypographyComponent
            variant="caption2"
            color={theme.palette.greyColors.grey500}
          >
            A min of 8 charaters with atleast 1 special character and number
            included
          </TypographyComponent>
          <StyledButtonComponent
            variant="contained"
            backgroundColor={theme.palette.primary.primary500}
            disabled={name === "" || email === "" || password === ""}
            onClick={handleSubmit}
          >
            Sign up
          </StyledButtonComponent>
        </SignUpForm>
        <LineDivider sx={{ width: "100%", color: "#7D7D89" }}>Or</LineDivider>
        <SocialLoginIconButtons>
          <IconButton
            src={google}
            text="Google"
            onClick={() => loginWithRedirect()}
          />
          <IconButton src={facebook} text="Facebook" />
          <IconButton src={microsoft} text="Microsoft" />
        </SocialLoginIconButtons>
        <FooterText>
          <TypographyComponent
            variant="body1"
            color={theme.palette.textColor.mediumEmphasis}
          >
            Already have an account?
          </TypographyComponent>
          <TypographyComponent
            variant="body1"
            color={theme.palette.primary.primary500}
            onClick={handleLoginButtonClick}
            sx={{ cursor: "pointer" }}
          >
            Login
          </TypographyComponent>
        </FooterText>
      </SignUpOuterDiv>
    </MainContainer>
  );
};

export default SignUp;
