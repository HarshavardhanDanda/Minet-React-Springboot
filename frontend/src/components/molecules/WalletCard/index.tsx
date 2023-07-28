import { styled } from "@mui/material";
import React from "react";
import IconComponent from "../../atoms/Icons";
import dollar from "../../../../public/assets/Images/dollar.svg";
import TypographyComponent from "../../atoms/Typography";
import theme from "../../../theme";

const MainContainer = styled("div")(() => ({
  width: "100%",
  height: "98px",
  display: "flex",
  flexDirection: "column",
}));

const InfoContainer = styled("div")(() => ({
  width: "100%",
  height: "78px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

const CoinInfo = styled("div")(() => ({
  width: "50%",
  height: "58px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginLeft: "10px",
}));

const LeftComponent = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
}));

interface WalletCardProps {
  balance: number;
}

const WalletCard: React.FC<WalletCardProps> = ({ balance }) => {
  return (
    <MainContainer>
      <TypographyComponent
        variant="subtitle1"
        color={theme.palette.textColor.highEmphasis}
      >
        My wallets
      </TypographyComponent>
      <InfoContainer>
        <LeftComponent>
          <IconComponent height="42px" width="42px" src={dollar} />
          <CoinInfo>
            <TypographyComponent
              variant="body1"
              color={theme.palette.textColor.highEmphasis}
              sx={{whiteSpace: 'nowrap'}}
            >
              USD Coin
            </TypographyComponent>
            <TypographyComponent variant="caption2">
              US Dollar
            </TypographyComponent>
          </CoinInfo>
        </LeftComponent>
        <TypographyComponent
          variant="body1"
          color={theme.palette.textColor.highEmphasis}
          sx={{whiteSpace: 'nowrap'}}
        >
          {"$ " +
            balance.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
        </TypographyComponent>
      </InfoContainer>
    </MainContainer>
  );
};

export default WalletCard;
