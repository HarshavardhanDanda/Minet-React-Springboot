import React from "react";

import Image from "../../atoms/Image";
import SearchIcon from "../../../../public/assets/Images/Search.svg";
import CloseIcon from "../../../../public/assets/Images/Close.svg";
import { Grid, SxProps } from "@mui/material";
import { Theme } from "@emotion/react";
import TextField from "../../atoms/TextField";
interface SerchBoxProps {
  value?: string;
  searchIconSize?: string;
  closeIconSize?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onCloseAction?: () => void;
  sxSearchbox?: SxProps<Theme>;
}

const SearchBox = (props: SerchBoxProps) => {
  const defaultProps: SerchBoxProps = {
    searchIconSize: "20.31px",
    closeIconSize: "12.73px",
    ...props,
  };
  const sxSearchbox: SxProps<Theme> = {
    ".MuiOutlinedInput-root": {
      width: "230px",
      height: "40px",
      boxSizing: "border-box",
      paddingTop: "9px",
      paddingBottom: "9px",
      paddingRight: "13px",
      border: "1px solid #E8E8F7;",
      borderRadius: "4px",
    },
    "	.Mui-focused": {
      border: "1px solid #0052FF",
    },
  };
  return (
    <TextField
      placeholder="Search all assets"
      value={defaultProps.value}
      onChange={defaultProps.onChange}
      sx={defaultProps.sxSearchbox ?? sxSearchbox}
      endAdornment={
        defaultProps.value === "" ? (
          <Image
            src={SearchIcon}
            width={defaultProps.searchIconSize!}
            height={defaultProps.searchIconSize!}
          />
        ) : (
          <Grid onClick={defaultProps.onCloseAction} sx={{ cursor: "pointer" }}>
            <Image
              src={CloseIcon}
              width={defaultProps.closeIconSize!}
              height={defaultProps.closeIconSize!}
            />
          </Grid>
        )
      }
    />
  );
};

export default SearchBox;
