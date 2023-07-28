import React from "react";
import { styled } from "@mui/material";
import theme from "../../../theme";

import Image from "../../atoms/Image";
import TypographyComponent from "../../atoms/Typography";
import ChipItem from "../../atoms/Chip";

const MainContainer = styled("div")({
  height: "46px",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

const InnerContainer = styled("div")({
  display: "flex",
});

const DateContainer = styled("div")({
  height: "44px",
  width: "25px",
  display: "flex",
  flexDirection: "column",
  marginRight: "12px",
});

const ImageContainer = styled(Image)({
  height: "44px",
  width: "44px",
  display: "flex",
  marginRight: "12px",
});

const CoinContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

const CoinDescriptionContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "18px",
});

const ValueContainer = styled("div")({
  height: "42px",
  width: "200px",
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
  marginRight: "26px",
});

export interface TransactionCardProps {
  src: string;
  coinName: string;
  coinDescription: string;
  valueBTC: string;
  value: string;
  date: string;
  type: string;
}

const TransactionCard = (props: TransactionCardProps) => {
  const getMonth = (date: string) => {
    const dateObj = new Date(date);
    const monthName = dateObj.toLocaleString("default", { month: "long" });
    return monthName.slice(0, 3);
  };
  return (
    <>
      <MainContainer>
        <InnerContainer>
          <DateContainer>
            <TypographyComponent
              children={getMonth(props.date)}
              variant="caption2"
              color={theme.palette.textColor.mediumEmphasis}
            />
            <TypographyComponent
              children={props.date.slice(8, 10)}
              variant="subtitle2"
              color={theme.palette.textColor.highEmphasis}
            />
          </DateContainer>
          <ImageContainer src={props.src} width={"44px"} height={"44px"} />
          <CoinContainer>
            <TypographyComponent
              children={props.coinName}
              variant="body1"
              color={theme.palette.textColor.highEmphasis}
            />
            <CoinDescriptionContainer>
              <TypographyComponent
                children={props.coinDescription}
                variant="caption2"
                color={theme.palette.textColor.mediumEmphasis}
              />
              <ChipItem
                label={props.type == "sell" ? "Sold" : "Purchased"}
                chiptype="rounded"
              />
            </CoinDescriptionContainer>
          </CoinContainer>
        </InnerContainer>
        <ValueContainer>
          <TypographyComponent
            children={props.valueBTC}
            variant="body1"
            color={theme.palette.textColor.highEmphasis}
          />
          <TypographyComponent
            children={props.value}
            variant="caption2"
            color={theme.palette.textColor.mediumEmphasis}
          />
        </ValueContainer>
      </MainContainer>
    </>
  );
};
export default TransactionCard;
