import React, { ReactNode, useEffect, useState } from "react";
import TableCryptoDetailsCard, {
  TableCryptoDetailsCardProps,
} from "../../molecules/TableCryptoDetailsCard";
import { Box, Stack, SxProps, Tab, Tabs, Theme, styled } from "@mui/material";
import theme from "../../../theme";
import switch1 from "../../../../public/assets/icons/switch.svg";
import TypographyWithIcon from "../../molecules/TypographyWithIcon";
import TypographyComponent from "../../atoms/Typography";
import SearchBox from "../../molecules/SearchBox";
import DropDownComponent from "../../atoms/dropdown";
import { GetCryptoDataById } from "../../../services/cryptoCurrency";
import {
  GetWatchLists,
  DeleteWatchlistById,
  PostWatchlist,
} from "../../../services/watchlists";

export interface CryptoDataProps {
  id: number;
  name: string;
  symbol: string;
  icon: string;
  marketCap: string;
  created: string;
  price: number;
  priceAt1H: number;
  priceAt1D: number;
  priceAt1W: number;
  priceAt1M: number;
  totalSupply: string;
  circulatingSupply: string;
  priceChange: number;
}
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface TableFrameProps {
  Watchlist?: ReactNode;
  tableData: TableCryptoDetailsCardProps[];
  screen?: string;
}
const sxSearchbox: SxProps<Theme> = {
  ".MuiOutlinedInput-root": {
    width: "15.9vw",
    height: "4.5vh",
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

const HeaderContainer = styled("div")(() => ({
  width: "100%",
  height: "40px",
  display: "flex",
  gap: "12px",
  justifyContent: "flex-end",
  borderBottom: "1px solid #E8E8F7",
  marginBottom: "24px",
  marginTop: "24px",
}));

const SearchBoxContainer = styled("div")(() => ({
  width: "15vw",
  height: "40px",
  display: "flex",
  alignItems: "center",
  border: "1px solid #E8E8F7;",
  borderRadius: "4px",
  paddingRight: "14px",
  backgroundColor: theme.palette.structural.main,
  justifyContent: "flex-end",
}));

const StyledBox = styled(Box)({
  color: theme.palette.structural.main,
  display: "flex",
  alignItems: "center",
  background: theme.palette.primary.primary100,
  borderRadius: "4px",
  width: "98%",
  height: "5%",
});
const TradeFrame = (props: TableFrameProps) => {
  const [watchlistData, setWatchlistData] = useState<any>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [navValue, setNavValue] = useState<string>(props.screen ?? "AllAssets");
  const [transactions, setTransactions] = useState<
    TableCryptoDetailsCardProps[]
  >([]);
  const [watchlistCryptoData, setWatchlistCryptoData] = useState<
    CryptoDataProps[]
  >([]);
  const navigate = useNavigate();
  const user = useSelector((state: any) => {
    return state.user.user;
  });

  const isWatchlisted = (cryptoId: number) => {
    return watchlistCryptoData.some((item: any) => item.id === cryptoId);
  };

  const token = useSelector((state: any) => {
    return state.token.token
  });

  const postOrDeleteWatchlist = async (cryptoId: number) => {
    try {
      const WatchlistData = await GetWatchLists(user.id, token);
      const Watchlist = async () => {
        const response = WatchlistData.data;
        const existingWatchlistItem = response.find(
          (item: any) => item.cryptoCurrencyId === cryptoId && item.userId == user.id
        );

        if (existingWatchlistItem) {
          const response = await DeleteWatchlistById(existingWatchlistItem.id, token);
          setWatchlistData(response);
        } else {
          const data = {
            userId: user.id,
            cryptoCurrencyId: cryptoId,
          };
          const response = await PostWatchlist(data, token);
          setWatchlistData(response);
        }
      };
      Watchlist();
    } catch (error) {}
  };

  useEffect(() => {
    GetWatchLists(user.id, token)
      .then((response) => {
        const watchlistPromises = response.data.map(async (watchlist: any) => {
          const crypto = await GetCryptoDataById(watchlist.cryptoCurrencyId, token);
          return crypto.data;
        });
        Promise.all(watchlistPromises).then((resolvedWatchlists) => {
          setWatchlistCryptoData(resolvedWatchlists);
        });
      })
      .catch((error: any) => {});
  }, [watchlistData]);

  useEffect(() => {
    setTransactions(props.tableData);
  }, [props.tableData]);

  useEffect(() => {
    const searchResults = props.tableData?.filter((transaction) => {
      const lowerCaseMainString = transaction.coinName.toLowerCase();
      const lowerCaseSubString = searchValue.toLowerCase();
      return lowerCaseMainString.includes(lowerCaseSubString);
    });
    const watchlistSearchResults = watchlistCryptoData?.filter(
      (transaction) => {
        const lowerCaseMainString = transaction.name.toLowerCase();
        const lowerCaseSubString = searchValue.toLowerCase();
        return lowerCaseMainString.includes(lowerCaseSubString);
      }
    );
    setTransactions(searchResults);
    setWatchlistCryptoData(watchlistSearchResults);
  }, [searchValue]);

  return (
    <Box marginLeft={"24px"} bgcolor={theme.palette.primary.primary100}>
      <StyledBox>
        <Stack
          justifyContent={"space-between"}
          sx={{
            height: "88%",
            width: "100%",
            backgroundColor: "#FAFCFF",
          }}
          direction={"column"}
        >
          <HeaderContainer>
            <Tabs
              sx={{
                height: "100%",
                width: "100%",
                minHeight: "100%",
              }}
              value={navValue}
              onChange={(event: React.SyntheticEvent, newValue: string) => {
                setNavValue(newValue);
                navigate("/trade/" + newValue);
              }}
            >
              <Tab
                sx={{
                  height: "100%",
                  maxHeight: "100%",
                  textTransform: "none",
                  fontSize: "20px",
                 

                }}
                value="AllAssets"
                label={<TypographyComponent variant="subtitle2" children="All Assets"/>}
              />
              <Tab
                sx={{
                  height: "100%",
                  maxHeight: "100%",
                  textTransform: "none",
                  
                }}
                value="Watchlist"
                label={<TypographyComponent variant="subtitle2"  children="Watchlist"/>}

              />
            </Tabs>

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
            </SearchBoxContainer>
            <DropDownComponent
              variant="body1"
              menuList={["ALL", "1H", "24H", "1W", "1M", "1Y"]}
              width={"77px"}
              onChange={function (arg: any): void {}}
              backgroundColor={theme.palette.structural.main}
            />
            <DropDownComponent
              variant="body1"
              menuList={["All assets"]}
              width={"122px"}
              onChange={function (arg: any): void {}}
              backgroundColor={theme.palette.structural.main}
            />
          </HeaderContainer>
          {navValue === "AllAssets" ? (
            <>
              <StyledBox>
                <TypographyComponent
                  children="Name"
                  width={"25%"}
                  variant="caption1"
                  color={theme.palette.greyColors.grey500}
                  sx={{ marginLeft: "24px" }}
                />
                <TypographyComponent
                  width={"28%"}
                  variant="caption1"
                  color={theme.palette.greyColors.grey500}
                  children="Price"
                />
                <TypographyComponent
                  width={"20%"}
                  variant="caption1"
                  color={theme.palette.greyColors.grey500}
                  children="Change"
                />
                <TypographyWithIcon
                  typogerphyVariant={"caption1"}
                  typographyColor={theme.palette.greyColors.grey500}
                  label={"Market Cap"}
                  iconSrc={switch1}
                  sxStack={{ width: "19.209%" }}
                />
                <TypographyComponent
                  width={"6.295%"}
                  variant="caption1"
                  color={theme.palette.greyColors.grey500}
                  children="Watch"
                />
              </StyledBox>
              {transactions.map((data) => (
                <Stack
                  style={{ marginBottom: "12px" }}
                  key={data.coinName + data.symbol}
                  data-testid="table-row"
                  onClick={() => {
                    navigate("/details/Overview/" + data.cryptoId);
                  }}
                >
                  <TableCryptoDetailsCard
                    cryptoId={data.cryptoId}
                    src={data.src}
                    coinHeight={data.coinHeight}
                    coinWidth={data.coinWidth}
                    coinName={data.coinName}
                    symbol={data.symbol}
                    priceChange={data.priceChange}
                    price={data.price}
                    marketCap={data.marketCap}
                    checked={isWatchlisted(data.cryptoId)}
                    onClick={(event) => {
                      event.stopPropagation();
                      postOrDeleteWatchlist(data.cryptoId);
                    }}
                  />
                </Stack>
              ))}
            </>
          ) : (
            <>
              <StyledBox>
                <TypographyComponent
                  color={theme.palette.greyColors.grey500}
                  variant="caption1"
                  children="Name"
                  width={"25%"}
                  sx={{ marginLeft: "24px" }}
                />
                <TypographyComponent
                  color={theme.palette.greyColors.grey500}
                  variant="caption1"
                  children="Price"
                  width={"28%"}
                />
                <TypographyComponent
                  color={theme.palette.greyColors.grey500}
                  variant="caption1"
                  children="Change"
                  width={"20%"}
                />
                <TypographyWithIcon
                  label={"Market Cap"}
                  iconSrc={switch1}
                  typographyColor={theme.palette.greyColors.grey500}
                  typogerphyVariant={"caption1"}
                  sxStack={{ width: "19.209%" }}
                />
                <TypographyComponent
                  color={theme.palette.greyColors.grey500}
                  variant="caption1"
                  children="Watch"
                  width={"6.295%"}
                />
              </StyledBox>
              {watchlistCryptoData.map((data) => (
                <Stack
                  style={{ marginBottom: "12px" }}
                  key={data.name + data.symbol}
                  data-testid="table-row"
                  onClick={() => {
                    navigate("/details/Overview/" + data.id);
                  }}
                >
                  <TableCryptoDetailsCard
                    cryptoId={data.id}
                    src={data.icon}
                    coinHeight={"42px"}
                    coinWidth={"42px"}
                    coinName={data.name}
                    symbol={data.symbol}
                    priceChange={data.priceChange}
                    price={data.price}
                    marketCap={data.marketCap}
                    checked={true}
                    onClick={(event) => {
                      event.stopPropagation();
                      postOrDeleteWatchlist(data.id);
                    }}
                  />
                </Stack>
              ))}
            </>
          )}
        </Stack>
      </StyledBox>
    </Box>
  );
};

export default TradeFrame;
