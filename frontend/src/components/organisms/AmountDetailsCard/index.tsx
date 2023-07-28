import { styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import TypographyComponent from "../../atoms/Typography";
import theme from "../../../theme";
import ButtonComponent from "../../atoms/Button";
import { SliderBar } from "../../atoms/Slider";

const OuterContainer = styled("div")(() => ({
  height: "16.56vw",
  width: "100%",
  border: "1px solid #E8E8F7",
  borderRadius: "4px",
  backgroundColor:theme.palette.structural.main,
}));

const MainContainer = styled("div")(() => ({
  height: "14.06vw",
  width: "98%",
  display: "flex",
  flexDirection: "column",
  marginLeft: "1.25vw",
  marginTop: "1.25vw",
  justifyContent: "space-between",
}));

const BodyContainer = styled("div")(() => ({
  height: "12.291vw",
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));

const AmountContainer = styled("div")(() => ({
  height: "3.85vw",
  width: "98%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1px solid #E8E8F7",
  borderRadius: "4px",
}));

const SliderContainer = styled("div")(() => ({
  display: "flex",
  height: "4.583vw",
  width: "13.02vw",
  marginLeft: "43px",
  alignItems: "center",
}));

const CryptoContainer = styled("div")(() => ({
  height: "3.854vw",
  width: "98%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1px solid #E8E8F7",
  borderRadius: "4px",
}));

const StyledTypography = styled(TypographyComponent)(() => ({
  marginLeft: "0.833vw",
}));

const StyledButton = styled(ButtonComponent)(() => ({
  marginRight: "0.833vw",
  width: "93px",
  height: "2.1875vw",
  color: theme.palette.primary.primary500
}));

export interface AmountDetailsCardProps {
  coin: string;
  coinValue: number;
  totalBalance: number;
  isBuycard: boolean;
  coinQuantity?: number;
  onSliderChange: (newValue: number) => void;
}

export const formattedBalance = (totalBalance: number | undefined) => {
  return totalBalance?.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

const AmountDetailsCard = (props: AmountDetailsCardProps) => {
  const { coin, coinValue, totalBalance, coinQuantity, isBuycard, onSliderChange } = props;
  const [value, setValue] = useState(50);
  const onButtonClick = () => {
    setValue(100);
  };

  const handleSliderChangeWrapper = (
    event: Event,
    newValue: number | number[]
  ) => {
    setValue(newValue as number);
    console.log(newValue); 
  };
 
  useEffect(() => {
    const updatedValue = value;
    const bitcoinQuantity = isBuycard
      ? Number(((totalBalance / coinValue) * (updatedValue / 100)).toFixed(7))
      : ((coinQuantity && (coinQuantity * (value/100))) || 0)
    onSliderChange(bitcoinQuantity);
  }, [value]);
  
  return (
    <OuterContainer>
      <MainContainer>
        <TypographyComponent
          variant="body1"
          color={theme.palette.textColor.highEmphasis}
        >
          Amount details
        </TypographyComponent>
        <BodyContainer>
          <AmountContainer>
            {isBuycard ? (
              <StyledTypography
                variant="subtitle1"
                color={theme.palette.textColor.highEmphasis}
              >
                {"$" + formattedBalance(totalBalance * (value / 100))}
              </StyledTypography>
            ) : (
              <StyledTypography
                variant="subtitle1"
                color={theme.palette.textColor.highEmphasis}
              >
                {(props.coinQuantity &&
                  (props.coinQuantity * (value / 100)).toFixed(7)) ||
                  "0.00000"}
              </StyledTypography>
            )}
            <StyledButton variant="outlined" onClick={onButtonClick}>
              {isBuycard ? "Buy max" : "Sell max"}
            </StyledButton>
          </AmountContainer>
          <SliderContainer>
            <SliderBar
              size="small"
              defaultValue={50}
              value={value}
              onChange={handleSliderChangeWrapper}
              sx={{ display: "flex", height: "4.583vw", color: "#B2B2B9" }}
            />
            <TypographyComponent
              variant="caption1"
              color={theme.palette.textColor.mediumEmphasis}
              sx={{ marginRight: "0.625vw" }}
            >
              {"1" + coin + " = $" + formattedBalance(coinValue)}
            </TypographyComponent>
          </SliderContainer>
          <CryptoContainer>
            {isBuycard ? (
              <StyledTypography
                variant="subtitle1"
                color={theme.palette.textColor.highEmphasis}
              >
                {((totalBalance / coinValue) * (value / 100))
                  .toFixed(7)
                  .toString()}
              </StyledTypography>
            ) : (
              <StyledTypography
                variant="subtitle1"
                color={theme.palette.textColor.highEmphasis}
              >
                {"$" +
                  formattedBalance(
                    props.coinQuantity &&
                      props.coinQuantity * props.coinValue * (value / 100)
                  )}
              </StyledTypography>
            )}

            {isBuycard ? (
              <TypographyComponent
                variant="body1"
                color={theme.palette.textColor.mediumEmphasis}
                sx={{ marginRight: "0.833vw" }}
              >
                {coin}
              </TypographyComponent>
            ) : (
              <TypographyComponent
                variant="caption1"
                color={theme.palette.textColor.mediumEmphasis}
                sx={{ marginRight: "0.833vw" }}
              >
                USD coin (cash)
              </TypographyComponent>
            )}
          </CryptoContainer>
        </BodyContainer>
      </MainContainer>
    </OuterContainer>
  );
};

export default AmountDetailsCard;




