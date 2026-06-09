import { Card, Link } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

export default function CategoryCard({content}) {
  return (
    <>
     <Link underline="none" component={RouterLink} to={'/route'}>
      <Card
        sx={{
          paddingX: 6,
          paddingY: 3,
          borderRadius: 50,
          backgroundColor: "#EFE1D3",
          boxShadow: 0,
          color: "#8B5E3C",
          fontSize: "24px",
          transition: " 0.6s ease",
          textAlign:'center',

          "&:hover": {
            backgroundColor: "#8b5e3c52",
            cursor: "pointer",
            transform: "scale(1.1)",
          },
        }}
      >
        {content}
      </Card> 
     </Link>
    </>
  );
}
