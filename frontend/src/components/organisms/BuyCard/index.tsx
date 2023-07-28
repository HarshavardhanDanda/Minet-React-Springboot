import React from "react";
import { Stack } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import LineDivider from "../../atoms/LineDivider";
import Image from "../../atoms/Image";
import theme from "../../../theme";
import Card from "../../../../public/assets/icons/buycard.svg";
import Truck from "../../../../public/assets/icons/buytruck.svg";
import Wallet from "../../../../public/assets/icons/buyWallet.svg";
import ButtonComponent from "../../atoms/Button";
import SellCard from "../../../../public/assets/icons/paymentCoin.svg";
import Doller from "../../../../public/assets/icons/dollerCoin.svg";

interface BuyCardProps {
  isBuycard: boolean;
  coinAmount: number;
  coinCost: number;
  paymentCard: string;
  delivery: string;
  wallet: string;
  transactionFee: number;
  symbol: string;
  buttonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const BuyCard = (props: BuyCardProps) => {
  return (
    <Stack
      data-testid="buyAndSell"
      direction={"column"}
      sx={{
        width: "100%",
        height: "100%",
        paddingBottom: "7%",
        backgroundColor: "#ffffff",
        border: "1px solid #E8E8F7",
        borderRadius: "4px",
      }}
    >
      <Stack
        direction={"column"}
        sx={{ width: "100%", height: "23%" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <TypographyComponent
          variant="caption1"
          color={theme.palette.textColor.mediumEmphasis}
        >
          {props.isBuycard ? "You are buying" : "You are selling"}
        </TypographyComponent>
        <TypographyComponent
          variant="h6"
          color={theme.palette.textColor.highEmphasis}
        >
          {+props.coinAmount.toFixed(7) + " " + props.symbol}
        </TypographyComponent>
        <TypographyComponent
          variant="caption1"
          color={theme.palette.textColor.mediumEmphasis}
        >
          {"1" + props.symbol + " = $" + props.coinCost.toLocaleString("en-US")}
        </TypographyComponent>
      </Stack>
      <LineDivider />
      <Stack
        direction={"row"}
        sx={{ width: "40%", height: "39.6%" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack
          direction={"row"}
          sx={{ width: "100%", height: "81%" }}
          justifyContent={"end"}
        >
          <Stack
            direction={"column"}
            sx={{ width: "20%", height: "100%" }}
            divider={
              <LineDivider
                orientation="vertical"
                sx={{ height: "16.5%", borderStyle: "dashed" }}
              />
            }
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Image
              src={props.isBuycard ? Card : SellCard}
              width="100%"
              height="22%"
            />
            <Image src={Truck} width="100%" height="22%" />
            <Image
              src={props.isBuycard ? Wallet : Doller}
              width="100%"
              height="22%"
            />
          </Stack>
          <Stack
            direction={"column"}
            sx={{ width: "65%", height: "100%" }}
            justifyContent={"space-between"}
          >
            <Stack direction={"column"} sx={{ width: "100%", height: "22%" }}>
              <TypographyComponent
                variant="caption2"
                color={theme.palette.textColor.mediumEmphasis}
                sx={{ whiteSpace: "nowrap" }}
              >
                {props.isBuycard ? "Payment method" : "Paying through"}
              </TypographyComponent>
              <TypographyComponent
                variant="body1"
                color={theme.palette.textColor.highEmphasis}
                sx={{ whiteSpace: "nowrap" }}
              >
                {props.paymentCard}
              </TypographyComponent>
            </Stack>
            <Stack direction={"column"} sx={{ width: "100%", height: "22%" }}>
              <TypographyComponent
                variant="caption2"
                color={theme.palette.textColor.mediumEmphasis}
                sx={{ whiteSpace: "nowrap" }}
              >
                Delivery fees
              </TypographyComponent>
              <TypographyComponent
                variant="body1"
                color={theme.palette.textColor.highEmphasis}
              >
                {props.delivery}
              </TypographyComponent>
            </Stack>
            <Stack direction={"column"} sx={{ width: "100%", height: "22%" }}>
              <TypographyComponent
                variant="caption2"
                color={theme.palette.textColor.mediumEmphasis}
              >
                Deposit to
              </TypographyComponent>
              <TypographyComponent
                variant="body1"
                color={theme.palette.textColor.highEmphasis}
                sx={{ whiteSpace: "nowrap" }}
              >
                {props.wallet}
              </TypographyComponent>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <LineDivider />
      <Stack
        direction={"column"}
        sx={{ width: "100%", height: "37%" }}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Stack
          direction={"column"}
          sx={{ height: "41%", width: "83%" }}
          justifyContent={"space-between"}
        >
          <Stack
            direction={"row"}
            sx={{ width: "100%", height: "17%" }}
            divider={
              <LineDivider
                orientation="horizontal"
                sx={{ width: "53%", borderStyle: "dashed" }}
              />
            }
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <TypographyComponent
              variant="overline"
              color={theme.palette.textColor.mediumEmphasis}
              sx={{ whiteSpace: "nowrap" }}
            >
              {props.coinAmount.toFixed(7) + " " + props.symbol}
            </TypographyComponent>
            <TypographyComponent
              variant="overline"
              color={theme.palette.textColor.mediumEmphasis}
              children={"$" + (props.coinAmount * props.coinCost).toFixed(2)}
            />
          </Stack>
          <Stack
            direction={"row"}
            sx={{ width: "100%", height: "17%" }}
            divider={
              <LineDivider
                orientation="horizontal"
                sx={{ width: "57%", borderStyle: "dashed" }}
              />
            }
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <TypographyComponent
              variant="overline"
              color={theme.palette.textColor.mediumEmphasis}
              sx={{ whiteSpace: "nowrap" }}
            >
              transaction fee
            </TypographyComponent>
            <TypographyComponent
              variant="overline"
              color={theme.palette.textColor.mediumEmphasis}
              children={"$" + props.transactionFee.toLocaleString()}
            />
          </Stack>
          <Stack
            direction={"row"}
            sx={{ width: "100%", height: "25%" }}
            divider={
              <LineDivider
                orientation="horizontal"
                sx={{ width: "68%", borderStyle: "dashed" }}
              />
            }
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <TypographyComponent
              variant="body1"
              color={theme.palette.textColor.highEmphasis}
            >
              Total
            </TypographyComponent>
            <TypographyComponent
              variant="body1"
              color={theme.palette.textColor.highEmphasis}
              children={
                "$ " +
                (props.isBuycard
                  ? props.coinAmount * props.coinCost + props.transactionFee
                  : props.coinAmount * props.coinCost - props.transactionFee
                ).toFixed(2)
              }
              sx={{ whiteSpace: "nowrap" }}
            />
          </Stack>
        </Stack>
        <ButtonComponent
          variant="contained"
          sx={{
            width: "83%",
            height: "24%",
            "&.MuiButton-containedPrimary": {
              background: props.isBuycard
                ? theme.palette.primary.primary500
                : theme.palette.primary.warning300,
            },
          }}
          disabled={props.coinAmount <= 0}
          onClick={props.buttonClick}
        >
          {props.isBuycard ? "BUY NOW" : "SELL NOW"}
        </ButtonComponent>
      </Stack>
    </Stack>
  );
};

export default BuyCard;
