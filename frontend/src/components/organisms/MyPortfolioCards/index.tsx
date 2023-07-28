import React from "react";
import TypographyComponent from "../../atoms/Typography";
import { Stack } from "@mui/material";
import IconComponent from "../../atoms/Icons";
import bluelist from "../../../../public/assets/icons/bluelist.svg";
import chart from "../../../../public/assets/icons/chart.svg";
import CryptoPortfolioCard, { CryptoPortfolioCardProps } from "../../molecules/CryptoPortfolioCard";
import "./index.css";
import LineDivider from "../../atoms/LineDivider";
import theme from "../../../theme";
import { formattedBalance } from "../AmountDetailsCard";
import { useNavigate } from "react-router-dom";

interface MyPortfolioCardsProps {
  portfolioProps: CryptoPortfolioCardProps[];
}
const MyPortfolioCards = (props: MyPortfolioCardsProps) => {
  const balance = props.portfolioProps
    .map((portfolio) => portfolio.amount)
    .reduce((a, b) => a + b, 0);
  const navigate = useNavigate();
  return (
    <Stack direction={"column"} width={"100%"} sx={{cursor: "pointer"}}>
      <Stack width={"100%"} direction={"row"} justifyContent={"space-between"}>
        <TypographyComponent>My Portfolio</TypographyComponent>
        <Stack direction={"row"}>
          <IconComponent src={bluelist} width="32px" height="32px" />
          <IconComponent src={chart} width="32px" height="32px" />
        </Stack>
      </Stack>
      <Stack
        width={"100%"}
        sx={{
          overflowY: "auto",
          maxHeight: "235px",
          paddingRight: "12px",
        }}
      >
        {props.portfolioProps.map((portfolio) => {
          return (
            <CryptoPortfolioCard
              key={portfolio.coinName + portfolio.amount}
              iconSrc={portfolio.iconSrc}
              coinName={portfolio.coinName}
              coinShortForm={portfolio.coinShortForm}
              amount={portfolio.amount}
              percentage={portfolio.percentage}
              percentageColor={
                portfolio.percentage >= 0
                  ? theme.palette.primary.success500
                  : theme.palette.loss.borderColor
              }
              onCardClick={() => {
                navigate("/details/Wallet/"+portfolio.id);
              }}
            />
          );
        })}
      </Stack>
      <Stack sx={{ width: "100%" }} gap={"24px"}>
        <LineDivider
          sx={{ width: "100%", color: theme.palette.greyColors.grey100 }}
        ></LineDivider>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{ width: "100%" }}
        >
          <TypographyComponent
            color={theme.palette.textColor.mediumEmphasis}
            variant="body1"
            sx={{ width: "50%" }}
          >
            Total Balance
          </TypographyComponent>
          <TypographyComponent
            color={theme.palette.textColor.highEmphasis}
            variant="body1"
          >
            {"$ " + formattedBalance(balance)}
          </TypographyComponent>
        </Stack>
        <LineDivider
          sx={{ width: "100%", color: theme.palette.greyColors.grey100 }}
        ></LineDivider>
      </Stack>
    </Stack>
  );
};

export default MyPortfolioCards;
