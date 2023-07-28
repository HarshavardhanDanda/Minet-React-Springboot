import React from "react";
import { Box, Stack } from "@mui/material";
import Footer from "../../molecules/Footer";
import theme from "../../../theme";

interface MainTemplateProps {
  navComponent: React.ReactNode;
  headerComponent: React.ReactNode;
  middeleComponent: React.ReactNode;
}

const MainTemplate = (props: MainTemplateProps) => {
  return (
    <Box
      data-testid="mainTemplate"
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: "#FAFCFF",
        overflowX: "hidden"
      }}
    >
      <Stack direction={"row"} sx={{ width: "100%", height: "100%" }}>
        <Box sx={{ width: "6%", height: "100%", backgroundColor:theme.palette.structural.main}}>{props.navComponent}</Box>
        <Stack direction={"column"} sx={{ width: "94%", height: "100%" }}>
          <Box sx={{ width: "100%", height: "10%", backgroundColor:theme.palette.structural.main }}>
            {props.headerComponent}
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "78%",
              overflowY: "scroll",
              scrollBehavior: "smooth",
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {props.middeleComponent}
          </Box>
          <Box sx={{ width: "100%", height: "12%" }}>
            <Footer />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default MainTemplate;
