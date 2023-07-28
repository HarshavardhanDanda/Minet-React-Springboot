import Bitcoin from "../public/assets/Images/coins/bitcoin.svg";
import bitcoin from "../public/assets/Images/coins/bitcoin2.svg";
import ethreum from "../public/assets/Images/coins/ethreum.svg";
import Cardano from "../public/assets/Images/coins/Cardano.svg";
import DodgeCoin from "../public/assets/Images/coins/Dodge Coin.svg";
import Tether from "../public/assets/Images/coins/tether.svg";
import USDCoin from "../public/assets/Images/coins/USD Coin.svg";
import palkdot from "../public/assets/Images/coins/palkadot.svg";
import xrp from "../public/assets/Images/coins/XRP.svg";
import Ethereum2 from "../public/assets/Images/coins/ethereum2.svg";
import theme from "./theme";

export const buy = "BUY";
export const sell = "SELL";
export const timeLineValues = ["1H", "24H", "1W", "1M", "1Y", "ALL"];

export const DELIVERY_TYPES = [
  { type: "Instant : ", time: "2-5 minutes", fees: "0.001", values: 10 },
  { type: "Faster : ", time: "4 hours", fees: "0.001", values: 20 },
  { type: "Fast : ", time: "120 hours", fees: "0.001", values: 30 },
  { type: "None", time: "", values: 40 },
];

export const transactionSuccess: any = {
  buy: {
    text: "Purchase is completed, please check your balance in your crypto wallet",
    button: "BUY CRYPTO",
  },
  sell: {
    text: "Sell is completed, please check your balance in your Rupee coin",
    button: "SELL CRYPTO",
  },
};

export const TradeFrameData = [
  {
    src: Bitcoin,
    coinHeight: "42px",
    coinWidth: "42px",
    coinName: "Bitcoin",
    symbol: "BTC",
    priceChange: 6.2,
    price: 3285553,
    marketCap: "$60.1T",
    cryptoId: 1,
  },
  // {
  //   src: ethreum,
  //   coinHeight: "42px",
  //   coinWidth: "42px",
  //   coinName: "Ethereum",
  //   coinDescription: "ETH",
  //   percentage: "-5.49%",
  //   value1: "$216,678.10",
  //   value2: "$25.4T",
  // },
  // {
  //   src: Ethereum2,
  //   coinHeight: "42px",
  //   coinWidth: "42px",
  //   coinName: "Ethereum 2",
  //   coinDescription: "ETH2",
  //   percentage: "-5.49%",
  //   value1: "$3,285,553.73",
  //   value2: "$25.4T",
  // },

  // {
  //   src: Tether,
  //   coinHeight: "42px",
  //   coinWidth: "42px",
  //   coinName: "Tether",
  //   coinDescription: "USDT",
  //   percentage: "+0.11%",
  //   value1: "$74.32",
  //   value2: "$4.6T",
  // },
  // {
  //   src: bitcoin,
  //   coinHeight: "42px",
  //   coinWidth: "42px",
  //   coinName: "Bitcoin Coin",
  //   coinDescription: "BNB",
  //   percentage: "-3.69%",
  //   value1: "$24,942.54",
  //   value2: "$60.1T",
  // },
  // {
  //   src: Cardano,
  //   coinHeight: "42px",
  //   coinWidth: "42px",
  //   coinName: "Cardano",
  //   coinDescription: "ADA",
  //   percentage: "-1.82%",
  //   value1: "$104.52",
  //   value2: "$3.4T",
  // },
  // {
  //   src: xrp,
  //   coinHeight: "42px",
  //   coinWidth: "42px",
  //   coinName: "XRP",
  //   coinDescription: "XRP",
  //   percentage: "+1.06%",
  //   value1: "$3,285,553.73",
  //   value2: "$60.1T",
  // },
  // {
  //   src: DodgeCoin,
  //   coinHeight: "42px",
  //   coinWidth: "42px",
  //   coinName: "Dodge Coin",
  //   coinDescription: "XRP",
  //   percentage: "-6.96%",
  //   value1: "$17.73",
  //   value2: "$2.1T",
  // },
  // {
  //   src: USDCoin,
  //   coinHeight: "42px",
  //   coinWidth: "42px",
  //   coinName: "USD Coin",
  //   coinDescription: "XRP",
  //   percentage: "+1.01%",
  //   value1: "$74.73",
  //   value2: "$2.1T",
  // },
];

