import { Stack } from '@mui/material'
import React from 'react'
import TypographyComponent from '../../atoms/Typography'
import theme from '../../../theme';
import IconComponent from '../../atoms/Icons';
import chart from '../../../../public/assets/icons/chart.svg'
import bluegraph from "../../../../public/assets/icons/bluegraph.svg";

const PortfolioHeader = () => {
  return (
    <Stack width={"100%"} direction={"row"} justifyContent={"space-between"}>
      <TypographyComponent
        variant="subtitle1"
        color={theme.palette.textColor.highEmphasis}
      >
        My portfolio value
      </TypographyComponent>
      <Stack direction={"row"}>
        <IconComponent src={chart} />
        <IconComponent src={bluegraph} />
      </Stack>
    </Stack>
  );
}

export default PortfolioHeader
