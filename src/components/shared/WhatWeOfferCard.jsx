import { Box, Card, Typography } from '@mui/material'
import React from 'react'

export default function WhatWeOfferCard({ item }) {
  return (
     <Card
      sx={{
        padding: 2,
        boxShadow: "none",
        color: "#8B5E3C",
        display: "flex",
        borderRadius:0, 
      }}
    >
        {/* icon */}
      <Box
        sx={{ width: { xs: "8rem",sm:'6rem', md: "8rem" }, marginRight: 3, marginTop:1 }}
      >
        <Box
          component="img"
          sx={{
            width: "100%",
          }}
          alt="icon"
          src={item.icon}
        ></Box>
      </Box>
        {/* content */}
      <Box>
        <Typography
          component={"h3"}
          sx={{ fontSize: { xs: "24px",sm:'21px',lg:'20px'}, fontWeight: "bold" }}
        >
          {item.title}
        </Typography>

        <Typography component={"p"} sx={{ fontSize: {xs:'15px',sm:'16px'} }}>
          {item.paragraph}
        </Typography>
      </Box>
    </Card>
  )
}
