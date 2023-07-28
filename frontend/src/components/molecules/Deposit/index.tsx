
import {  styled } from "@mui/material";
import React from "react";
import IconComponent from "../../atoms/Icons";

import TypographyComponent from "../../atoms/Typography";
import theme from "../../../theme";

const Outsidebox = styled("div")(() => ({
  width: "100%",
  height: "167px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  border: "1px solid #E8E8F7",
  borderRadius:"4px",
  backgroundColor:theme.palette.structural.main,
}));

const InsideBox = styled("div")(() => ({
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


const LefterBox = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  marginLeft: "16px",
  gap:"12px",
}));

export interface DepositMethodProps {
  src:string;

}

const Deposit: React.FC<DepositMethodProps> = ({ src}) => {
   
  return (
    <Outsidebox data-testid="deposit">
      <TypographyComponent
        variant="body1"
        color={theme.palette.textColor.highEmphasis}
        sx={{marginLeft: "1.25vw"}}
      >
        Deposit to
      </TypographyComponent>
      <InsideBox>
        <LefterBox>
        <IconComponent src={src} width="33px" height="33px"></IconComponent>
        <TypographyComponent
        variant="caption1"
        color={theme.palette.textColor.highEmphasis}
        >
           USD Coin (cash) 

        </TypographyComponent>
          
        </LefterBox>
        <TypographyComponent
          variant="caption1"
          color={theme.palette.textColor.mediumEmphasis}
          sx={{ marginRight: "16px" }}
        >
            
          Default
        </TypographyComponent>
      </InsideBox>
    </Outsidebox>
  );
};

export default Deposit;
