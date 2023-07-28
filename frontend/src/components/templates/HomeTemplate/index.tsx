import React from "react";
import { Stack, Box, SxProps } from "@mui/material";
import Footer from "../../molecules/Footer";
import styled from "@emotion/styled";
import { Theme } from "@emotion/react";
import theme from "../../../theme";

const StyledFooter = styled(Footer)({
  width: "100%",
  height: "100%",
  paddingLeft: 0,
});
interface TemplateProps {
  navCopmponent: React.ReactNode;
  headerCopmponent: React.ReactNode;
  middleLeftComponent: React.ReactNode;
  middleRightComponent: React.ReactNode;
  middleLeftSx?: SxProps<Theme>;
  middleRightSx?: SxProps<Theme>;
}

const HomeTemplate = (props: TemplateProps) => {
  return (
    <Box
      data-testid="home-template"
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: theme.palette.primary.primary100,
        overflowX: "hidden"
      }}
    >
      <Stack direction="row" sx={{ width: "100%", height: "100%" }}>
        <Stack
          direction={"column"}
          sx={{
            width: "6%",
            height: "100",
            backgroundColor: theme.palette.structural.main,
          }}
        >
          {props.navCopmponent}
        </Stack>
        <Stack direction={"column"} sx={{ width: "94%", height: "100%" }}>
          <Box
            sx={{
              width: "100%",
              height: "15%",
              backgroundColor: theme.palette.structural.main,
            }}
          >
            {props.headerCopmponent}
          </Box>
          <Stack
            direction={"row"}
            sx={{
              width: "100%",
              height: "85%",
            }}
          >
            <Box
              sx={{
                width: "69%",
                height: "98%",
                paddingTop: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
                overflowY: "scroll",
                scrollBehavior: "smooth",
                "::-webkit-scrollbar": {
                  display: "none",
                },
                ...props.middleLeftSx,
              }}
            >
              {props.middleLeftComponent}
            </Box>
            <Box
              sx={{
                width: "31%",
                height: "98%",
                overflowY: "scroll",
                paddingTop: "20px",
                scrollBehavior: "smooth",
                "::-webkit-scrollbar": {
                  display: "none",
                },
                ...props.middleRightSx,
              }}
            >
              {props.middleRightComponent}
            </Box>
          </Stack>
          <StyledFooter />
        </Stack>
      </Stack>
    </Box>
  );
};
export default HomeTemplate;
