import { Box } from "@mui/material";
import React from "react";
import kidZonelogoForDarkBg from '../../assets/imgs/logo.png'
import kidZonelogoForLightBg from '../../assets/imgs/Logo2.png'


export default function Logo({width,theme="darkBg"}) {
  return (
    <>
   <Box sx={{ width: width }}>
        <Box
          component="img"
          sx={{
            width: "100%"
          }}
          alt="kidZone Logo"
          src={theme ==="lightBg"?kidZonelogoForLightBg :kidZonelogoForDarkBg}
        ></Box>
   </Box>
    </>
  );
}
