import React from "react";
import { styled } from "@mui/material";
import Image from "../../atoms/Image"
import GraphWithTypography from "../GraphWithTypography";
import TypographyComponent from "../../atoms/Typography";
import theme from "../../../theme";
import ChipItem from "../../atoms/Chip";

const MainContainer = styled("div")({
        height: '82px',
        display: 'flex',
        flexDirection: 'row',
        padding: "24px",
        border: "1px solid #E8E8F7",
        borderRadius: "4px",
        "&:hover": {
          cursor: "pointer",
        }
})

const ImageContainer = styled(Image)({
        height: '42px',
        width: '42px',
        display: 'flex',
        marginRight: '10px'
})

const CoinContainer = styled("div")({
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    marginRight: '13.5px',
    width: "100%"
})

const CoinDescriptionContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  alignItems: "flex-start",
  width: "25%",
});

export interface WatchlistCardProps {
  src: string;
  coinName: string;
  price: number;
  priceChange: number;
  graphData: number[];
  cardWidth?: string | number;
}

const WatchlistCard = (props: WatchlistCardProps) => {  
  return (
    <>
      <MainContainer sx={{ width: props.cardWidth }}>
        <ImageContainer src={props.src} width={"44px"} height={"44px"} />
        <CoinDescriptionContainer>
          <CoinContainer>
            <TypographyComponent
              children={props.coinName}
              variant="body1"
              color={theme.palette.textColor.highEmphasis}
            />
            <TypographyComponent
              children={"$" + props.price.toLocaleString("en-US")}
              variant="body1"
              color={theme.palette.textColor.highEmphasis}
            />
          </CoinContainer>
          <ChipItem label="24h" chiptype="rounded" chipvariant="light" />
        </CoinDescriptionContainer>
        <GraphWithTypography
          componentSx={{ width: "100%", height: "100%" }}
          typographyColor={
            props.priceChange >=0
              ? theme.palette.primary.success500!
              : theme.palette.loss.borderColor
          }
          text={
            props.priceChange >=0
              ? "+" + props.priceChange + "%"
              : props.priceChange + "%"
          }
          graphData={props.graphData}
          graphHeight={"65%"}
          graphWidth={"100%"}
          graphColor={
            props.priceChange >=0
              ? theme.palette.primary.success500
              : theme.palette.loss.borderColor
          }
        />
      </MainContainer>
    </>
  );
};
export default WatchlistCard;