import { styled } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
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
import { getUserByEmailId } from "../../../services/users";
import { useDispatch } from "react-redux";
import { userActions } from "../../../store/user";
import { useNavigate } from "react-router-dom";
import { tokenActions } from "../../../store/JWT";
import { CreateDefaultToken, CreateTokenByUser } from "../../../store/JWT/tokens";

const MainContainer = styled("div")(() => ({
  width: "100%",
  maxWidth: "656px",
  maxHeight: "608px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const LoginPageOuterDiv = styled("div")(() => ({
  width: "100%",
  maxWidth: "512px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
}));

const LoginForm = styled("div")(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "1.298vw",
  marginBottom: "2.380vw",
}));

const SocialLoginIconButtons = styled("div")(() => ({
  display: "flex",
  width: "100%",
  height: "auto",
  gap: "1rem",
  marginTop: "2rem",
  marginBottom: "1.5rem",
}));

const FooterText = styled("div")(() => ({
  display: "flex",
  gap: "0.5rem",
}));

const SyledButtonComponent = styled(ButtonComponent)(() => ({
  borderRadius: "0.5rem",
  padding: "0 0.5rem",
  width: "100%",
  height: "2.5rem",
}));

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const [userData, setUserData] = useState([]);
  const [fieldTypePassword, setFieldTypePassword] = useState("password");
  const action = useDispatch();
  const nav = useNavigate();

  const handleEyeIconClickPassword = () => {
    fieldTypePassword == "password"
      ? setFieldTypePassword("text")
      : setFieldTypePassword("password");
  };
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  function handleForgotPasswordChange() {
    nav("forgotPassword");
  }

  const { loginWithRedirect } = useAuth0();
  const handleSubmit = () => {
    const authentication = async () => {
      try {
        const token = await CreateDefaultToken();
        action(tokenActions.saveToken(token))
        const response = await getUserByEmailId(email,token);
        if(response.password === password){
          setErrors(false)
          setUserData(response);
          const newToken = await CreateTokenByUser(email, password);
          action(userActions.loginUser(response));
          action(tokenActions.saveToken(newToken))
          nav("dashboard");
        }          
        else {
          setErrors(true)
          action(userActions.logoutUser());
        }
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };
    authentication();
  };

  useEffect(() => {
    if (userData.length === 0) {
      console.log("Authentication unsuccessful");
    } else {
      action(userActions.loginUser(userData[0]));
      console.log("Authentication Successful");
    }
  }, [userData]);

  return (
    <MainContainer>
      <LoginPageOuterDiv>
        <TypographyComponent
          variant="h4"
          color={theme.palette.textColor.highEmphasis}
          sx={{ marginBottom: "1.731vw" }}
        >
          Login to Minet
        </TypographyComponent>
        <LoginForm>
          <TextFieldWithLabel
            label="Email"
            placeholder="you@company.com"
            type="email"
            onChange={handleEmailChange}
            error={errors}
            helperText={errors ? "Wrong Credentials!" : ""}
          />
          <TextFieldWithLabel
            label="Password"
            placeholder="Enter Password"
            type={fieldTypePassword}
            endAdornment={EyeIconComponent({
              onClick: handleEyeIconClickPassword,

            clicked: !(fieldTypePassword === "password") 
            })}
            onChange={handlePassChange}
            error={errors}
            helperText={errors ? "Wrong Credentials!" : ""}
          />
          <TypographyComponent
            variant="caption2"
            color={theme.palette.primary.primary500}
            onClick={handleForgotPasswordChange}
            sx={{cursor: 'pointer'}}
          >
             
            Forgot Password
          </TypographyComponent>
          <SyledButtonComponent
            variant="contained"
            backgroundColor={theme.palette.primary.primary500}
            disabled={email === "" || password === ""}
            onClick={handleSubmit}
            
          >
            Sign In
          </SyledButtonComponent>
        </LoginForm>
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
            Don't have an account?
          </TypographyComponent>
          <TypographyComponent
            variant="body1"
            color={theme.palette.primary.primary500}
            onClick={() => {
              nav("/signup");
            }}
            sx={{cursor: 'pointer'}}
          >
            Signup
          </TypographyComponent>
        </FooterText>
      </LoginPageOuterDiv>
    </MainContainer>
  );
};
export default Login;
