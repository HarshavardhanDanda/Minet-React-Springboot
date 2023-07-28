import React, { useEffect, useState } from "react";
import MainTemplate from "../../components/templates/MainTemplate";
import SideNavComponent from "../../components/molecules/NavigationBar";
import Header from "../../components/molecules/Header";
import TradeFrame from "../../components/organisms/TradeTable";
import { TableCryptoDetailsCardProps } from "../../components/molecules/TableCryptoDetailsCard";
import { GetAllCrypto } from "../../services/cryptoCurrency";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

interface CryptoDataProps {
  name: string;
  symbol: string;
  icon: string;
  marketCap: string;
  created: string;
  price: number;
  totalSupply: string;
  circulatingSupply: string;
  priceChange: number;
  id: number;
}

const TradeScreen = () => {
  const [cryptoData, setcryptoData] = useState<CryptoDataProps[]>([]);
  const [propData, setpropData] = useState<TableCryptoDetailsCardProps[]>([]);
  const { screen } = useParams();
  const token = useSelector((state: any) => {
    return state.token.token
  });
  useEffect(() => {
    const fetchWatchList = () => {
      return GetAllCrypto(token)
        .then((response: any) => {
          const data = response.data;
          setcryptoData(data);
        })
        .catch((error: any) => {
          console.log(error);
        });
    };
    fetchWatchList();
  }, []);

  useEffect(() => {
    const filteredCryptoData: TableCryptoDetailsCardProps[] = cryptoData?.map(
      (crypto) => {
        return {
          cryptoId: crypto.id,
          src: crypto.icon,
          coinHeight: "42px",
          coinWidth: "42px",
          coinName: crypto.name,
          symbol: crypto.symbol,
          priceChange: crypto.priceChange,
          price: crypto.price,
          marketCap: crypto.marketCap,
        };
      }
    );
    setpropData(filteredCryptoData);
  }, [cryptoData]);

  return (
    <MainTemplate
      headerComponent={<Header displayButtons={true} pageName="Trade" />}
      middeleComponent={<TradeFrame tableData={propData} screen={screen} />}
      navComponent={<SideNavComponent showCheckIcon={true} />}
    />
  );
};

export default TradeScreen;
