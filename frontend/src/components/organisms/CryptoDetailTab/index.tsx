import React, { useState } from "react";
import { Stack, Tabs, Tab, Box } from "@mui/material";
import Graph from "../../molecules/Graph";
import TypographyComponent from "../../atoms/Typography";
import theme from "../../../theme";
import TypographyWithIcon from "../../molecules/TypographyWithIcon";
import CryptoDetails from "../../molecules/CryptoDetails";

import TimeLineTabs from "../../molecules/Timeline";
import PriceCorrelation from "../PriceCorrelation";
import { useNavigate } from "react-router-dom";

interface CryptoDetailsTabProps {
  coinCost: string;
  iconSrc: string;
  percantage: string;
  graphdata: ApexAxisChartSeries | ApexNonAxisChartSeries;
  graphColor: string[];
  wallet?: React.ReactNode;
  textColor: string;
  graphXaxisLabels: string[];
  screen?: string;
  coinId: number;
}

const CryptoDetailsTab = (props: CryptoDetailsTabProps) => {
  const [navValue, setNavValue] = useState<string>(props.screen ?? "Overview");
  const nav = useNavigate();
  return (
    <Stack
      data-testid="cryptoDetailsTab"
      direction={"column"}
      sx={{ width: "100%", height: "100%", backgroundColor: "#FAFCFF" }}
      justifyContent={"space-between"}
    >
      <Box
        sx={{
          width: "100%",
          height: "6%",
          borderBottom: 1,
          borderColor: "#E8E8F7",
        }}
      >
        <Tabs
          value={navValue}
          onChange={(event: React.SyntheticEvent, newValue: string) => {
            setNavValue(newValue);
            nav("/details/" + newValue + "/" + props.coinId);
          }}
          sx={{ width: "100%", height: "100%", minHeight: "100%" }}
        >
          <Tab
            value="Overview"
            label={<TypographyComponent variant="subtitle2"  children="Overview"/>}

            sx={{ height: "100%", maxHeight: "100%", textTransform: "none" }}
          />
          <Tab
            value="Wallet"
            label={<TypographyComponent variant="subtitle2"  children="Wallet"/>}

            sx={{ height: "100%", maxHeight: "100%", textTransform: "none" }}
          />
        </Tabs>
      </Box>
      {navValue === "Overview" ? (
        <Stack
          direction={"column"}
          sx={{ width: "100%", height: "93%" }}
          justifyContent={"space-around"}
        >
          <Box
            sx={{
              width: "100%",
              height: "51%",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#ffffff",
              borderRadius: "4px",
              border: "1px solid #E8E8F7",
            }}
          >
            <Stack
              direction={"column"}
              sx={{ width: "97%", height: "98%" }}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <Stack
                direction={"row"}
                sx={{ width: "100%", height: "20%" }}
                justifyContent={"space-between"}
              >
                <Stack
                  direction={"column"}
                  sx={{ width: "16%", height: "100%" }}
                >
                  <TypographyComponent
                    variant="caption1"
                    color={theme.palette.textColor.mediumEmphasis}
                  >
                    Current Value
                  </TypographyComponent>
                  <TypographyComponent
                    variant="h6"
                    color={theme.palette.textColor.highEmphasis}
                  >
                    {props.coinCost}
                  </TypographyComponent>
                  <TypographyWithIcon
                    direction="row-reverse"
                    sxStack={{
                      width: "100%",
                      height: "40%",
                      justifyContent: "start",
                    }}
                    label={props.percantage}
                    iconSrc={props.iconSrc}
                    typogerphyVariant="caption2"
                    typographyColor={props.textColor}
                  />
                </Stack>
                <TimeLineTabs />
              </Stack>
              <Box sx={{ width: "100%", height: "64%" }}>
                <Graph
                  type="area"
                  series={props.graphdata}
                  showLegend={false}
                  showGrid={true}
                  colors={props.graphColor}
                  showXaxis={true}
                  xAxisCategories={props.graphXaxisLabels}
                  strokeCurve={"smooth"}
                  boxSx={{ width: "100%", height: "100%" }}
                  legendHorizontalPosition="right"
                  legendPosition="top"
                  height={"100%"}
                  width={"100%"}
                />
              </Box>
            </Stack>
          </Box>
          <Stack
            direction={"row"}
            sx={{ width: "100%", height: "38%" }}
            justifyContent={"space-between"}
          >
            <CryptoDetails />
            <PriceCorrelation />
          </Stack>
        </Stack>
      ) : (
        <Box sx={{ width: "100%", height: "93%" }}>{props.wallet}</Box>
      )}
    </Stack>
  );
};

export default CryptoDetailsTab;
