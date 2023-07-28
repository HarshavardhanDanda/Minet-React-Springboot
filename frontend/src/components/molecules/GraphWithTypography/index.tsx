import { Box, Stack, SxProps } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";
import TypographyComponent from "../../atoms/Typography";
import Image from "../../atoms/Image";
import UpArrow from "../../../../public/assets/icons/UpwardArrow.svg";
import DownArrow from "../../../../public/assets/icons/DownwardArrow.svg";
import { Theme } from "@emotion/react";
import theme from "../../../theme";

interface ComponentProps {
  componentSx?: SxProps<Theme>;
  typographyColor: string;
  text: string;
  graphColor?: string;
  graphData: number[];
  graphHeight?: string | number;
  graphWidth?: string | number;
}

const defaultProps = {
  componentSx: { width: "46%", height: "63%" },
  graphColor: "#66DA26",
  graphHeight: "100%",
  graphWidth: "100%",
};
const GraphWithTypogeaphy : React.FC<ComponentProps> = (props: ComponentProps) => {
  return (
    <Box sx={props.componentSx ?? defaultProps.componentSx}>
      <Stack direction="column">
        <Stack direction={"row-reverse"} spacing={1.5} alignItems={"center"}>
          <TypographyComponent color={props.typographyColor} variant="overline">
            {props.text}
          </TypographyComponent>
          <Image
            src={
              theme.palette.primary.success500 === props.typographyColor
                ? UpArrow
                : DownArrow
            }
            width=".9vw"
            height=".9vh"
          />
        </Stack>
        <Chart
          data-testid="chart"
          options={{
            chart: {
              parentHeightOffset: 2,
              offsetY: -25,
              toolbar: {
                show: false,
              },
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
            },
            colors: [props.graphColor ?? defaultProps.graphColor],
            yaxis: {
              show: false,
            },
            xaxis: {
              labels: { show: false },
              axisBorder: { show: false },
              axisTicks: { show: false },
            },
            grid: {
              show: false,
            },
            stroke: {
              curve: "smooth",
              width: 1,
            },
            dataLabels: {
              enabled: false,
            },
          }}
          series={[
            {
              data: props.graphData,
            },
          ]}
          type="area"
          height={props.graphHeight ?? defaultProps.graphHeight}
          width={props.graphWidth ?? defaultProps.graphWidth}
        />
      </Stack>
    </Box>
  );
};

export default GraphWithTypogeaphy;