export const watchListData = [
  {
    src: Bitcoin,
    coinName: "Bitcoin",
    coinDescription: "Lorem ipsum dolor sit amet",
    value: "$3,00,439.93",
    graphText: "Lorem ipsum dolor sit amet",
    typographyColor: theme.palette.primary.success500!,
    text: "+1.2%",
    graphData: [10, 6, 13, 11, 2, 14, 5],
    graphHeight: "65%",
    graphWidth: "100%",
    graphColor: `${theme.palette.primary.success500}`,
    isWatchlisted: false,
  },
  {
    src: ethreum,
    coinName: "Ethereum",
    coinDescription: "Lorem ipsum dolor sit amet",
    value: "$3,00,439.93",
    graphText: "Lorem ipsum dolor sit amet",
    typographyColor: theme.palette.loss.borderColor,
    text: "-1.2%",
    graphData: [20, 6, 22, 13, 2, 4, 5],
    graphHeight: "65%",
    graphWidth: "100%",
    graphColor: `${theme.palette.loss.borderColor}`,
    isWatchlisted: true,
  },

  {
    src: Ethereum2,
    coinName: "Ethereum2",
    coinDescription: "Lorem ipsum dolor sit amet",
    value: "$3,00,439.93",
    graphText: "Lorem ipsum dolor sit amet",
    typographyColor: theme.palette.loss.borderColor,
    text: "-1.5%",
    graphData: [20, 6, 22, 13, 2, 4, 5],
    graphHeight: "65%",
    graphWidth: "100%",
    graphColor: `${theme.palette.loss.borderColor}`,
    isWatchlisted: true,
  },

  {
    src: Tether,
    coinName: "Tether",
    coinDescription: "Lorem ipsum dolor sit amet",
    value: "$3,00,439.93",
    graphText: "Lorem ipsum dolor sit amet",
    typographyColor: theme.palette.primary.success500!,
    text: "+2.2%",
    graphData: [10, 6, 13, 11, 2, 14, 5],
    graphHeight: "65%",
    graphWidth: "100%",
    graphColor: `${theme.palette.primary.success500}`,
    isWatchlisted: true,
  },
  {
    src: Cardano,
    coinName: "Cardano",
    coinDescription: "Lorem ipsum dolor sit amet",
    value: "$3,00,439.93",
    graphText: "Lorem ipsum dolor sit amet",
    typographyColor: theme.palette.primary.success500!,
    text: "+3.2%",
    graphData: [10, 6, 13, 11, 2, 14, 5],
    graphHeight: "65%",
    graphWidth: "100%",
    graphColor: `${theme.palette.primary.success500}`,
    isWatchlisted: false,
  },
];

export const CHOOSE_CRYPTO = "Choose crypto";

interface HashmapProps {
  [key: string]: string;
}

export const pictures: HashmapProps = {
  bitcoin: Bitcoin,
  ethereum: ethreum,
  usdCoin: USDCoin,
  xrp: xrp,
  binanceUsd: bitcoin,
  solana: palkdot,
  dogecoin: DodgeCoin,
  polkadot: Cardano,
  maticNetwork: Tether,
  ethreum2: Ethereum2,
};

export const currencies = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    icon: "bitcoin",
    price: 19123.56,
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    icon: "ethereum",
    price: 1297.93,
  },
  {
    id: 3,
    name: "USD Coin",
    symbol: "USDC",
    icon: "usdCoin",
    price: 30054.65,
  },
  {
    id: 4,
    name: "Tether",
    symbol: "ETH",
    icon: "maticNetwork",
    price: 74.21,
  },
  {
    id: 5,
    name: "Cardano",
    symbol: "CRD",
    icon: "polkadot",
    price: 138.22,
  },
  {
    id: 6,
    name: "XRP",
    symbol: "XRP",
    icon: "xrp",
    price: 76.73,
  },
  {
    id: 7,
    name: "Dodge Coin",
    symbol: "DDG",
    icon: "dogecoin",
    price: 21.37,
  },
  {
    id: 8,
    name: "Palkadot",
    symbol: "ETH",
    icon: "solana",
    price: 1642.39,
  },
  {
    id: 9,
    name: "Ethereum2",
    symbol: "ETH",
    icon: "ethreum2",
    price: 1643.39,
  },
];

export const Coins = [
  Bitcoin,
  ethreum,
  USDCoin,
  Ethereum2,
  Tether,
  bitcoin,
  Cardano,
  xrp,
  DodgeCoin,
];

export const BASE_URL = "http://localhost:3000";
export const MOCK_SERVER_BASE_URL = "https://bc88-ms.fe-assignment.tk";
export const API_GATEWAY_URL = "https://bc88-be.fe-assignment.tk";