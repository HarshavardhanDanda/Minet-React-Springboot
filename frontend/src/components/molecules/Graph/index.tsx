import { Box, SxProps, Theme } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";
import theme from "../../../theme";

interface GrapgProps {
  colors: string[];
  showYaxis?: boolean;
  showXaxis?: boolean;
  showXaxisBorders?: boolean;
  xAxisCategories?: string[] | number[];
  strokeCurve?:
    | "smooth"
    | "straight"
    | "stepline"
    | ("smooth" | "straight" | "stepline")[];
  showLegend: boolean;
  showSingleLedeng?: boolean;
  showGrid?: boolean;
  type:
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
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  height?: string | number;
  width?: string | number;
  legendPosition?: "top" | "right" | "bottom" | "left";
  legendHorizontalPosition?: "right" | "left" | "center";
  offSetY?: number;
  boxSx?: SxProps<Theme>;
}

const Graph = (props: GrapgProps) => {
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      events: {
        animationEnd: undefined,
        beforeMount: undefined,
        mounted: undefined,
        updated: undefined,
        mouseMove: undefined,
        mouseLeave: undefined,
        click: undefined,
        legendClick: undefined,
        markerClick: undefined,
        xAxisLabelClick: undefined,
        selection: undefined,
        dataPointSelection: undefined,
        dataPointMouseEnter: undefined,
        dataPointMouseLeave: undefined,
        beforeZoom: undefined,
        beforeResetZoom: undefined,
        zoomed: undefined,
        scrolled: undefined,
      },
      parentHeightOffset: 2,
      toolbar: {
        show: false,
      },
      offsetY: props.offSetY ?? -10,
    },
    colors: props.colors,
    yaxis: {
      show: props.showYaxis,
    },
    xaxis: {
      labels: { show: props.showXaxis, style: {
        colors: theme.palette.textColor.main
      }, },
      axisBorder: { show: props.showXaxisBorders },
      axisTicks: { show: false },
      overwriteCategories: props.xAxisCategories,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: props.strokeCurve,
      width: 2,
    },
    legend: {
      show: props.showLegend,
      showForSingleSeries: props.showSingleLedeng,
      position: props.legendPosition,
      horizontalAlign: props.legendHorizontalPosition,
      markers: {
        width: 8,
        height: 8
      },
    },
    grid: {
      show: props.showGrid,
    },
  };

  return (
    <Box
      data-testid="graph-component"
      sx={props.boxSx ?? { width: "780px", height: "256px" }}
    >
      <Chart
        options={chartOptions}
        type={props.type}
        series={props.series}
        height={props.height}
        width={props.width}
      />
    </Box>
  );
};

export default Graph;
