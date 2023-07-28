import React, { useEffect, useState } from "react";
import HomeTemplate from "../../components/templates/HomeTemplate";
import SideNavComponent from "../../components/molecules/NavigationBar";
import Header from "../../components/molecules/Header";
import WatchList from "../../components/organisms/WatchList";
import MyportfolioGraph, {
  MyportfolioGraphProps,
} from "../../components/organisms/MyPortfolioGraph";
import { Stack } from "@mui/material";
import PortfolioHeader from "../../components/molecules/PortfolioHeader";
import WalletCard from "../../components/molecules/WalletCard";
import theme from "../../theme";
import MyPortfolioCards from "../../components/organisms/MyPortfolioCards";
import TypographyComponent from "../../components/atoms/Typography";
import IconComponent from "../../components/atoms/Icons";
import infoIcon from "../../../public/assets/icons/info.svg";
import CoinSlider from "../../components/molecules/CoinSlider";
import { WatchlistCardProps } from "../../components/molecules/WatchlistCard";
import { GetWatchLists } from "../../services/watchlists";
import { CryptoPortfolioCardProps } from "../../components/molecules/CryptoPortfolioCard";
import {
  GetWalletsByUserId,
  GetWalletByUserAndCoinId,
} from "../../services/wallets";
import RecentTransactions, { TransactionCardProps } from "../../components/organisms/RecentTransactions";
import { GetCryptoDataById } from "../../services/cryptoCurrency";
import { GetAllTransactionsByUserId } from "../../services/transactions";
import { useSelector } from "react-redux";
import Bitcoin from '../../../public/assets/Images/coins/bitcoin.svg'
import { useNavigate } from "react-router-dom";

export interface WatchlistCardWithIdProps extends WatchlistCardProps {
  id: number;
}

const emptyCardDetails: WatchlistCardWithIdProps[] = [{
  id: 1,
  src: Bitcoin,
  coinName: 'Bitcoin',
  price: 300439.93,
  priceChange: 1.2,
  graphData: [14, 6, 22, 13, 20 ,12, 19, 16]
}]

export interface CryptoDataProps {
  id: number;
  name: string;
  symbol: string;
  icon: string;
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
}
const emptyGraphArgs: MyportfolioGraphProps = {
  title1: "Total Investment",
  value1: "$0.00",
  changePercentage1: "+0.0%",
};

const commonGraphArgs: Partial<MyportfolioGraphProps> = {
  showLegend: true,
  legendPosition: "top",
  legendHorizontalPosition: "right",
  height: "100%",
  width: "100%",
  type: "area",
  strokeCurve: "smooth",
  xAxisCategories: ["JUN 8", "JUN 15", "JUN 22", "JUN 29", "JUL 6", "JUL 13"],
  showXaxis: true,
  showGrid: true,
  showXaxisBorders: true,
  boxSx: { width: "100%", height: "100%", marginTop: "20px" },
};

const bitcoinGraphArgs: MyportfolioGraphProps = {
  ...commonGraphArgs,
  title1: "Total Investment",
  title2: "Bitcoin",
  value1: "$11,900,204",
  value2: "$12,400",
  changePercentage1: "-1.2%",
  changePercentage2: "+8.2%",
  series: [
    { name: "Bitcoin", data: [20, 42, 38, 55, 44, 48] },
    { name: "Total Investment", data: [20, 35, 30, 28, 38, 40] },
  ],
  colors: ["#ffa74f", "#0052ff"],
};

const ethereumGraphArgs: MyportfolioGraphProps = {
  ...commonGraphArgs,
  title1: "Total Investment",
  title2: "Ethereum",
  value1: "$11,900,204",
  value2: "$1,297.24",
  changePercentage1: "-1.2%",
  changePercentage2: "-3.8%",
  series: [
    { name: "Ethereum", data: [20, 42, 38, 55, 44, 48] },
    { name: "Total Investment", data: [20, 35, 30, 28, 38, 40] },
  ],
  colors: ["#B71A33", "#0052FF"],
};

