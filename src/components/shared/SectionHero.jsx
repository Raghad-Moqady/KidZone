import { Box, Link, Typography } from "@mui/material";
import React from "react";
import image from "../../assets/imgs/categoryBG2.png";
import { Link as RouterLink } from "react-router-dom";
export default function SectionHero({ title,children }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "35vh",
          backgroundImage: `url(${image})`,
        }}
      >
        <Box sx={{ zIndex: 55, textAlign: "center" }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "30px", md: "35px" },
              color: "#8B5E3C",
              fontWeight: "bold",
              paddingBottom:1
            }}
          >
           {title}
          </Typography>
          <Link component={RouterLink} to={"/"} color="#8B5E3C">
            Home
          </Link>
          <Typography component="span" mx={1}>
            &gt;
          </Typography>
          <Typography
            variant="span"
            sx={{
              color: "#8B5E3C",
            
            }}
          >
            {title}
          </Typography>
          {children}
        
        </Box>
      </Box>
    </>
  );
}
