import React from "react";
import TypographyWithIcon from "../TypographyWithIcon";
import TypographyComponent from "../../atoms/Typography";
import { Stack } from "@mui/material";
import theme from "../../../theme";
import Web from "../../../../public/assets/icons/website.svg";
import Paper from "../../../../public/assets/icons/paperwork.svg";
import { bitcoinInfo } from "../../../utils/content";

const CryptoDetails = () => {
  return (
    <Stack
      data-testid="cryptoDetails"
      direction="column"
      sx={{ width: "65%", height: "64%", backgroundColor: "#FAFCFF" }}
      justifyContent={"space-between"}
    >
      <Stack
        direction={"column"}
        sx={{ width: "100%", height: "44%" }}
        justifyContent={"space-between"}
      >
        <TypographyComponent
          variant="body1"
          color={theme.palette.textColor.highEmphasis}
        >
          About Bitcoin
        </TypographyComponent>
        <TypographyComponent variant="body2">{bitcoinInfo}</TypographyComponent>
      </Stack>
      <Stack direction={"column"} sx={{ width: "20.4%", height: "44%" }}>
        <TypographyComponent variant="body1">Resources</TypographyComponent>
        <Stack direction={"column"}>
          <TypographyWithIcon
            typogerphyVariant="body2"
            typographyColor={theme.palette.primary.primary500}
            iconSrc={Web}
            direction="row-reverse"
            label="Official Website"
            sxStack={{ width: "100%", justifyContent: "start" }}
          />
          <TypographyWithIcon
            typogerphyVariant="body2"
            typographyColor={theme.palette.primary.primary500}
            iconSrc={Paper}
            direction="row-reverse"
            label="White Paper"
            sxStack={{ width: "82%", justifyContent: "start" }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CryptoDetails;
