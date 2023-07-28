import React, { useEffect, useState } from "react";
import TransactionCard, {
  TransactionCardProps,
} from "../../molecules/TransactionCard";
import { SxProps, styled } from "@mui/material";
import LineDivider from "../../atoms/LineDivider";
import "./index.css";

import { Theme } from "@emotion/react";
import IconComponent from "../../atoms/Icons";
import filter from "../../../../public/assets/icons/filter2.svg";
import DropDownComponent from "../../atoms/dropdown";
import theme from "../../../theme";
import SearchBox from "../../molecules/SearchBox";

interface CryptoTransactionHistoryProps {
  transactionCardDetails: TransactionCardProps[];
}

const sxSearchbox: SxProps<Theme> = {
  ".MuiOutlinedInput-root": {
    width: "308px",
    height: "40px",
    boxSizing: "border-box",
    "& fieldset": {
      border: "none",
    },
    borderTopLeftRadius: "4px",
    borderBottomLeftRadius: "4px",
  },
  "	.Mui-focused": {
    border: "1px solid #0052FF",
  },
};

const ContainerWithHeader = styled("div")(({ theme }) => ({
  width: "100%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

const HeaderContainer = styled("div")(() => ({
  width: "100%",
  height: "40px",
  display: "flex",
  gap: "12px",
  justifyContent: "flex-end",
}));

const SearchBoxContainer = styled("div")(() => ({
  width: "334px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  border: "1px solid #E8E8F7;",
  borderRadius: "4px",
  paddingRight: "14px",
  backgroundColor: theme.palette.structural.main,
}));

const MainContainer = styled("div")(() => ({
  width: "100%",
  paddingTop: "24px",
  maxHeight: "508px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid #E8E8F7",
  borderBottomLeftRadius: "4px",
  borderBottomRightRadius: "4px",
  backgroundColor: theme.palette.structural.main,
}));

const CardsContainer = styled("div")(({ theme }) => ({
  width: "95%",
  maxHeight: "508px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  overflowY: "scroll",
  overflowX: "hidden",
}));

const CardAndDivider = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
}));

const CryptoTransactionHistory = (props: CryptoTransactionHistoryProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [timePeriod, setTimePeriod] = useState<string>("ALL");
  const [transactions, setTransactions] = useState<TransactionCardProps[]>([]);

  useEffect(() => {
    const ordered = props.transactionCardDetails;
    ordered.reverse();
    setTransactions(ordered);
  }, [props.transactionCardDetails]);

  useEffect(() => {
    const searchResults = props.transactionCardDetails.filter((transaction) => {
      const lowerCaseMainString = transaction.coinName.toLowerCase();
      const lowerCaseSubString = searchValue.toLowerCase();
      return lowerCaseMainString.includes(lowerCaseSubString);
    });
    setTransactions(searchResults);
  }, [searchValue]);

  useEffect(() => {
    const currentDate = new Date();
    let searchResults;
    const data = props.transactionCardDetails;
    switch (timePeriod) {
      case "1Y":
        const lastYear = new Date();
        lastYear.setFullYear(lastYear.getFullYear() - 1);

        searchResults = data.filter((card) => {
          const releaseDate = new Date(card.date);
          return releaseDate >= lastYear && releaseDate <= currentDate;
        });
        break;

      case "1M":
        const lastMonth = new Date();
        lastMonth.setMonth(lastMonth.getMonth() - 1);

        searchResults = data.filter((card) => {
          const releaseDate = new Date(card.date);
          return releaseDate >= lastMonth && releaseDate <= currentDate;
        });
        break;

      case "1W":
        const lastWeek = new Date();
        lastWeek.setDate(lastWeek.getDate() - 7);

        searchResults = data.filter((card) => {
          const releaseDate = new Date(card.date);
          return releaseDate >= lastWeek && releaseDate <= currentDate;
        });
        break;

      default:
        searchResults = data;
        break;
    }
    setTransactions(searchResults);
  }, [timePeriod]);

  const handleTimeDropdownChange = (timePeriod: any) => {
    setTimePeriod(timePeriod);
  };
  return (
    <ContainerWithHeader>
      <HeaderContainer>
        <SearchBoxContainer>
          <SearchBox
            value={searchValue}
            onChange={(eve) => {
              setSearchValue(eve.target.value);
            }}
            onCloseAction={() => {
              setSearchValue("");
            }}
            sxSearchbox={sxSearchbox}
          />
          <LineDivider
            orientation="vertical"
            sx={{ height: "28px", marginLeft: "21px", marginRight: "9px" }}
          />
          <IconComponent src={filter} width="18px" height="12px" />
        </SearchBoxContainer>
        <DropDownComponent
          variant="body1"
          onChange={handleTimeDropdownChange}
          menuList={["ALL", "1H", "24H", "1W", "1M", "1Y"]}
          width={"77px"}
        />
      </HeaderContainer>
      <MainContainer>
        <CardsContainer className="cards-container">
          {transactions.map((cardDetails, index) => {
            const key = cardDetails.coinName + cardDetails.date;
            return (
              <CardAndDivider key={key}>
                <TransactionCard
                  src={cardDetails.src}
                  coinName={cardDetails.coinName}
                  coinDescription={cardDetails.coinDescription}
                  valueBTC={cardDetails.valueBTC}
                  value={cardDetails.value}
                  date={cardDetails.date}
                  type={cardDetails.type}
                />
                <LineDivider sx={{ width: "100%", color: "#E8E8F7" }} />
              </CardAndDivider>
            );
          })}
        </CardsContainer>
      </MainContainer>
    </ContainerWithHeader>
  );
};

export default CryptoTransactionHistory;
