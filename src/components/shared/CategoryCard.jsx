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
          backgroundColor: "#e6cd3b61",
          boxShadow: 0,
          color: "#8B5E3C",
          fontSize: "24px",
          transition: " 0.6s ease",
          textAlign:'center',

          "&:hover": {
            backgroundColor: "#e6cc3bbc",
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
