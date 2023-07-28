import React, { useEffect, useState } from "react";
import MainTemplate from "../../components/templates/MainTemplate";
import CryptoDetailsTab from "../../components/organisms/CryptoDetailTab";
import Header from "../../components/molecules/Header";
import SideNavComponent from "../../components/molecules/NavigationBar";
import theme from "../../theme";
import { Box, Stack } from "@mui/material";
import Up from "../../../public/assets/icons/UpwardArrow.svg";
import CoinInfo from "../../components/organisms/CoinInfo";
import Down from "../../../public/assets/icons/DownwardArrow.svg";
import CryptoTransactionHistory from "../../components/organisms/CryptoTransactionHistory";
import Dots from "../../../public/assets/Images/3dots.svg";
import Success from "../../../public/assets/Images/success.svg";
import Failed from "../../../public/assets/Images/failed.svg";
import { GetCryptoDataById } from "../../services/cryptoCurrency";
import { GetTransactionsByUserAndCoinIds } from "../../services/transactions";
import TypographyComponent from "../../components/atoms/Typography";
import { GetWalletByUserAndCoinId } from "../../services/wallets";
import styled from "@emotion/styled";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

interface CryptoDataType {
  id: number;
  name: string;
  symbol: string;
  price: number;
  graphdata: number[];
  percentageChange: number;
}

interface TransactionDataType {
  src: string;
  coinName: string;
  coinDescription: string;
  valueBTC: string;
  value: string;
  date: string;
  type: string;
}

const StyledBox = styled(Box)`
  div[data-testid="Header"] {
    height: 60%;
  }
`;

const StyledStack = styled(Stack)`
  div[data-testid="sideNav"] {
    padding: 0;
    width: 100%;
  }
`;

const DetailsPage = () => {
  const [cryptoData, setCryptoData] = useState<CryptoDataType>({
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: 1297.93,
    graphdata: [1296.55, 1300.9, 1299.99, 1290.9, 1297.93],
    percentageChange: -0.6,
  });

  const [transactionData, setTransactionData] = useState<TransactionDataType[]>(
    []
  );
  const [total, setTotal] = useState<string>("");
  const userId: number = useSelector((state: any) => {
    return state.user.user.id;
  });
  const { screen, coinId } = useParams();
  const nav = useNavigate();

  const displayStatus = (status: string) => {
    if (status === "success") {
      return Success;
    } else if (status === "fail") {
      return Failed;
    } else {
      return Dots;
    }
  };

  const token = useSelector((state: any) => {
    return state.token.token
  });

  const loadData = async () => {
    try {
      const data = await GetCryptoDataById(parseInt(coinId!), token);
      const coinData = data.data;
      setCryptoData({
        id: coinData.id,
        name: coinData.name,
        symbol: coinData.symbol,
        price: coinData.price,
        graphdata: [
          coinData.priceAt1M,
          coinData.priceAt1W,
          coinData.priceAt1D,
          coinData.priceAt1H,
          coinData.price,
        ],
        percentageChange: coinData.priceChange,
      });
      const transaction = await GetTransactionsByUserAndCoinIds(
        parseInt(coinId!),
        userId, token
      );

      const transactions: TransactionDataType[] = [];
      transaction.data.forEach((item: any) => {
        transactions.push({
          src: displayStatus(item.status),
          coinName: coinData.name,
          coinDescription: "from bitcon5",
          valueBTC:
            (item.transactionType === "sell" ? "-" : "+") +
            parseFloat(item.quantity.toFixed(4)).toLocaleString() +
            " " +
            coinData.symbol,
          value:
            (item.transactionType === "sell" ? "+$" : "-$") +
            Math.abs(item.amount).toLocaleString(),
          date: item.transactionTime,
          type: item.transactionType,
        });
      });
      setTransactionData(transactions);
      const wallet = await GetWalletByUserAndCoinId(parseInt(coinId!), userId, token);
      const amount = parseFloat(
        (wallet.data.balance * coinData.price).toFixed(2)
      ).toLocaleString();
      setTotal(
        wallet.data.balance.toFixed(7) +
          " " +
          coinData.symbol +
          " ($" +
          amount +
          ")"
      );
    } catch (error) {}
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <MainTemplate
      navComponent={
        <Stack
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: theme.palette.structural.main,
          }}
          direction={"row"}
          justifyContent={"center"}
          alignItems={"flex-end"}
        >
          <StyledStack sx={{ width: "80%", height: "98%" }}>
            <SideNavComponent showCheckIcon={false} />
          </StyledStack>
        </Stack>
      }
      headerComponent={
        <StyledBox sx={{ width: "100%", height: "100%" }}>
          <Header
            pageName="Trade"
            displayButtons={true}
            onSell={() => {
              nav("/sell/" + coinId);
            }}
            onBuy={() => {
              nav("/purchase/" + coinId);
            }}
          />
        </StyledBox>
      }
      middeleComponent={
        <Stack
          sx={{ width: "100%", height: "100%", minHeight: "1060px" }}
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack
            direction={"column"}
            sx={{
              width: "98%",
              height: "98%",
            }}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <CoinInfo coinId={parseInt(coinId!)} />
            <Box sx={{ width: "100%", height: "90%" }}>
              <CryptoDetailsTab
                coinCost={
                  "$" + parseFloat(cryptoData.price.toFixed(2)).toLocaleString()
                }
                iconSrc={cryptoData.percentageChange < 0 ? Down : Up}
                percantage={
                  cryptoData.percentageChange >=0 ? "+" + cryptoData.percentageChange.toFixed(2).toString() + "%" : cryptoData.percentageChange.toFixed(2).toString() + "%"
                }
                graphdata={[
                  { name: cryptoData.name, data: cryptoData.graphdata },
                ]}
                graphColor={[theme.palette.primary.warning300!]}
                graphXaxisLabels={["jun18", "jun20", "jun 24", "jun 28"]}
                textColor={
                  cryptoData.percentageChange < 0
                    ? theme.palette.loss.borderColor
                    : theme.palette.primary.success500!
                }
                screen={screen}
                coinId={parseInt(coinId!)}
                wallet={
                  <Stack
                    direction={"column"}
                    sx={{ width: "100%", height: "100%" }}
                    alignItems={"center"}
                    spacing={1}
                  >
                    <Stack
                      direction={"row"}
                      sx={{
                        width: "100%",
                        height: "7vh",
                        backgroundColor: theme.palette.greyColors.grey50,
                        borderRadius: "4px",
                      }}
                      justifyContent={"flex-end"}
                      alignItems={"center"}
                    >
                      <Stack
                        direction={"row"}
                        sx={{ width: "98%", height: "7vh" }}
                        alignItems={"center"}
                        spacing={1}
                      >
                        <TypographyComponent
                          variant="subtitle1"
                          color={theme.palette.textColor.highEmphasis}
                        >
                          Total balance
                        </TypographyComponent>
                        <TypographyComponent
                          variant="subtitle1"
                          color={theme.palette.textColor.highEmphasis}
                          children={total}
                        />
                      </Stack>
                    </Stack>
                    <CryptoTransactionHistory
                      transactionCardDetails={transactionData}
                    />
                  </Stack>
                }
              />
            </Box>
          </Stack>
        </Stack>
      }
    />
  );
};
export default DetailsPage;
