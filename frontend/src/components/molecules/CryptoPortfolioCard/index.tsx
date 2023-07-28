import React from "react";
import { Grid, Stack, SxProps } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import Image from "../../atoms/Image";
import theme from "../../../theme";
import { Theme } from "@emotion/react";

export interface CryptoPortfolioCardProps {
  id?: number;
  iconSrc: string;
  iconWidth?: string;
  iconHeight?: string;
  coinName: string;
  coinShortForm: string;
  amount: number;
  percentage: number;
  percentageColor?: string;
  sxCard?: SxProps<Theme>;
  onCardClick?: React.MouseEventHandler<HTMLDivElement>;
}

interface DefaultProps {
  iconWidth?: string;
  iconHeight?: string;
  percentageColor?: string;
  sxCard?: SxProps<Theme>;
}

const defaultProps: DefaultProps = {
  iconWidth: "42px",
  iconHeight: "42px",
  percentageColor: theme.palette.primary.success500,
  sxCard: {
    width: "100%",
    height: "58px",
    padding: "8px 0px 8px 0px",
    "&.MuiGrid-container": {
      "&:hover": {
        boxShadow: "0px 1px 10px rgba(44, 44, 44, 0.08);",
      },
    },
  },
};
const CryptoPortfolioCard = (props: CryptoPortfolioCardProps) => {
  return (
    <Grid
      container
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={defaultProps.sxCard}
      onClick={props.onCardClick}
    >
      <Grid item>
        <Stack direction={"row"} spacing={1.5}>
          <Image
            src={props.iconSrc}
            width={props.iconWidth ?? defaultProps.iconWidth!}
            height={props.iconHeight ?? defaultProps.iconHeight!}
          />
          <Stack direction={"column"}>
            <TypographyComponent
              variant="body1"
              color={theme.palette.textColor.highEmphasis}
            >
              {props.coinName}
            </TypographyComponent>
            <TypographyComponent
              variant="caption2"
              color={theme.palette.textColor.mediumEmphasis}
            >
              {props.coinShortForm}
            </TypographyComponent>
          </Stack>
        </Stack>
      </Grid>
      <Grid item>
        <Stack direction={"column"} alignItems={"flex-end"}>
          <TypographyComponent
            variant="body1"
            color={theme.palette.textColor.highEmphasis}
          >
            {"$ " + props.amount.toFixed(2)}
          </TypographyComponent>
          <TypographyComponent
            variant="caption2"
            color={props.percentageColor ?? defaultProps.percentageColor}
          >
            {props.percentage < 0
              ? props.percentage.toFixed(2) + "%"
              : "+" + props.percentage.toFixed(2) + "%"}
          </TypographyComponent>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default CryptoPortfolioCard;
