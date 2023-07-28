import { Grid, styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ImageComponent from "../../atoms/Image";
import Logo from "../../../../public/assets/icons/logo.svg";
import DashboardInActive from "../../../../public/assets/icons/dashoardInactive.svg";
import DashboardActive from "../../../../public/assets/icons/dashboard.svg";
import Analytics from "../../../../public/assets/icons/portfolio.svg";
import Trades from "../../../../public/assets/icons/trade.svg";
import Notification from "../../../../public/assets/icons/notification.svg";
import LogOut from "../../../../public/assets/icons/logout.svg";
import IconComponent from "../../atoms/Icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../../../store/user";
import { tokenActions } from "../../../store/JWT";

interface IconProps {
  showCheckIcon: boolean;
}

const StyledGrid = styled(Grid)(() => ({
  width: "12vh",
  height: "80vh",
  gap: "44px",
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const StyledBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "5%",
  height: "5%",

  "&:hover": {
    cursor: "pointer",
    transform: "scale(1.25)",
  },
}));

const iconsList = [Analytics, Trades, Notification];

const SideNavComponent: React.FC<IconProps> = ({ showCheckIcon }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  return (
    <StyledGrid data-testid="sideNav">
      <StyledBox key="logo">
        <ImageComponent src={Logo} width="32vh" height="32vh" />
      </StyledBox>

      <StyledBox
        data-testid="Trade"
        onClick={() => {
          nav("/dashboard");
        }}
      >
        <IconComponent
          src={showCheckIcon ? DashboardActive : DashboardInActive}
          width="3vh"
          height="3vh"
        />
      </StyledBox>

      {iconsList.map((iconSrc) => (
        <StyledBox key={iconSrc}>
          <IconComponent src={iconSrc} height="3vh" width="3vh" />
        </StyledBox>
      ))}

      <StyledBox
        onClick={() => {
          dispatch(userActions.logoutUser());
          dispatch(tokenActions.logoutToken())
          nav("/");
        }}
      >
        <IconComponent src={LogOut} width="4vh" height="4vh" />
      </StyledBox>
    </StyledGrid>
  );
};

export default SideNavComponent;
