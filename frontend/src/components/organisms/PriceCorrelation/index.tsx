import React from "react";
import { Stack } from "@mui/material";

import Bitcoin from "../../../../public/assets/Images/coins/bitcoin2.svg";
import Ethereum from "../../../../public/assets/Images/coins/ethreum.svg";
import XRP from "../../../../public/assets/Images/coins/XRP.svg";
import Tether from "../../../../public/assets/Images/coins/tether.svg";
import "./index.css";
import TypographyComponent from "../../atoms/Typography";
import theme from "../../../theme";
import PriceCorrelationCard from "../../molecules/PriceCorrelationCard";


const PriceCorrelation = () => {
  return (
    <>
      <Stack
        direction={"column"}
        sx={{
          width: "397px",
          height: "312px",
          backgroundColor: "#ffffff",
          border: "1px solid #E8E8F7",
          borderRadius: "4px",
        }}
      >
        <TypographyComponent
          color={theme.palette.textColor.highEmphasis}
          sx={{ marginTop: "16px", marginLeft: "28.5px", marginBottom: "8px" }}
          variant="subtitle1"
        >
          Price correlation with
        </TypographyComponent>
        <Stack
          direction={"column"}
          spacing={"20px"}
          sx={{ overflowY: "auto", maxHeight: "244px", paddingRight: "12px" }}
        >
          <PriceCorrelationCard
            data-testid="price-correlation-card-bitcoin"
            title="PriceCorrelation"
            src={Bitcoin}
            label="Bitcoin"
            description="Moves tightly together"
            amount="$3,285,533.73"
            percentage="100%"
          />
          <PriceCorrelationCard
            data-testid="price-correlation-card-ethereum"
            src={Ethereum}
            label="Ethereum"
            description="Moves tightly together"
            amount="$230,966.85"
            percentage="86%"
          />
          <PriceCorrelationCard
            data-testid="price-correlation-card-xrp"
            src={XRP}
            label="XRP"
            description="Moves tightly together"
            amount="$60.20"
            percentage="10%"
          />
          <PriceCorrelationCard
            data-testid="price-correlation-card-tether"
            src={Tether}
            label="Tether"
            description="Moves tightly together"
            amount="$74.28"
            percentage="2%"
          />
          <PriceCorrelationCard
            data-testid="price-correlation-card-bitcoin"
            src={Bitcoin}
            label="Bitcoin"
            description="Moves tightly together"
            amount="$3,285,533.73"
            percentage="100%"
          />
          <PriceCorrelationCard
            data-testid="price-correlation-card-ethereum"
            src={Ethereum}
            label="Ethereum"
            description="Moves tightly together"
            amount="$230,966.85"
            percentage="86%"
          />
          <PriceCorrelationCard
            data-testid="price-correlation-card-xrp"
            src={XRP}
            label="XRP"
            description="Moves tightly together"
            amount="$60.20"
            percentage="10%"
          />
          <PriceCorrelationCard
            data-testid="price-correlation-card-tether"
            src={Tether}
            label="Tether"
            description="Moves tightly together"
            amount="$74.28"
            percentage="2%"
          />
        </Stack>
      </Stack>
    </>
  );
};
export default PriceCorrelation;
