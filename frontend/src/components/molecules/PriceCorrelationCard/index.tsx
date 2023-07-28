import React from "react";
import { Stack } from "@mui/material";
import theme from "../../../theme";
import Image from "../../atoms/Image";
import TypographyComponent from "../../atoms/Typography";



export interface PriceCorrelationCardProps {
      title?: string;
      src : string;
      label:string;
      amount: string;
      description: string;
      percentage: string;
}

const PriceCorrelationCard = (props: PriceCorrelationCardProps) => {
    return (
        <>
            <Stack height={"58px"} width={"350px"} sx={{paddingLeft:"24px"}}>
                <Stack direction="row" spacing={"10px"}>
                    <Image src={props.src} width="42px" height="42px"/>
                    <Stack direction="row" justifyContent={"space-between"} width={"310px"}>
                        <Stack spacing={"4px"}>
                            <TypographyComponent variant="body1" children={props.label} color={theme.palette.textColor.highEmphasis}/>
                            <TypographyComponent variant="caption2" children={props.description} color={theme.palette.textColor.mediumEmphasis}/>
                        </Stack>
                        <Stack spacing={"4px"} alignItems={"end"} >
                            <TypographyComponent variant="body1" children={props.amount} color={theme.palette.textColor.highEmphasis}/>
                            <TypographyComponent variant="caption2" children={props.percentage} color={theme.palette.textColor.mediumEmphasis}/>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
};
export default PriceCorrelationCard;

