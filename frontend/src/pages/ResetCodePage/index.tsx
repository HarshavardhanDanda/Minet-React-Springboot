import React from "react";
import AuthTemplate from "../../components/templates/AuthTemplate";
import ResetCode from "../../components/organisms/ResetCode";
import LeftImage from "../../../public/assets/Images/login.svg";
import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const ResetCodePage = () => {
  const { id } = useParams();
  const nav = useNavigate();
  return (
    <AuthTemplate
      src={LeftImage}
      RightComponent={
        <Box sx={{ width: "90%", height: "85%" }}>
          <ResetCode
            onButtonClick={() => {
              nav("/resetPassword/" + id);
            }}
            onLinkClick={() => {
              nav("/");
            }}
          />
        </Box>
      }
    />
  );
};

export default ResetCodePage;
