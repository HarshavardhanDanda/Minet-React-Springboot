import { styled } from "@mui/material";
import React from "react";
import IconComponent from "../../atoms/Icons";
import dollar from "../../../../public/assets/Images/dollar.svg";
import TypographyComponent from "../../atoms/Typography";
import theme from "../../../theme";

const MainContainer = styled("div")(() => ({
  width: "100%",
  height: "166px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  border: "1px solid #E8E8F7",
  borderRadius:"4px",
  backgroundColor:theme.palette.structural.main,
}));

const InfoContainer = styled("div")(() => ({
  width: "96%",
  height: "80px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1px solid #E8E8F7",
  borderRadius:"4px",
  marginLeft: "1.25vw",
}));

const CoinInfo = styled("div")(() => ({
  width: "400px",
  height: "48px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginLeft: "10px",
}));

const LeftComponent = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  marginLeft: "16px",
}));

interface PaymentMethodProps {
  balance: number;
}

const PaymentCard: React.FC<PaymentMethodProps> = ({ balance }) => {
  return (
    <MainContainer>
      <TypographyComponent
        variant="body1"
        color={theme.palette.textColor.highEmphasis}
        sx={{marginLeft: "1.25vw"}}
      >
        Payment Method
      </TypographyComponent>
      <InfoContainer>
        <LeftComponent>
          <IconComponent height="32px" width="32px" src={dollar} />
          <CoinInfo>
            <TypographyComponent
              variant="caption1"
              color={theme.palette.textColor.highEmphasis}
            >
              USD Coin (Cash)
            </TypographyComponent>
            <TypographyComponent
              variant="subtitle1"
              color={theme.palette.textColor.mediumEmphasis}
            >
              {"Total Balance - $ " +
                balance.toLocaleString("en-US").toString()}
            </TypographyComponent>
          </CoinInfo>
        </LeftComponent>
        <TypographyComponent
          variant="caption1"
          color={theme.palette.textColor.mediumEmphasis}
          sx={{ marginRight: "16px" }}
        >
          Default
        </TypographyComponent>
      </InfoContainer>
    </MainContainer>
  );
};

export default PaymentCard;
