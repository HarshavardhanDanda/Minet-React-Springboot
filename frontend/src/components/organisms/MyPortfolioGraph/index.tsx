import React from "react";
import { SxProps, Theme, styled } from "@mui/material";
import Graph from "../../molecules/Graph";
import TotalInvestment from "../../molecules/TotalInvestment";
import LineDivider from "../../atoms/LineDivider";
import TimeLineTabs from "../../molecules/Timeline";
import NoGraphAlt from "../../../../public/assets/Images/noGraphAlt.svg"
import Image from "../../atoms/Image";


const TotalContainer = styled("div")({
  height: "22.925vw",
  width: "95.3%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "24px",
  backgroundColor: "#FFFFFF",
  border: "1px solid #E8E8F7",
});

const MainContainer = styled("div")({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

const ValueContainer = styled("div")({
  height: "4.329vw",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
});

const CoinDescriptionContainer = styled("div")({
    width: '50%',
    height: '3.571vw',
    display: 'flex',
    gap: '1.298vw',
    alignItems: 'center',
})

const ImageContainer = styled("div")({
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    width: '100%',
})

export interface MyportfolioGraphProps {
    title1: string;
    title2?: string;
    value1: string;
    value2?: string;
    changePercentage1: string;
    changePercentage2?: string;
    colors?: string[];
    showYaxis?: boolean;
    showXaxis?: boolean;
    showXaxisBorders?: boolean;
    xAxisCategories?: string[] | number[];
    strokeCurve?:
        | "smooth"
        | "straight"
        | "stepline"
        | ("smooth" | "straight" | "stepline")[];
    showLegend?: boolean;
    showSingleLedeng?: boolean;
    showGrid?: boolean;
    type?:
        | "line"
        | "area"
        | "bar"
        | "histogram"
        | "pie"
        | "donut"
        | "radialBar"
        | "scatter"
        | "bubble"
        | "heatmap"
        | "treemap"
        | "boxPlot"
        | "candlestick"
        | "radar"
        | "polarArea"
        | "rangeBar";
    series?: ApexAxisChartSeries | ApexNonAxisChartSeries;
    height?: string | number;
    width?: string | number;
    legendPosition?: "top" | "right" | "bottom" | "left";
    legendHorizontalPosition?: "right" | "left" | "center";
    offSetY?: number;
    boxSx?: SxProps<Theme>;

}

const MyportfolioGraph = ( props: MyportfolioGraphProps ) => {
      return (
        <>
          <TotalContainer>
            <MainContainer>
              <ValueContainer>
                <CoinDescriptionContainer>
                  <TotalInvestment
                    title={props.title1}
                    value={props.value1}
                    changePercentage={props.changePercentage1}
                  />
                  {props.title2 != undefined ? (
                    <>
                      <LineDivider
                        orientation="vertical"
                        sx={{ height: "4.5vw" }}
                      />
                      <TotalInvestment
                        title={props.title2}
                        value={props.value2!}
                        changePercentage={props.changePercentage2!}
                      />
                    </>
                  ) : (
                    <></>
                  )}
                </CoinDescriptionContainer>
                <TimeLineTabs typevariant="Dashboard" />
              </ValueContainer>
              {props.title2 != undefined ? (
                <>
                  <Graph
                    type={props.type!}
                    series={props.series!}
                    showLegend={props.showLegend!}
                    colors={props.colors!}
                    height={props.height}
                    width={props.width}
                    legendHorizontalPosition={props.legendHorizontalPosition}
                    legendPosition={props.legendPosition}
                    strokeCurve={props.strokeCurve}
                    xAxisCategories={props.xAxisCategories}
                    showXaxis={props.showXaxis}
                    showGrid={props.showGrid}
                    boxSx={props.boxSx}
                  />
                </>
              ) : (
                <>
                  <ImageContainer>
                    <Image src={NoGraphAlt} width="100%" height="223px" />
                  </ImageContainer>
                </>
              )}
            </MainContainer>
          </TotalContainer>
        </>
      );
};
export default MyportfolioGraph;