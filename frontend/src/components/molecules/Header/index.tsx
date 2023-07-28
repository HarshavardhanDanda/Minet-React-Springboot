import { Box, Divider, Grid, styled } from "@mui/material";
import React from "react";
import theme from "../../../theme";

import TypographyComponent from "../../atoms/Typography";
import ButtonComponent from "../../atoms/Button";
import AvatarDropdown from "../AvatarDropdown";

export interface IHeaderProps {
  pageName: string;
  displayButtons: boolean;
  onSell?: React.MouseEventHandler<HTMLButtonElement>;
  onBuy? :React.MouseEventHandler<HTMLButtonElement>;
}

const CustomBox = styled(Box)({
  padding: "20px 24px 20px 24px",
  width: "97%",
  borderBottom: `1px solid ${theme.palette.greyColors.grey100}`,
});

const CustomButton = styled(ButtonComponent)({
  borderRadius: "4px",
  padding: "0px 16px 0px 16px",
  width: "120px",
  height: "42px",
});

const StyledTypographyComponent = styled(TypographyComponent)({
  paddingTop: "4.5px",
});

const Header: React.FC<IHeaderProps> = ({
  pageName,
  displayButtons,
  onSell,
  onBuy,
}: IHeaderProps) => {
  return (
    <CustomBox data-testid="Header">
      <Grid container>
        <Grid item xs={6}>
          <StyledTypographyComponent
            variant="h6"
            width="122px"
            height="34px"
            color="textColor.highEmphasis"
          >
            {pageName}
          </StyledTypographyComponent>
        </Grid>

        <Grid
          item
          container
          wrap="nowrap"
          xs={6}
          justifyContent="flex-end"
          columnGap={2}
        >
          {displayButtons && (
            <Grid display="flex" alignItems="row" gap="12px">
              <Grid item>
                <CustomButton
                  typographyProps={{ color: theme.palette.structural.main }}
                  children={"SELL"}
                  onClick={onSell}
                  backgroundColor={theme.palette.primary.warning300}
                />
              </Grid>

              <Grid item>
                <CustomButton
                  variant="contained"
                  backgroundColor={theme.palette.primary.primary500}
                  children={"BUY"}
                  onClick={onBuy}
                />
              </Grid>
            </Grid>
          )}
          <Divider orientation="vertical" variant="middle" flexItem />
          <Grid item display="flex" alignItems="center" gap="10px">
            <AvatarDropdown />
          </Grid>
        </Grid>
      </Grid>
    </CustomBox>
  );
};

export default Header;
