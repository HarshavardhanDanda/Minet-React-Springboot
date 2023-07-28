
import {  styled } from "@mui/material";
import React from "react";
import IconComponent from "../../atoms/Icons";

import TypographyComponent from "../../atoms/Typography";
import theme from "../../../theme";

const Outerbox = styled("div")(() => ({
  width: "100%",
  height: "167px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  border: "1px solid #E8E8F7",
  borderRadius:"4px",
  backgroundColor:theme.palette.structural.main,
}));

const InnerBox = styled("div")(() => ({
  width: "96%",
  height: "81px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1px solid #E8E8F7",
  borderRadius:"4px",
  marginLeft: "1.25vw",
}));


const LeftBox = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  marginLeft: "16px",
  gap:"12px",
}));

export interface BalnceMethodProps {
  balance: number;
  symbol:string;
  src:string;
  coinName:string;
}

const SellTotalBalance: React.FC<BalnceMethodProps> = ({ balance ,coinName,symbol,src}) => {
   console.log("sell balance"+balance+" "+symbol)
  return (
    <Outerbox data-testid="sellTotalBalance">
      <TypographyComponent
        variant="body1"
        color={theme.palette.textColor.highEmphasis}
        sx={{marginLeft: "1.25vw"}}
      >
        Total Balance
      </TypographyComponent>
      <InnerBox>
        <LeftBox>
        <IconComponent src={src} width="33px" height="33px"></IconComponent>
        <TypographyComponent
        variant="caption1"
        color={theme.palette.textColor.highEmphasis}
        >
            {coinName}

        </TypographyComponent>
          
        </LeftBox>
        <TypographyComponent
          variant="subtitle1"
          color={theme.palette.textColor.mediumEmphasis}
          sx={{ marginRight: "16px" }}
        >
            
          {balance ? (balance.toFixed(7)+" "+symbol) : ""}
        </TypographyComponent>
      </InnerBox>
    </Outerbox>
  );
};

export default SellTotalBalance;
