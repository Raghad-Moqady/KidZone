import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Link as RouterLink } from "react-router-dom";

export default function () {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: '40px' }}>
      <Card
        sx={{
          width: "70%",
          boxShadow: "0px 1px 6px -1px rgba(0, 0, 0, 0.1)",
          p: "40px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: "150px",
            height: "150px",
            backgroundColor: "#FFF1EB",
            borderRadius: 50,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FavoriteIcon sx={{ color: "#FE8A35" }} />
          <ShoppingCartOutlinedIcon
            sx={{ fontSize: "46px", color: "#8B5E3C" }}
          />
        </Box>
        <Typography component={"h2"} variant="h5" sx={{ fontWeight: "bold" }}>
          Your Cart is Empty
        </Typography>
        <Typography sx={{ color: "#51443C" }}>
          Looks like you haven't added anything to your cart yet.
        </Typography>
        <Button
          component={RouterLink}
          to={"/products"}
          endIcon={<ArrowForwardOutlinedIcon />}
          startIcon={<LocalMallOutlinedIcon />}
          sx={{
            backgroundColor: "#E47221",
            color: "white",
            borderRadius: 50,
            paddingX: "25px",
            paddingY: "12px",
            mt: "10px",
          }}
        >
          Explore Products
        </Button>
      </Card>
    </Box>
  );
}
