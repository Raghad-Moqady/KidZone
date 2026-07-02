import { Box, Card, Typography } from "@mui/material";
import React from "react";

export default function ServiceCard({ service }) {
  return (
    <Card
    variant="outlined"
      sx={{
        padding: 2,
        boxShadow: "5px 5px 5px rgba(139, 94, 60, 0.12)",
        color: "#8B5E3C",
        display: "flex",
        borderRadius:3,
        height:{sm:'10rem',md:"16rem",lg:"13rem"}
      }}
    >
        {/* icon */}
      <Box
        sx={{ width: { xs: "3rem", sm: "5rem", md: "9rem" }, marginRight: 3, marginTop:1 }}
      >
        <Box
          component="img"
          sx={{
            width: "100%",
          }}
          alt="icon"
          src={service.icon}
        ></Box>
      </Box>
        {/* content */}
      <Box>
        <Typography
          component={"h3"}
          sx={{ fontSize: { xs: "24px",sm:'21px',lg:'20px'}, fontWeight: "bold" }}
        >
          {service.title}
        </Typography>

        <Typography component={"p"} sx={{ fontSize: {xs:'15px',sm:'16px'} }}>
          {service.paragraph}
        </Typography>
      </Box>
    </Card>
  );
}