const MiddleLeftComponent = () => {
  const [coin, setCoin] = useState("");
  const [graphArgs, setGraphArgs] = useState({ ...emptyGraphArgs });
  const [cardProps, setCardProps] = useState<WatchlistCardWithIdProps[]>();
  const token = useSelector((state: any) => {
    return state.token.token
  });
  const userId = useSelector((state: any) => {
    return state.user.user.id
  });
  useEffect(() => {
    if (coin === "bitcoin") {
      setGraphArgs({ ...bitcoinGraphArgs });
    } else if (coin === "ethereum") {
      setGraphArgs({ ...ethereumGraphArgs });
    }
  }, [coin]);

  const getWatchlistObject = (crypto: any, index: number) => {
    const mockGraph1 = [4.3, 5.8, 7.7, 3.5, 9.3, 5.8, 8.7];
    const mockGraph2 = [8.7, 5.8, 9.3, 3.5, 7.7, 5.8, 4.3];
    return {
      id: crypto.id,
      src: crypto.icon,
      coinName: crypto.name,
      price: crypto.price,
      priceChange: crypto.priceChange,
      graphData: index % 2 == 0 ? mockGraph1 : mockGraph2,
    };
  };

  useEffect(() => {
    GetWatchLists(userId, token).then((response) => {
      const watchlists = response.data;
      const watchlistPromises = watchlists.map(
        async (watchlist: any, index: number) => {
          const crypto = await GetCryptoDataById(watchlist.cryptoCurrencyId, token);
          return getWatchlistObject(crypto.data, index);
        }
      );

      Promise.all(watchlistPromises).then((resolvedWatchlists) => {
        setCardProps(resolvedWatchlists);
      });
    });
  }, []);

  return (
    <Stack
      display={"flex"}
      direction={"column"}
      minHeight={"auto"}
      justifyContent={"space-between"}
      sx={{ padding: "1.86% 1.86% 1.86% 1.86%" }}
    >
      <WatchList cardProps={cardProps?.length ? cardProps : emptyCardDetails} />
      <PortfolioHeader />
      <MyportfolioGraph {...graphArgs} />
      <Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
          height={"32px"}
          sx={{ margin: "10px 0px 27px 0px" }}
        >
          <TypographyComponent
            variant="body1"
            color={theme.palette.textColor.highEmphasis}
          >
            10 coins (3 active)
          </TypographyComponent>
          <Stack direction={"row"} alignItems={"center"}>
            <IconComponent src={infoIcon} height="32px" width="32px" />
            <TypographyComponent
              variant="caption2"
              color={theme.palette.textColor.highEmphasis}
            >
              Click on currency name below to display it on the graph
            </TypographyComponent>
          </Stack>
        </Stack>
      </Stack>
      <Stack sx={{ width: "100%", height: "38px" }}>
        <CoinSlider
          bitCoinButton={{
            onClick: () => {
              setCoin("bitcoin");
            },
          }}
          ethereumButton={{
            onClick: () => {
              setCoin("ethereum");
            },
          }}
        />
      </Stack>
    </Stack>
  );
};

const MiddleRightComponent = () => {
  const [cardProps, setCardProps] = useState<CryptoPortfolioCardProps[]>([]);
  const [walletBalance, setWalletBalance] = useState<number>(0.0);
  const [recentTransactions, setRecentTransactions] = useState<
    TransactionCardProps[]
  >([]);
  const nav = useNavigate()

  const token = useSelector((state: any) => {
    return state.token.token
  });
  const userId = useSelector((state: any) => {
    return state.user.user.id
  });

  const getPortfolioProps = (crypto: any, wallet: any) => {
    return {
      id: crypto.id,
      iconSrc: crypto.icon,
      coinName: crypto.name,
      coinShortForm: crypto.symbol,
      amount: wallet.balance,
      percentage: crypto.priceChange,
    };
  };

  const getTransactionProps = (crypto: any, transaction: any) => {
    return {
      src: crypto.icon,
      coinName: crypto.name,
      coinSymbol: crypto.symbol,
      transactionType: transaction.transactionType,
      valueBTC: transaction.quantity,
      value: transaction.amount,
      date: transaction.transactionTime,
    };
  };

  useEffect(() => {
    const fetchPortfolio = async () => {
      GetWalletsByUserId(userId, token).then((response) => {
        const wallets = response.data;
        const walletRequests = wallets.map(async (wallet: any) => {
          const crypto = await GetCryptoDataById(wallet.cryptoCurrencyId, token);
          return getPortfolioProps(crypto.data, wallet);
        });

        Promise.all(walletRequests).then((cryptoResponse) => {
          setCardProps(cryptoResponse);
        });
      });
    };
    fetchPortfolio();

    const walletBalance = async () => {
      try{
        const response = await GetWalletByUserAndCoinId(3, userId, token);
        setWalletBalance(response.data.balance);
      }catch(error){
        setWalletBalance(0)
      }
    };
    walletBalance();

    const getTransactions = async () => {
      await GetAllTransactionsByUserId(userId, token).then((transaction) => {
        const response = transaction.data;
        const transactionRequests = response.map(async (transaction: any) => {
          const crypto = await GetCryptoDataById(transaction.cryptoCurrencyId, token);
          return getTransactionProps(crypto.data, transaction);
        });
        Promise.all(transactionRequests).then((cryptoResponse) => {
          setRecentTransactions(cryptoResponse);
        });
      });
    };
    getTransactions();
  }, []);

  return (
    <Stack
      direction={"column"}
      width={"80%"}
      gap={"24px"}
      sx={{
        padding: "24px 1.86% 24px 24px",
        backgroundColor: theme.palette.structural.main,
        borderLeft: "1px solid #E8E8F7",
      }}
    >
      <MyPortfolioCards portfolioProps={cardProps} />
      <WalletCard balance={walletBalance} />
      <RecentTransactions
        recentTransactions={recentTransactions.slice().reverse()}
        handleViewAll={() => {nav("/wallet")}}
      />
    </Stack>
  );
};

const HomePage = () => {
  return (
    <HomeTemplate
      navCopmponent={<SideNavComponent showCheckIcon={true} />}
      headerCopmponent={<Header pageName={"Dashboard"} displayButtons={true} />}
      middleLeftComponent={<MiddleLeftComponent />}
      middleRightComponent={<MiddleRightComponent />}
    />
  );
};

export default HomePage;
