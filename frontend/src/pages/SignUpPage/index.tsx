import React from "react";
import AuthTemplate from "../../components/templates/AuthTemplate";
import SignUp from "../../components/organisms/SignUp";
import signUp from "../../../public/assets/Images/signup.svg"

const SignUpPage = () => {
  return (
    <AuthTemplate
      src={signUp}
      RightComponent={<SignUp/>}
    />
  );
};

export default SignUpPage;