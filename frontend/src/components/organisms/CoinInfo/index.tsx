import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import theme from "../../../theme";
import LineDivider from "../../atoms/LineDivider";
import TypographyComponent from "../../atoms/Typography";
import ButtonComponent from "../../atoms/Button";
import Image from "../../atoms/Image";
import Star from "../../../../public/assets/icons/watchlist star.svg";
import Up from "../../../../public/assets/icons/UpwardArrow.svg";
import Down from "../../../../public/assets/icons/DownwardArrow.svg";
import { GetCryptoDataById } from "../../../services/cryptoCurrency";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import GetWatchLists, { DeleteWatchlistById, PostWatchlist } from "../../../services/watchlists";

interface CoinInfoProps {
  height?: string | number;
  width?: string | number;
  coinId: number;
}

interface CoinData {
  id: number;
  name: string;
  symbol: string;
  marketCap: string;
  created: string;
  price: number;
  priceAt1H: number;
  priceAt1D: number;
  priceAt1W: number;
  priceAt1M: number;
  totalSupply: string;
  circulatingSupply: string;
  priceChange: number;
  icon: string;
}

interface WatchlistProp{
  id: number;
  isWatchlisted: boolean
}

const CoinInfo = (props: CoinInfoProps) => {
  const [coinData, setCoindata] = useState<CoinData>({
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    marketCap: "$162.92B",
    created: "2022-12-23",
    price: 1297.93,
    priceAt1H: 1290.9,
    priceAt1D: 1299.99,
    priceAt1W: 1300.9,
    priceAt1M: 1296.55,
    totalSupply: "$11.5B",
    circulatingSupply: "122.60M ETH",
    priceChange: -0.6,
    icon: "https://w7.pngwing.com/pngs/268/1013/png-transparent-ethereum-eth-hd-logo-thumbnail.png",
  });

  
  const user = useSelector((state: any) => {
    return state.user.user;
  });
  
  const token = useSelector((state: any) => {
    return state.token.token;
  });
  
  const [watchlist, setWatchlist] = useState<WatchlistProp>({
    id: coinData.id,
    isWatchlisted: false,
  });
  const [buttonText, setButtonText] = useState<string>("ADD TO WATCHLIST");
  const loadData = async () => {
    try {
      const cryptoData: any = await GetCryptoDataById(props.coinId, token);
      setCoindata(cryptoData.data);

      const WatchlistData = await GetWatchLists(user.id, token);
      const response = WatchlistData.data;
      const existingWatchlistItem = response.find(
        (item: any) =>
          item.cryptoCurrencyId === cryptoData.data.id && item.userId == user.id
      );
      if (existingWatchlistItem) {
        setWatchlist({ id: existingWatchlistItem.id, isWatchlisted: true });
        setButtonText("ADDED TO WATCHLIST");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const StyledStack = styled(Stack)({
    width: props.width ?? "100%",
    height: props.height ?? "8%",
    backgroundColor: theme.palette.structural.main,
    borderRadius: "4px",
    border: "1px solid #E8E8F7",
  });

  const postOrDeleteWatchlist = async (cryptoId: number) => {
    try {
        if (watchlist.isWatchlisted) {
          console.log("inside delete");
          await DeleteWatchlistById(
            watchlist.id,
            token
          );
          setButtonText("ADD TO WATCHLIST");
          setWatchlist({ id: cryptoId, isWatchlisted: false });
        } else {
          console.log("inside post ");
          const data = {
            userId: user.id,
            cryptoCurrencyId: cryptoId,
          };
          await PostWatchlist(data, token);
          setButtonText("ADDED TO WATCHLIST");
          setWatchlist({ id: cryptoId, isWatchlisted: true });
        }
    } catch (error) {}
  };

  return (
    <StyledStack
      data-testid="coin-info"
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack
        direction={"row"}
        sx={{ width: "96%", height: "65%" }}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack
          direction={"row"}
          sx={{ width: "50%", height: "100%" }}
          divider={<LineDivider orientation="vertical" variant="middle" />}
          alignItems={"center"}
        >
          <Stack
            direction={"row"}
            sx={{ width: "33%", height: "100%" }}
            spacing={1}
            justifyContent={"space-between"}
          >
            <Image src={coinData.icon} width="48px" height="48px" />
            <Stack direction={"column"} sx={{ width: "66%", height: "100%" }}>
              <TypographyComponent
                variant="h6"
                color={theme.palette.greyColors.grey500}
              >
                {coinData.name}
              </TypographyComponent>
              <Stack
                direction={"row"}
                sx={{ width: "100%" }}
                justifyContent={"flex-start"}
                divider={
                  <Image
                    src={coinData.priceChange < 0 ? Down : Up}
                    width="fit-content"
                    height="50%"
                  />
                }
                spacing={1}
                alignItems={"center"}
              >
                <TypographyComponent
                  variant="body1"
                  color={theme.palette.textColor.mediumEmphasis}
                >
                  {coinData.symbol}
                </TypographyComponent>
                <TypographyComponent
                  variant="overline"
                  color={
                    coinData.priceChange < 0
                      ? theme.palette.loss.borderColor
                      : theme.palette.primary.success500
                  }
                  children={
                    coinData.priceChange >= 0
                      ? "+" + coinData.priceChange + "%"
                      : coinData.priceChange + "%"
                  }
                />
              </Stack>
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            sx={{ width: "70%", height: "100%" }}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            <Stack
              direction={"column"}
              sx={{ width: "29%", height: "100%" }}
              justifyContent={"center"}
              alignItems={"flex-start"}
            >
              <TypographyComponent
                variant="caption1"
                color={theme.palette.textColor.mediumEmphasis}
              >
                Market cap
              </TypographyComponent>
              <TypographyComponent
                variant="body1"
                color={theme.palette.textColor.highEmphasis}
              >
                {coinData.marketCap}
              </TypographyComponent>
            </Stack>
            <Stack
              direction={"column"}
              sx={{ width: "29%", height: "100%" }}
              justifyContent={"center"}
              alignItems={"flex-start"}
            >
              <TypographyComponent
                variant="caption1"
                color={theme.palette.textColor.mediumEmphasis}
              >
                Vol.24H
              </TypographyComponent>
              <TypographyComponent
                variant="body1"
                color={theme.palette.textColor.highEmphasis}
              >
                {coinData.totalSupply}
              </TypographyComponent>
            </Stack>
            <Stack
              direction={"column"}
              sx={{ width: "30%", height: "100%" }}
              justifyContent={"center"}
              alignItems={"flex-start"}
            >
              <TypographyComponent
                variant="caption1"
                color={theme.palette.textColor.mediumEmphasis}
              >
                circulating supply
              </TypographyComponent>
              <TypographyComponent
                variant="body1"
                color={theme.palette.textColor.highEmphasis}
              >
                {coinData.circulatingSupply}
              </TypographyComponent>
            </Stack>
          </Stack>
        </Stack>
        <ButtonComponent
          variant="outlined"
          sx={{ width: "15vw", height: "80%" }}
          startIcon={<Image src={Star} width="100%" height="100%" />}
          onClick={() => {
            postOrDeleteWatchlist(coinData.id);
          }}
        >
          {buttonText}
        </ButtonComponent>
      </Stack>
    </StyledStack>
  );
};

export default CoinInfo;
