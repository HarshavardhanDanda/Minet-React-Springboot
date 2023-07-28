import React, { useEffect, useState } from "react";
import MainTemplate from "../../components/templates/MainTemplate";
import WalletBalance from "../../components/molecules/WalletBalance";
import CryptoTransactionHistory from "../../components/organisms/CryptoTransactionHistory";
import { Box, Stack, styled } from "@mui/material";
import theme from "../../theme";
import SideNavComponent from "../../components/molecules/NavigationBar";
import Header from "../../components/molecules/Header";
import Doller from "../../../public/assets/Images/dollar.svg";
import { GetAllTransactionsByUserId } from "../../services/transactions";
import Success from "../../../public/assets/Images/success.svg";
import Failed from "../../../public/assets/Images/failed.svg";
import Dots from "../../../public/assets/Images/3dots.svg";
import { currencies } from "../../constants";
import { GetWalletByUserAndCoinId } from "../../services/wallets";
import { useSelector } from "react-redux";

const NavStyledStack = styled(Stack)`
  div[data-testid="sideNav"] {
    padding: 0;
    width: 100%;
  }
`;

const HeaderBox = styled(Box)`
  div[data-testid="Header"] {
    height: 60%;
  }
`;

interface TransactionDataType {
  src: string;
  coinName: string;
  coinDescription: string;
  value: string;
  date: string;
  valueBTC: string;
  type: string;
}

const WalletPage = () => {
  const [data, setData] = useState<TransactionDataType[]>([]);
  const [balance, setBalance] = useState<string>("");
  const userId: number = useSelector((state: any) => {
    return state.user.user.id;
  });

  const token = useSelector((state: any) => {
    return state.token.token
  });

  const showStatus = (status: string) => {
    if (status === "success") {
      return Success;
    } else if (status === "fail") {
      return Failed;
    } else {
      return Dots;
    }
  };

  const loadData = async () => {
    try {
      const transaction = await GetAllTransactionsByUserId(userId, token);
      const transactions: TransactionDataType[] = [];
      transaction.data.forEach((item: any) => {
        transactions.push({
          src: showStatus(item.status),
          coinName: currencies[item.cryptoCurrencyId - 1].name,
          coinDescription: "from bitcoin5",
          date: item.transactionTime,
          valueBTC:
            (item.transactionType === "sell" ? "-" : "+") +
            parseFloat(item.quantity.toFixed(4)).toLocaleString() +
            " " +
            currencies[item.cryptoCurrencyId - 1].symbol,
          value:
            (item.transactionType === "sell" ? "+$" : "-$") +
            Math.abs(item.amount).toLocaleString(),
          type: item.transactionType,
        });
      });
      setData(transactions);
      const wallet = await GetWalletByUserAndCoinId(3, userId, token);
      setBalance("$" + wallet.data.balance.toLocaleString());
    } catch (error) {
      console.log(error);
    }
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
            backgroundColor: theme.palette.structural.main,
            height: "100%",
          }}
          direction={"row"}
          alignItems={"flex-end"}
          justifyContent={"center"}
        >
          <NavStyledStack sx={{ width: "80%", height: "98%" }}>
            <SideNavComponent showCheckIcon={false} />
          </NavStyledStack>
        </Stack>
      }
      headerComponent={
        <HeaderBox sx={{ width: "100%", height: "100%" }}>
          <Header pageName="Trade" displayButtons={true} />
        </HeaderBox>
      }
      middeleComponent={
        <Stack
          direction={"row"}
          sx={{ width: "100%", height: "100%" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack direction={"column"} sx={{ width: "97%", height: "92%" }}>
            <Box sx={{ width: "100%", height: "40%", minHeight: "250px" }}>
              <WalletBalance
                src={Doller}
                coinWidth="10%"
                coinHeight="100%"
                coinName="USD Coin"
                coinDescription="Cash"
                typographyChildren="Total balance"
                value={balance}
                button1="CASH DEPOSIT"
                button2="WITHDRAWAL"
                buttonHeight="4.5vh"
                label="Wallet"
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "60%",
                overflowY: "scroll",
                scrollBehavior: "smooth",
                "::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              <CryptoTransactionHistory transactionCardDetails={data} />
            </Box>
          </Stack>
        </Stack>
      }
    />
  );
};

export default WalletPage;
