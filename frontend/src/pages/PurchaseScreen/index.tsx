import React, { useEffect, useState } from "react";
import HomeTemplate from "../../components/templates/HomeTemplate";
import SideNavComponent from "../../components/molecules/NavigationBar";
import Header from "../../components/molecules/Header";
import BuyCard from "../../components/organisms/BuyCard";
import ChooseCurrency from "../../components/organisms/ChooseCryptoCard";
import PaymentCard from "../../components/molecules/PaymentCard";
import AmountDetailsCard from "../../components/organisms/AmountDetailsCard";
import DeliveryDropdown from "../../components/molecules/SpeedDeliveryDropDown";
import { Stack, styled } from "@mui/material";
import TypographyComponent from "../../components/atoms/Typography";
import { GetCryptoDataById } from "../../services/cryptoCurrency";
import { CreateWallet, GetWalletByUserAndCoinId } from "../../services/wallets";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { TransactionType } from "../SellScreen";
import { CreateTransaction } from "../../services/transactions/createTransaction";
import { UpdateWallet } from "../../services/wallets/updateWallet";

const StyledBox = styled(Stack)({
  display: "flex",
  gap: "20px",
});

export interface DataType {
  id: number;
  name: string;
  symbol: string;
  icon: string;
  price: number;
}

const PurchaseScreenPage = () => {
  const [purchasevalue, setPurchaseValue] = useState<number>(0);
  const [data, setData] = useState<DataType>({
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    icon: "dummy.png",
    price: 34563.43,
  });
  const [balance, setBalance] = useState<number>(30000);
  const user = useSelector((state: any) => {
    return state.user.user;
  });
  const { coinId } = useParams();
  const nav = useNavigate();
  const token = useSelector((state: any) => {
    return state.token.token
  });

  const loadData = async () => {
    const data = await GetCryptoDataById(parseInt(coinId!), token);
    const coin = data.data;
    setData({
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      icon: coin.icon,
      price: coin.price,
    });

    const coinwallet = await GetWalletByUserAndCoinId(3, user.id, token);
    const wallet = coinwallet.data;
    setBalance(wallet.balance);
    try {
      await GetWalletByUserAndCoinId(
        parseInt(coinId!),
        user.id,
        token
      );
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

  const doPurchaseOperations = async () => {
    try {
      const dummycashWallet = await GetWalletByUserAndCoinId(3, user.id, token);
      const cashWallet = dummycashWallet.data;
      let coinWallet: any
        coinWallet = await GetWalletByUserAndCoinId(
        parseInt(coinId!),
        user.id, token
      );
      const wallet = coinWallet.data;
      try {
        if (cashWallet.balance < purchasevalue) {
          const transaction: TransactionType = {
            amount: purchasevalue * data.price + 1000,
            transactionType: "purchase",
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
            amount: purchasevalue * data.price + 1000,
            transactionType: "purchase",
            status: "success",
            transactionFee: 1000,
            transactionTime: new Date().toJSON(),
            quantity: purchasevalue,
            walletId: cashWallet.id,
            cryptoCurrencyId: parseInt(coinId!),
            userId: user.id,
          };
          await CreateTransaction(transaction, token);
          await UpdateWallet(wallet.id, {
            id: wallet.id,
            name: wallet.name,
            balance: wallet.balance + purchasevalue,
            userId: wallet.userId,
            cryptoCurrencyId: wallet.cryptoCurrencyId,
            priceChange: wallet.priceChange,
          }, token);
          await UpdateWallet(cashWallet.id, {
            id: cashWallet.id,
            name: cashWallet.name,
            balance: cashWallet.balance - purchasevalue * data.price - 1000,
            userId: cashWallet.userId,
            cryptoCurrencyId: cashWallet.cryptoCurrencyId,
            priceChange: cashWallet.priceChange,
          }, token);
        }
      } catch (error) {}
    } catch (error) {}
  };

  const onBuy = () => {
    doPurchaseOperations()
      .then(() => {
        nav("/payment/buy/" + purchasevalue);
      })
      .catch(() => {});
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSliderChange = (value: number) => {
    console.log("Slider value from child:", value);
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
            Buy Crypto
          </TypographyComponent>
          <ChooseCurrency coinId={data.id} />
          <PaymentCard balance={balance} />

          <AmountDetailsCard
            coin={data.symbol}
            coinValue={data.price}
            totalBalance={balance}
            coinQuantity={purchasevalue}
            isBuycard={true}
            onSliderChange={handleSliderChange}
          />

          <DeliveryDropdown
            instantTime={"2-5"}
            fee={"0.001"}
            title={"Select speed delivery"}
          />
        </StyledBox>
      }
      middleRightComponent={
        <div style={{ height: "70%", width: "100%" }}>
          <BuyCard
            isBuycard={true}
            coinAmount={purchasevalue}
            coinCost={data.price}
            paymentCard={"Visa credit"}
            delivery={"0.001" + data.symbol}
            wallet={data.name + " Wallet"}
            transactionFee={1000}
            symbol={data.symbol}
            buttonClick={onBuy}
          />
        </div>
      }
    />
  );
};

export default PurchaseScreenPage;
