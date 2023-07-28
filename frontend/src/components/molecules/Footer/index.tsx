import { Grid, styled, Stack, Box } from "@mui/material";
import React from "react";
import theme from "../../../theme/index";

import TypographyComponent from "../../atoms/Typography";
import ButtonComponent from "../../atoms/Button";
import DropDownComponent from "../../atoms/dropdown";

const StyledBox = styled(Box)({
  backgroundColor: theme.palette.primary.primary100,
});

const MainContainer = styled(Grid)({
  height: "90px",
  borderTop: `1px solid ${theme.palette.greyColors.grey100}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledTypographyBlue = styled(TypographyComponent)({
  color: theme.palette.primary.primary500,
});

const StyledTypographyBlack = styled(TypographyComponent)({
  color: theme.palette.textColor.highEmphasis,
});

const StyledButton = styled(ButtonComponent)({
  width: "120px",
  height: "42px",
  border: `1px solid ${theme.palette.primary.main}`,

  "&:hover": {
    backgroundColor: theme.palette.structural.main,
  },
});

const RightContainer = styled(Grid)({
  alignItems: "flex-end",
  margin: "0px",
});

const Footer = () => {
  return (
    <StyledBox data-testid="footer">
      <MainContainer container>
        <Grid item xs={6}>
          <Stack direction="row" spacing={3}>
            <StyledTypographyBlue variant="body2" children={"Dashboard"} />
            <StyledTypographyBlue variant="body2" children={"Careers"} />
            <StyledTypographyBlue
              variant="body2"
              children={"Legal & Privacy"}
            />
            <StyledTypographyBlack variant="body2" children={"© 2021 Minet"} />
          </Stack>
        </Grid>
        <RightContainer item xs={5} justifyContent="flex-end">
          <Stack direction="row" spacing={1} justifyContent="flex-end">
            <DropDownComponent
              width="110px"
              backgroundColor={theme.palette.structural.main}
              onChange={function (arg: any): void {}}
              menuList={["English"]}
              variant={"body2"}
              fontColor={theme.palette.textColor.highEmphasis}
            />
            <StyledButton
              variant="outlined"
              children="NEED HELP"
              backgroundColor={theme.palette.structural.main}
            />
          </Stack>
        </RightContainer>
      </MainContainer>
    </StyledBox>
  );
};

export default Footer;
