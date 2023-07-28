import React, { useEffect, useState } from "react";
import HomeTemplate from "../../components/templates/HomeTemplate";
import SideNavComponent from "../../components/molecules/NavigationBar";
import Header from "../../components/molecules/Header";
import BuyCard from "../../components/organisms/BuyCard";
import ChooseCurrency from "../../components/organisms/ChooseCryptoCard";
import AmountDetailsCard from "../../components/organisms/AmountDetailsCard";
import { Stack, styled } from "@mui/material";
import TypographyComponent from "../../components/atoms/Typography";
import SellTotalBalance from "../../components/molecules/SellTotalBalance";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DataType } from "../PurchaseScreen";
import GetCryptoDataById from "../../services/cryptoCurrency";
import { CreateWallet, GetWalletByUserAndCoinId } from "../../services/wallets";
import { CreateTransaction } from "../../services/transactions/createTransaction";
import { UpdateWallet } from "../../services/wallets/updateWallet";
import Deposit from "../../components/molecules/Deposit";
import USD from "../../../public/assets/Images/coins/USD Coin.svg";

const StyledBox = styled(Stack)({
  display: "flex",
  gap: "20px",
});

export interface TransactionType {
  amount: number;
  transactionType: string;
  status: string;
  transactionFee: number;
  transactionTime: string;
  quantity: number;
  walletId: number;
  cryptoCurrencyId: number;
  userId: number;
}
export interface WalletType {
  id: number;
  name: string;
  balance: number;
  cryptoCurrencyId: number;
  userId: number;
  priceChange: number;
}

const SellScreenPage = () => {
  const [purchasevalue, setPurchaseValue] = useState<number>(0);
  const [balance, setBalance] = useState<number>(0);
  const [selldata, setSellData] = useState<DataType>({
    id: 1,
    name: "Bitcoin",
    price: 30563.43,
    symbol: "BTC",
    icon: "dummy.png",
  });
  const nav = useNavigate();
  const user: any = useSelector((state: any) => {
    return state.user.user;
  });
  const { coinId } = useParams();

  const token = useSelector((state: any) => {
    return state.token.token;
  });

  const loadData = async () => {
    const dummycoin = await GetCryptoDataById(parseInt(coinId!), token);
    const coin = dummycoin.data;
    setSellData({
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      icon: coin.icon,
      price: coin.price,
    });

     let dummywallet;
     try {
       dummywallet = await GetWalletByUserAndCoinId(
         parseInt(coinId!),
         user.id,
         token
       );
       const wallet = dummywallet?.data;
       setBalance(wallet.balance);
     } catch (error) {
       const newCoinWallet = {
         name: (coin.name ?? "Bitcoin") + " Wallet",
         balance: 0,
         cryptoCurrencyId: parseInt(coinId!),
         userId: user.id,
         priceChange: 0,
       };
       await CreateWallet(newCoinWallet, token);
       window.location.reload();
     }
  };

  const doSellOperations = async () => {
    try {
      const dummycashWallet = await GetWalletByUserAndCoinId(3, user.id, token);
      const cashWallet = dummycashWallet.data;
      const dummyWallet = await GetWalletByUserAndCoinId(
        parseInt(coinId!),
        user.id,
        token
      );
      const wallet = dummyWallet.data;
      try {
        if (wallet.balance < purchasevalue) {
          const transaction: TransactionType = {
            amount: Math.abs(purchasevalue * selldata.price - 1000),
            transactionType: "sell",
            status: "fail",
            transactionFee: 1000,
            transactionTime: new Date().toJSON(),
            quantity: purchasevalue,
            walletId: cashWallet.id,
            cryptoCurrencyId: parseInt(coinId!),
            userId: user.id,
          };
          await CreateTransaction(transaction, token);
        } else {
          const transaction: TransactionType = {
            amount: Math.abs(purchasevalue * selldata.price - 1000),
            transactionType: "sell",
            status: "success",
            transactionFee: 1000,
            transactionTime: new Date().toJSON(),
            quantity: purchasevalue,
            walletId: cashWallet.id,
            cryptoCurrencyId: parseInt(coinId!),
            userId: user.id,
          };
          await CreateTransaction(transaction, token);
          await UpdateWallet(
            wallet.id,
            {
              id: wallet.id,
              name: wallet.name,
              balance: wallet.balance - purchasevalue,
              userId: wallet.userId,
              cryptoCurrencyId: wallet.cryptoCurrencyId,
              priceChange: wallet.priceChange,
            },
            token
          );
          await UpdateWallet(
            cashWallet.id,
            {
              id: cashWallet.id,
              name: cashWallet.name,
              balance:
                cashWallet.balance + purchasevalue * selldata.price - 1000,
              userId: cashWallet.userId,
              cryptoCurrencyId: cashWallet.cryptoCurrencyId,
              priceChange: cashWallet.priceChange,
            },
            token
          );
        }
      } catch (error) {}
    } catch (error) {}
  };

  const onSell = async () => {
    doSellOperations()
      .then(() => {
        nav("/payment/sell/" + purchasevalue);
      })
      .catch(() => {});
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSliderChange = (value: number) => {
    setPurchaseValue(value);
  };

  return (
    <HomeTemplate
      middleRightSx={{ height: "100%" }}
      navCopmponent={<SideNavComponent showCheckIcon={false} />}
      headerCopmponent={<Header pageName={"Checkout"} displayButtons={false} />}
      middleLeftComponent={
        <StyledBox>
          <TypographyComponent variant="subtitle1">
            Sell Crypto
          </TypographyComponent>
          <ChooseCurrency coinId={selldata.id} />
          <SellTotalBalance
            balance={balance}
            symbol={selldata.symbol}
            src={selldata.icon}
            coinName={selldata.name}
          />
          <AmountDetailsCard
            coin={selldata.symbol}
            coinValue={selldata.price}
            totalBalance={3000.9876}
            coinQuantity={balance}
            isBuycard={false}
            onSliderChange={handleSliderChange}
          />

          <Deposit src={USD} />
        </StyledBox>
      }
      middleRightComponent={
        <div style={{ height: "75%", width: "100%" }}>
          <BuyCard
            isBuycard={false}
            coinAmount={purchasevalue}
            coinCost={selldata.price}
            paymentCard={selldata.name + " Wallet"}
            delivery={"0.001BTC"}
            wallet={"Rupee coin"}
            transactionFee={1000}
            symbol={selldata.symbol}
            buttonClick={onSell}
          />
        </div>
      }
    />
  );
};

export default SellScreenPage;
