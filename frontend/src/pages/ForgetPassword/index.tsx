import React from "react";
import AuthTemplate from "../../components/templates/AuthTemplate";
import forget from "../../../public/assets/Images/login.svg";
import FogotPassword from "../../components/organisms/ForgotPassword";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const nav = useNavigate();
  return (
    <>
      <AuthTemplate
        src={forget}
        RightComponent={
          <FogotPassword
            onButtonClick={(id) => {
              nav("/resetCode/" + id);
            }}
            onLinkClick={() => {
              nav("/");
            }}
          />
        }
      />
    </>
  );
};

export default ForgotPasswordPage;
