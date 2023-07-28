import { styled } from "@mui/material";
import React from "react";
import IconComponent from "../../atoms/Icons";
import TypographyComponent from "../../atoms/Typography";
import theme from "../../../theme";
import GreenTickIcon from "../../../../public/assets/icons/GreenTick.svg";

interface SelectedCryptoCardProps {
  isSelected: boolean;
  coinName: string;
  coinValue: number;
  src: string;
}

const CardContainer = styled("div")(
  ({ isSelected }: { isSelected: boolean }) => ({
    display: "flex",
    width: "159px",
    height: "156px",
    flexDirection: "column",
    justifyContent: "flex-end",
    border: isSelected ? "2px solid #0052FF" : "None",
  })
);

const CoinDetails = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "159px",
  height: "132px",
}));

const StyleTickIcon = styled("div")(() => ({
  width: "159px",
  height: "15px",
  display: "flex",
  justifyContent: "flex-end",
}));

const TickIcon = styled("div")(() => ({
  marginRight: "10.83px",
}));

const SelectedCryptoCard: React.FC<SelectedCryptoCardProps> = ({
  isSelected,
  coinName,
  coinValue,
  src,
}) => {
  

  return (
    <CardContainer isSelected={isSelected}>
      {isSelected && (
        <StyleTickIcon>
          <TickIcon>
            <IconComponent
              src={GreenTickIcon}
              width="16.66px"
              height="11.43px"
            ></IconComponent>
          </TickIcon>
        </StyleTickIcon>
      )}
      <CoinDetails>
        <IconComponent src={src} width="56px" height="56px"></IconComponent>
        <TypographyComponent
          variant="body1"
          color={theme.palette.greyColors.grey500}
          sx={{ marginTop: "10px" }}
        >
          {coinName}
        </TypographyComponent>
        <TypographyComponent
          variant="caption1"
          color={theme.palette.textColor.mediumEmphasis}
        >
          {"$" + coinValue.toLocaleString("en-US").toString()}
        </TypographyComponent>
      </CoinDetails>
    </CardContainer>
  );
};

export default SelectedCryptoCard;
