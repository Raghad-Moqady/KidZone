import React from "react";
import { Slider, Stack, Typography } from "@mui/material";

export default function PriceFilter({
  price,
  setPrice,
}) {

  return (
    <Stack spacing={1}>
      <Typography
        fontSize={15}
        fontWeight={600}
        color="#8B5E3C"
      >
        Price Range
      </Typography>

      <Slider
        value={price}
        onChange={(e,newValue)=>setPrice(newValue)}
        min={0}
        max={1000}
        valueLabelDisplay="auto"
        sx={{
          color:"#8B5E3C",
        }}
      />
    </Stack>
  );
}