import React from "react";
import { Stack, Divider, Grid } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import TypographyWithIcon from "../../molecules/TypographyWithIcon";
import IconComponent from "../../atoms/Icons";
import theme from "../../../theme";
import Grid1 from "../../../../public/assets/icons/BlueGrid.svg";
import List from "../../../../public/assets/icons/list.svg";
import BlueEdit from "../../../../public/assets/Images/BlueEdit.svg";
import Left from "../../../../public/assets/icons/BlueArrow.svg";
import WatchlistCard from "../../molecules/WatchlistCard";
import { WatchlistCardWithIdProps } from "../../../pages/HomePage";
import { useNavigate } from "react-router-dom";

export interface WatchListProps {
  cardProps?: WatchlistCardWithIdProps[];
}

const WatchList = (props: WatchListProps) => {
  const navigate = useNavigate();
  return (
    <Stack width={"100%"} height={"42%"} gap={"14px"}>
      <Stack
        width={"100%"}
        height={32}
        direction="row"
        gap={"12px"}
        justifyContent={"space-between"}
      >
        <Stack direction="row" gap={"12px"} alignItems="center" width={244}>
          <TypographyComponent variant="subtitle1">
            Watchlist
          </TypographyComponent>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              width: "auto",
              height: "70%",
              color: theme.palette.greyColors.grey100,
              mt: "4px",
            }}
          />
          <TypographyWithIcon
            typogerphyVariant="caption1"
            label="Discover assets"
            iconSrc={Left}
            typographyColor={theme.palette.primary.primary500}
            spacing={"2px"}
            sxStack={{ cursor: "pointer", width: "130px", height: "24px" }}
            iconHeight="9.55px"
            iconWidth="5.83px"
            onClick={() => {
              navigate("/trade/AllAssets");
            }}
          />
        </Stack>

        <Stack direction="row" gap={"19px"} alignItems="center">
          <TypographyWithIcon
            typogerphyVariant="caption1"
            label="View Watchlist"
            iconSrc={BlueEdit}
            typographyColor={theme.palette.primary.primary500}
            sxStack={{ cursor: "pointer", width: "124px", height: "24px" }}
            iconHeight="10.5px"
            iconWidth="10.5px"
            onClick={() => {
              navigate("/trade/Watchlist");
            }}
          />
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              width: "auto",
              height: "70%",
              color: theme.palette.greyColors.grey100,
              mt: "4px",
            }}
          />
          <Stack direction="row" gap={"14px"} alignItems="center">
            <IconComponent src={Grid1} />
            <IconComponent src={List} />
          </Stack>
        </Stack>
      </Stack>
      <Grid
        container
        width={"100%"}
        height={"80%"}
        direction="row"
        display="flex"
        flexWrap="wrap"
        gap={"2.80%"}
      >
        {props?.cardProps?.slice(0, 4).map((data, index) => {
          const totalCards = props?.cardProps?.length;
          const graphLengthbool =
           ( totalCards === 1 || totalCards === 3);
          const setWidth =
            graphLengthbool && (totalCards && totalCards - 1) === index;
          return (
            <Grid
              data-testid="watchListCard"
              item
              key={data.coinName}
              width={setWidth ? "100%" : "48.57%"}
              height={"130px"}
              sx={{
                backgroundColor: theme.palette.structural.main,
                marginBottom: "24px",
              }}
              onClick={() => {
                navigate("/details/Overview/" + data.id);
              }}
            >
              <WatchlistCard
                data-testid="watchlist-card"
                src={data.src}
                coinName={data.coinName}
                price={data.price}
                priceChange={data.priceChange}
                graphData={data.graphData}
                cardWidth={setWidth ? "95%" : "90.5%"}
              />
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default WatchList;
