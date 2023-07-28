import { MenuItem, Select, styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import theme from "../../../theme";
import IconComponent from "../../atoms/Icons";
import TypographyComponent from "../../atoms/Typography";
import ChevronDown from "../../../../public/assets/icons/chevron-down.svg";

interface DropDownComponentProps {
  onChange: (arg: any) => void;
  menuList: Array<string>;
  width: string | React.CSSProperties;
  backgroundColor?: string | React.CSSProperties;
  variant:
    | "inherit"
    | "h4"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline";
  fontColor?: string;
}

const StyledDropDown = styled(Select)(() => ({
  backgroundColor: theme.palette.structural.main,
  "& .MuiSelect-select": {
    height: "22px",
    padding: "9px 0 8px 4px !important",
  },
  "& .MuiTypography-root": {
    paddingLeft: "8px !important",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: `1px solid ${theme.palette.greyColors.grey100} !important`,
    padding: "0px",
  },
  input: {
    "&::placeholder": {
      padding: "0px !important",
      color: theme.palette.greyColors.grey500,
      fontFace: "body2",
    },
  },
}));

const StyledBox = styled(Box)(() => ({
  minWidth: "32px !important",
  height: "32px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "7px",
  marginRight: "3px",
  marginLeft: "0px",
}));
const CustomIconBox = () => {
  return (
    <StyledBox>
      <IconComponent src={ChevronDown} width="30.73px" height="26.78px" />
    </StyledBox>
  );
};

const DropDownComponent: React.FC<DropDownComponentProps> = (props) => {
  const { onChange, menuList, width, backgroundColor, variant, fontColor } =
    props;
  return (
    <StyledDropDown
      data-testid="dropDown"
      defaultValue={menuList[0]}
      onChange={(e) => onChange(e.target.value)}
      sx={{ width: width, backgroundColor: backgroundColor }}
      IconComponent={CustomIconBox}
      MenuProps={{
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left",
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left",
        },
      }}
    >
      {menuList.map((menuItem) => (
        <MenuItem key={menuItem} value={menuItem} data-testid={menuItem}>
          <TypographyComponent variant={variant} color={fontColor}>
            {menuItem}
          </TypographyComponent>
        </MenuItem>
      ))}
    </StyledDropDown>
  );
};

export default DropDownComponent;
