import React, { MouseEventHandler } from "react";
import { styled } from "@mui/material";
import theme from "../../../theme";

import Image from "../../atoms/Image";
import TypographyComponent from "../../atoms/Typography";
import ChipItem from "../../atoms/Chip";
import recentTransactionAlt from "../../../../public/assets/Images/recentTransactionAlt.svg"
import { formattedBalance } from "../AmountDetailsCard";

const MainContainer = styled("div")({
  height: "222px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

const InnerContainer = styled("div")({
  display: "flex",
  width: "100%",
  height: "46px",
  justifyContent: "space-between",
});

const TypographyContent = styled("div")({
  height: "22px",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const ImageContainer = styled(Image)({
  height: "44px",
  width: "44px",
  display: "flex",
  marginRight: "12px",
});

const CoinContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

const CoinDataContainer = styled("div")({
  display: "flex",
});

const DateAndCoinData = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginTop: "12px",
  marginBottom: "12px",
  paddingRight: "12%",
  width: "100%"
});

const ValueContainer = styled("div")({
  height: "42px",
  width: "150px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "space-between"
});

const ImageAltContainer = styled("div")({
  width: "100%",
  height: "105px",
  display: "flex",
  flexDirection: "column",
  marginTop: "58px",
  alignItems: "center"
});

export interface TransactionCardProps {
  src: string;
  coinSymbol: string;
  coinName: string;
  transactionType: string;
  valueBTC: string;
  value: number;
  date: string;
}

interface RecentTransactionsProps {
  recentTransactions: TransactionCardProps[];
  handleViewAll?: MouseEventHandler<HTMLSpanElement>;
}

const RecentTransactions = (props: RecentTransactionsProps) => {

  const getMonth = (date: string) => {
    const dateObj = new Date(date);
    const monthName = dateObj.toLocaleString("default", { month: "short" });
    return monthName;
  };

  return (
    <>
      <MainContainer>
        <TypographyContent>
          <TypographyComponent
            variant="body1"
            color={theme.palette.textColor.highEmphasis}
          >
            Recent transactions
          </TypographyComponent>
          <TypographyComponent
            variant="caption2"
            color={theme.palette.primary.primary500}
            onClick={props.handleViewAll}
            sx={{cursor: "pointer"}}
          >
            View All
          </TypographyComponent>
        </TypographyContent>
        {props.recentTransactions.length !== 0 ? (
          props.recentTransactions.slice(0, 2).map((transaction) => (
            <DateAndCoinData key={transaction.date}>
              <TypographyComponent
                variant="caption2"
                color={theme.palette.textColor.highEmphasis}
              >
                {getMonth(transaction.date) +
                  " " +
                  transaction.date.slice(8, 10)}
              </TypographyComponent>
              <InnerContainer>
                <CoinDataContainer>
                  <ImageContainer
                    src={transaction.src}
                    width={"44px"}
                    height={"44px"}
                  />
                  <CoinContainer>
                    <TypographyComponent
                      children={transaction.coinName}
                      variant="body1"
                      color={theme.palette.textColor.highEmphasis}
                    />
                    <ChipItem
                      label={
                        transaction.transactionType === "sell"
                          ? "Sold"
                          : "Purchased"
                      }
                      chiptype="rounded"
                    />
                  </CoinContainer>
                </CoinDataContainer>
                <ValueContainer>
                  <TypographyComponent
                    children={
                      (transaction.transactionType === "sell" ? "-" : "+") +
                      transaction.valueBTC +
                      " " +
                      transaction.coinSymbol
                    }
                    variant="body1"
                    color={theme.palette.textColor.highEmphasis}
                  />
                  <TypographyComponent
                    children={
                      (transaction.transactionType === "sell" ? "-" : "+") +
                      formattedBalance(transaction.value)
                    }
                    variant="caption2"
                    color={theme.palette.textColor.mediumEmphasis}
                  />
                </ValueContainer>
              </InnerContainer>
            </DateAndCoinData>
          ))
        ) : (
          <ImageAltContainer>
            <Image src={recentTransactionAlt} width="100%" height="61px" />
            <TypographyComponent
              variant="caption2"
              color={theme.palette.textColor.mediumEmphasis}
              sx={{ width: "70%", marginTop: "10px", textAlign: "center" }}
            >
              You don’t own any crypto. Send yourself some crypto to get
              started.
            </TypographyComponent>
          </ImageAltContainer>
        )}
      </MainContainer>
    </>
  );
};
export default RecentTransactions;
