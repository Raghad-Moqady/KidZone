import { Card, Link } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

export default function CategoryCard({content}) {
  return (
    <>
     <Link underline="none" component={RouterLink} to={'/route'}>
      <Card
        sx={{
          overflow: "hidden",
          paddingY: 3,
          paddingX:1,
          
          boxShadow:'none',
          backgroundColor:"white",
          color: "#8B5E3C",
          fontSize: {xs:'21px',md:'22px'},
          transition: " 0.6s ease",
          textAlign:'center',

          "&:hover": {
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
