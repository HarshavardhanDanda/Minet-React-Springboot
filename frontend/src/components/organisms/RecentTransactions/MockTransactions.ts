import ethereum from "../../../../public/assets/Images/coins/ethereum2.svg";
import bitcoin from "../../../../public/assets/Images/coins/bitcoin.svg";
import {TransactionCardProps} from './index'

export const recentTransactions: TransactionCardProps[] = [
  {
    src:bitcoin ,
    coinName: "Bitcoin BTC",
    chiplabel: "Purchased",
    valueBTC: "-0.76567 BTC",
    value: "+$34,656.00",
    date: "2023-06-25",
  },
  {
    src: ethereum,
    coinName: "Bitcoin ETH",
    chiplabel: "Purchased",
    valueBTC: "-0.76576 BTC",
    value: "+$34,567.00",
    date: "2023-05-24",
  },
  {
    src: ethereum,
    coinName: "Bitcoin BTC",
    chiplabel: "Purchased",
    valueBTC: "-0.67758 BTC",
    value: "+$34,765.00",
    date: "2023-03-09",
  },
  {
    src: ethereum,
    coinName: "Bitcoin ETH",
    chiplabel: "Purchased",
    valueBTC: "-0.6567567 BTC",
    value: "+$34,000.00",
    date: "2023-06-21",
  },
];
