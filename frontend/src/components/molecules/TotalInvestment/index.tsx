import React from "react";
import { Stack, styled } from "@mui/material";
import Typography from "../../atoms/Typography";
import theme from "../../../theme";
import DownwardArrow from "../../../../public/assets/icons/DownwardArrow.svg"
import UpwardArrow from "../../../../public/assets/icons/UpwardArrow.svg"
import Image from "../../atoms/Image"

const StyledTypographyUpward = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.success500,
}));

const StyledTypographyDownWard = styled(Typography)(({ theme }) => ({
  color: "#B71A33",
}));

export interface TotalInvestmentProps {
  title: string;
  value: string;
  changePercentage: string;
}

const TotalInvestment = ({
  title,
  value,
  changePercentage,
}: TotalInvestmentProps) => {
  return (
    <>
      <Stack spacing={"12px"}>
        <Stack direction="row" spacing={"11.5px"}>
          <Typography color={theme.palette.textColor.mediumEmphasis} variant="caption1">{title}</Typography>
          <Stack direction="row" alignItems="center" spacing={"7.48px"} >
            {changePercentage.includes("-") ? (
              < >
                <Image src={DownwardArrow} width="9.02px" height="9.02px"/>
                <StyledTypographyDownWard variant="overline" color="#B71A33">
                  {changePercentage}
                </StyledTypographyDownWard>
              </>
            ) : (
              <>
                <Image src={UpwardArrow} width="9.02px" height="9.02px"/>
                <StyledTypographyUpward variant="overline" color={theme.palette.primary.success500}>
                  {changePercentage}
                </StyledTypographyUpward>
              </>
            )}
          </Stack>
        </Stack>
        <Typography variant="h6" color={theme.palette.textColor.highEmphasis}>{value}</Typography>
      </Stack>
    </>
  );
};
export default TotalInvestment;