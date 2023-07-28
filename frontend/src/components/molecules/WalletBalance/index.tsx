import React from "react";
import { Grid, Stack } from "@mui/material";
import theme from "../../../theme";
import Image from "../../atoms/Image";
import TypographyComponent from "../../atoms/Typography";
import ButtonComponent from "../../atoms/Button";

export interface WalletBalanceProps {
  src: string;
  coinHeight: string;
  coinWidth: string;
  coinName: string;
  coinDescription: string;
  typographyChildren: string;
  button1: string;
  button2: string;
  label: string;
  value: string;
  buttonHeight: string;
}

const WalletBalance = (props: WalletBalanceProps) => {
  return (
    <>
      <Stack direction={"column"} width={"100%"} spacing={"24px"}>
        <Grid
          container
          justifyContent={"space-between"}
          alignItems={"center"}
          paddingLeft={"24px"}
          sx={{
            backgroundColor: theme.palette.structural.main,
            border: "1px solid #E8E8F7",
            padding: "24px",
            borderRadius: "4px",
          }}
        >
          <Grid item sx={{ width: "40%" }}>
            <Stack direction={"row"} spacing={"12px"}>
              <Image
                src={props.src}
                width={props.coinWidth}
                height={props.coinHeight}
              />
              <Stack direction={"column"}>
                <TypographyComponent
                  variant="h6"
                  children={props.coinName}
                  color={theme.palette.greyColors.grey500}
                />
                <TypographyComponent
                  variant="body1"
                  children={props.coinDescription}
                  color={theme.palette.textColor.mediumEmphasis}
                />
              </Stack>
            </Stack>
          </Grid>
          <Grid item>
            <Stack direction={"row"} spacing={"12px"}>
              <ButtonComponent
                children={props.button1}
                variant="outlined"
                sx={{
                  height: props.buttonHeight,
                  color: theme.palette.primary.primary500,
                }}
              />
              <ButtonComponent
                children={props.button2}
                variant="outlined"
                sx={{
                  height: props.buttonHeight,
                  color: theme.palette.primary.primary500,
                }}
              />
            </Stack>
          </Grid>
        </Grid>

        <Stack spacing={"24px"}>
          <TypographyComponent variant="subtitle2" children={props.label} />
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            paddingLeft={"24px"}
            paddingRight={"24px"}
            alignItems={"center"}
            sx={{
              backgroundColor: theme.palette.greyColors.grey50,
              height: "60px",
            }}
          >
            <TypographyComponent
              variant="subtitle1"
              children={props.typographyChildren}
              color={theme.palette.textColor.highEmphasis}
            />
            <TypographyComponent
              variant="subtitle1"
              children={props.value}
              color={theme.palette.textColor.highEmphasis}
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
export default WalletBalance;
