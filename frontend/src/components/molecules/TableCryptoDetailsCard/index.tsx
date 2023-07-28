import React from "react";
import { Stack, Checkbox, styled } from "@mui/material";
import Image from "../../atoms/Image";
import TypographyComponent from "../../atoms/Typography";
import theme from "../../../theme";
import BluestartOutlined from "../../../../public/assets/icons/bluestarOutlined.svg";
import Bluestar from "../../../../public/assets/icons/bluestar.svg";
import { formattedBalance } from "../../organisms/AmountDetailsCard";
export interface TableCryptoDetailsCardProps {
  src: string;
  coinHeight: string;
  coinWidth: string;
  coinName: string;
  symbol: string;
  priceChange: number;
  price: number;
  marketCap: string;
  checked?: boolean;
  onChange?: () => void;
  cryptoId: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CoinDetails = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  width: "24.213%",
  height: "42px",
  marginLeft: "24px",
}));

const TableCryptoDetailsCard = (props: TableCryptoDetailsCardProps) => {
  return (
    <>
      <Stack
        direction={"row"}
        bgcolor={theme.palette.structural.main}
        alignItems={"center"}
        width={"100%"}
        height={"74px"}
        border={"1px solid #E8E8F7"}
        borderRadius={"4px"}
        sx={{cursor:"pointer"}}
      >
        <CoinDetails>
          <Image
            src={props.src}
            width={props.coinWidth}
            height={props.coinHeight}
          />
          <Stack direction={"column"} sx={{ marginLeft: "10px" }}>
            <TypographyComponent
              variant="body1"
              children={props.coinName}
              color={theme.palette.greyColors.grey500}
            />
            <TypographyComponent
              variant="overline"
              children={props.symbol}
              color={theme.palette.textColor.mediumEmphasis}
            />
          </Stack>
        </CoinDetails>
        <TypographyComponent
          variant="body2"
          children={"$"+formattedBalance(props.price)}
          color={theme.palette.textColor.highEmphasis}
          width={"27.199%"}
        />
        {props.priceChange < 0 ? (
          <TypographyComponent
            variant="body2"
            children={props.priceChange.toString()+"%"}
            color={theme.palette.loss.borderColor}
            width={"19.289%"}
          />
        ) : (
          <TypographyComponent
            variant="body2"
            children={"+"+props.priceChange.toString()+"%"}
            color={theme.palette.primary.success500}
            width={"19.289%"}
          />
        )}
        <TypographyComponent
          variant="body2"
          children={props.marketCap}
          color={theme.palette.textColor.highEmphasis}
          width={"19.128%"}
        />
        <Checkbox
          checked={props.checked}
          onChange={props.onChange}
          icon={<Image src={BluestartOutlined} width="19px" height="18px" />}
          checkedIcon={<Image src={Bluestar} width="19px" height="18px" />}
          onClick={props.onClick}
        />
      </Stack>
    </>
  );
};

export default TableCryptoDetailsCard;
