
  
  import React, { useState } from "react";
  import { FormControl, Grid, MenuItem, styled, Typography } from "@mui/material";
  import Select, { SelectChangeEvent } from "@mui/material/Select";
  import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
  import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
  import theme from "../../../theme/index";
  import { DELIVERY_TYPES } from "../../../constants";
  import TypographyComponent from "../../atoms/Typography";
  
  interface DeliveryProps {
    instantTime: string;
    fee: string;
    title: string;
  }
  
  const StyledGrid = styled(Grid)({
    borderRadius: "4px",
    border: `1px solid ${theme.palette.greyColors.grey100}`,
    padding: "1.3rem",
    backgroundColor: theme.palette.structural.main,
    width: "100%",
    marginBottom:"30px",
  });
  
  const StyledMenuItem = styled(MenuItem)({
    height: 54,
  });
  
  const DeliveryDropdown: React.FC<DeliveryProps> = (props) => {
    const { instantTime, fee, title } = props;
    const [delivery, setDelivery] = useState("");
  
    const handleChange = (event: SelectChangeEvent) => {
      const selectedValue = event.target.value;
      setDelivery(selectedValue);
    };
  
    return (
      <div>
        <StyledGrid
          container
          display="flex"
          justifyContent="space-between"
          direction="column"
          width="55%"
          gap={1}
        >
          <Grid item>
            <TypographyComponent
              variant="body1"
              color={theme.palette.textColor.highEmphasis}
            >
              {title}
            </TypographyComponent>
          </Grid>
  
          <FormControl fullWidth>
            <Select
              value={delivery}
              data-testid="done"
              onChange={handleChange}
              displayEmpty
              sx={{
                height: 40,
                padding: "32px 0px 32px 3px",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: `1px solid ${theme.palette.greyColors.grey100} !important`,
                  padding: "0px",
                },
              }}
              inputProps={{ "aria-label": "Without label" }}
              IconComponent={KeyboardArrowDownIcon}
              startAdornment={
                <LocalShippingOutlinedIcon
                  sx={{ paddingRight: "0.9rem", paddingLeft: "0.9rem" }}
                />
              }
            >
              <StyledMenuItem value="">
                <Typography data-testid="dropdown">
                  <Grid container>
                    <Grid item>
                      <Grid item xs zeroMinWidth>
                        <Typography
                        variant="body2"
                          color={theme.palette.textColor.highEmphasis}
                        >
                          Instant :{instantTime} min
                        </Typography>
                      </Grid>
                      <Grid item xs zeroMinWidth>
                        <Typography
                          
                          color={theme.palette.textColor.mediumEmphasis}
                          variant="caption1"
                        >
                          Transaction fees : {fee} BTC
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Typography>
              </StyledMenuItem>
  
              {DELIVERY_TYPES.map(({ type, time, fees, values }) => (
                <MenuItem
                  key={values}
                  value={values}
                  sx={{
                    height: 54,
                    backgroundColor: "#FAFCFF",
                    paddingLeft: "40px",
                    paddingRight: "40px",
                    paddingTop: "0px",
                    paddingBottom: "0px",
                  }}
                >
                  <Grid container display="flex" justifyContent="space-between">
                    <Grid item>
                      <Typography
                        variant="body1"
                        color={theme.palette.textColor.highEmphasis}
                      >
                        {type}
                        <b>{time}</b>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        color={theme.palette.textColor.mediumEmphasis}
                        variant="caption2"
                      >
                        {type !== "None" ? `Delivery fees : ${fees} BTC` : ""}
                      </Typography>
                    </Grid>
                  </Grid>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </StyledGrid>
      </div>
    );
  };
  
  export default DeliveryDropdown;
  