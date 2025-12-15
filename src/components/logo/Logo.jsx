import { Box } from "@mui/material";
import React from "react";
import kidZonelogo from '../../assets/imgs/logo.png'

export default function Logo() {
  return (
    <>
     <Box sx={{ width: "9rem" }}>
        <Box
          component="img"
          sx={{
            width: "100%"
          }}
          alt="kidZone Logo"
          src={kidZonelogo}
        ></Box>
   </Box>
    </>
  );
}
