import { Box, Grid, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import theme from "../../../theme";
import TypographyComponent from "../../atoms/Typography";
import { CHOOSE_CRYPTO } from "../../../constants";
import ChooseCrypto from "../../molecules/SelectedCryptoCard";
import { GetAllCrypto } from "../../../services/cryptoCurrency";
import { useSelector } from "react-redux";

export interface Cryptocurrency {
  id: number;
  name: string;
  symbol: string;
  icon: string;
  price: number;
}

interface ChooseCurrencyProps {
  coinId: number;
}

const CustomBox = styled(Box)({
  border: `1px solid ${theme.palette.greyColors.grey100}`,
  borderRadius: "4px",
  padding: "1vw",
  height: "22.99vw",
  background: theme.palette.structural.main,
  width: "97%",
  display: "flex",
  flexDirection: "column",
});

const StyledGrid = styled(Grid)({
  width: "97%",
  overflowY: "scroll",
  overflowX: "hidden",
  "&::-webkit-scrollbar": { width: "0.3rem" },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.greyColors.grey300,
    borderRadius: "10px",
  },
});
export interface Cryptocurrency {
  id: number;
  name: string;
  symbol: string;
  price: number;
  icon: string;
}

const ChooseCurrency: React.FC<ChooseCurrencyProps> = ({ ...props }) => {
  const [data, setData] = useState<Cryptocurrency[]>([]);
  const token = useSelector((state: any) => {
    return state.token.token
  });
  useEffect(() => {
    const CryptoCurrencyData = GetAllCrypto(token);
    CryptoCurrencyData.then((resolve) => {
      setData(resolve.data);
    }).catch(() => {});
  }, []);

  return (
    <CustomBox data-testid="chooseCurrency" display={"flex"}>
      <Grid container direction={"column"} gap={2} height="100%">
        <Grid item>
          <TypographyComponent
            variant="body1"
            color={theme.palette.textColor.highEmphasis}
            sx={{ marginLeft: "24px" }}
          >
            {CHOOSE_CRYPTO}
          </TypographyComponent>
        </Grid>

        <StyledGrid
          item
          container
          maxHeight={"20.55vw"}
          rowSpacing={2}
          columnSpacing={0.5}
          sx={{ marginLeft: "24px" }}
        >
          {
            data?.map((currency) => {
              return (
                <Grid item md={3} key={currency.id}>
                  <ChooseCrypto
                    isSelected={currency.id === props.coinId}
                    coinName={currency.name}
                    coinValue={currency.price}
                    src={currency.icon}
                  />
                </Grid>
              );
            })}
        </StyledGrid>
      </Grid>
    </CustomBox>
  );
};

export default ChooseCurrency;
