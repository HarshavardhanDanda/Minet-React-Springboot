import { Stack } from "@mui/material";
import theme from "../../../theme";
import TypographyComponent from "../../atoms/Typography";
import React from "react";
export interface WalletTotalProps {
    typographyChildren: string;
    value: string;
    justifyContent: string;

}
const WalletTotal = (props: WalletTotalProps) => {
    return (
        <>
          <Stack spacing={"24px"}>
                    <Stack direction={"row"} justifyContent={props.justifyContent} paddingLeft={"24px"} paddingRight={"24px"} alignItems={"center"} sx={{backgroundColor: theme.palette.greyColors.grey50, height:"60px"}}>
                        <TypographyComponent variant="subtitle1" children={props.typographyChildren} color={theme.palette.textColor.highEmphasis} sx={{marginRight:"10px"}}/>
                        <TypographyComponent variant="subtitle1" children={props.value} color={theme.palette.textColor.highEmphasis}/>
                    </Stack>
                </Stack>
        </>
    )
}

export default WalletTotal;