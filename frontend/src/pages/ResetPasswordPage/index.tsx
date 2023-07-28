import React, { useState } from "react";
import AuthTemplate from "../../components/templates/AuthTemplate";
import forget from "../../../public/assets/Images/login.svg";
import ResetPassword from "../../components/organisms/ResetPassword";
import ResetPasswordSuccessOrganism from "../../components/organisms/ResetPasswordSuccess";

const ResetPasswordPage = () => {
  const [pageState, setPageState] = useState(false);
  const handleClick = () => {
    setPageState(true);
  };

  return (
    <AuthTemplate
      src={forget}
      RightComponent={
        pageState ? (
          <ResetPasswordSuccessOrganism />
        ) : (
          <ResetPassword onSubmit={handleClick} />
        )
      }
    />
  );
};

export default ResetPasswordPage;
