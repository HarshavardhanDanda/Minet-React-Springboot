import React, { useState } from "react";
import { Stack } from "@mui/material";
import Image from "../../atoms/Image";
import Left from "../../../../public/assets/icons/leftHead.svg";
import Right from "../../../../public/assets/icons/rightHead.svg";
import ButtonComponent from "../../atoms/Button";
import theme from "../../../theme";
interface CoinSliderProps {
  bitCoinButton?: {
    onClick?: (arg?: any) => void;
  };
  ethereumButton?: {
    onClick?: (arg?: any) => void;
  };
  componentHeight?: string | number;
}

const CoinSlider = (props: CoinSliderProps) => {
  const [activeButton, setActiveButton] = useState("");
  const handleBitcoinButtonClick = () => {
    setActiveButton("bitcoin");
    if (props.bitCoinButton?.onClick) {
      props.bitCoinButton.onClick();
    }
  };

  const handleEthereumButtonClick = () => {
    setActiveButton("ethereum");
    if (props.ethereumButton?.onClick) {
      props.ethereumButton.onClick();
    }
  };
  return (
    <Stack
      data-testid="coinSlider"
      direction={"row"}
      sx={{ width: "100%", height: props.componentHeight ?? "100%" }}
      alignItems={"center"}
      justifyContent={"space-around"}
    >
      <Image src={Left} width="7.8px" height="12.73px" />
      <Stack
        direction={"row"}
        sx={{ width: "92%", height: "100%" }}
        justifyContent={"space-evenly"}
        gap={"16px"}
      >
        <ButtonComponent
          data-testid="bitcoinButton"
          sx={{
            padding: "8px 16px",
            borderRadius: "4px",
            border: activeButton === "bitcoin" ? "2px solid #F7931A" : "none",
            display: "flex",
            flexGrow: "1",
          }}
          backgroundColor={"#F7931A33"}
          typographyVariant="body2"
          typographyProps={{ color: theme.palette.textColor.highEmphasis }}
          onClick={handleBitcoinButtonClick}
        >
          Bitcoin
        </ButtonComponent>
        <ButtonComponent
          sx={{
            padding: "8px 16px",
            borderRadius: "4px",
            display: "flex",
            flexGrow: "1",
          }}
          backgroundColor={"#22222233"}
          typographyVariant="body2"
          typographyProps={{ color: theme.palette.textColor.highEmphasis }}
        >
          XRP
        </ButtonComponent>
        <ButtonComponent
          sx={{
            padding: "8px 16px",
            borderRadius: "4px",
            display: "flex",
            flexGrow: "1",
          }}
          backgroundColor={"#E6007A33"}
          typographyVariant="body2"
          typographyProps={{ color: theme.palette.textColor.highEmphasis }}
        >
          Polkadot
        </ButtonComponent>
        <ButtonComponent
          data-testid="ethereumButton"
          sx={{
            padding: "8px 16px",
            borderRadius: "4px",
            border: activeButton === "ethereum" ? "2px solid #627EEA" : "none",
            display: "flex",
            flexGrow: "1",
          }}
          backgroundColor={"#627EEA33"}
          typographyVariant="body2"
          typographyProps={{ color: theme.palette.textColor.highEmphasis }}
          onClick={handleEthereumButtonClick}
        >
          Ethereum
        </ButtonComponent>
        <ButtonComponent
          sx={{
            padding: "8px 16px",
            borderRadius: "4px",
            display: "flex",
            flexGrow: "1",
          }}
          backgroundColor={"#26A17B33"}
          typographyVariant="body2"
          typographyProps={{ color: theme.palette.textColor.highEmphasis }}
        >
          Tether
        </ButtonComponent>
        <ButtonComponent
          sx={{
            padding: "8px 16px",
            borderRadius: "4px",
            display: "flex",
            flexGrow: "1",
          }}
          backgroundColor={"#19197133"}
          typographyVariant="body2"
          typographyProps={{ color: theme.palette.textColor.highEmphasis }}
        >
          Ethereum 2
        </ButtonComponent>
        <ButtonComponent
          sx={{
            padding: "8px 16px",
            borderRadius: "4px",
            display: "flex",
            flexGrow: "1",
          }}
          backgroundColor={"#DBC98433"}
          typographyVariant="body2"
          typographyProps={{ color: theme.palette.textColor.highEmphasis }}
        >
          Dodge Coin
        </ButtonComponent>
      </Stack>
      <Image src={Right} width="7.8px" height="12.73px" />
    </Stack>
  );
};

export default CoinSlider;
