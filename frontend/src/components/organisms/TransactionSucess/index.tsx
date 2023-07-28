import { Box, styled } from "@mui/material";
import React from "react";
import IconComponent from "../../atoms/Icons";
import Success from "../../../../public/assets/Images/success.svg";
import TypographyComponent from "../../atoms/Typography";
import ButtonComponent from "../../atoms/Button";
import { transactionSuccess } from "../../../constants";
import theme from "../../../theme";
import { useNavigate } from "react-router-dom";

export interface TransactionSuccessProps {
  successType: "buy" | "sell";
  price: string;
}

const ContainerBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  alignContent: "center",
  alignItems: "center",
  width: "100%",
  backgroundColor: theme.palette.primary.primary100,
}));

const ButtonContainer = styled(Box)(() => ({
  display: "flex",
  gap: "24px",
  alignContent: "center",
  alignItems: "center",
}));

const TextContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  alignItems: "center",
  width: "60%",
}));

const TransactionSuccess: React.FC<TransactionSuccessProps> = ({
  successType,
  price,
  ...props
}) => {
  const nav = useNavigate();
  return (
    <div>
      <ContainerBox data-testid="transaction-success-container">
        <IconComponent src={Success} height="64px" width="64px" />
        <TextContainer>
          <TypographyComponent variant="h4" data-testid="total-price">
            {price}
          </TypographyComponent>
          <TypographyComponent
            variant="body2"
            style={{
              textAlign: "center",
            }}
          >
            {successType == "sell"
              ? transactionSuccess.sell.text
              : transactionSuccess.buy.text}
          </TypographyComponent>
        </TextContainer>
        <Box></Box>
        <ButtonContainer>
          <ButtonComponent
            variant="outlined"
            style={{ height: "42px" }}
            sx={{ color: theme.palette.primary.primary500 }}
          >
            {successType === "buy"
              ? transactionSuccess.buy.button
              : transactionSuccess.sell.button}
          </ButtonComponent>

          <ButtonComponent
            backgroundColor={theme.palette.primary.primary500}
            variant="contained"
            style={{ height: "42px" }}
            onClick={() => {
              nav("/wallet");
            }}
          >
            GO TO USD COIN
          </ButtonComponent>
        </ButtonContainer>
      </ContainerBox>
    </div>
  );
};

export default TransactionSuccess;
