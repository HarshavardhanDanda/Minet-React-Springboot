import { Box, Slider, SliderProps} from "@mui/material";
import React from "react";


export const SliderBar = (props: SliderProps) => {
  return (
  <Box>
     <Slider {...props} orientation="vertical" />
  </Box>
  )
};