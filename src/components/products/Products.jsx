import React from "react";
import titleIcon from "../../assets/imgs/productsIcon.webp";
import productImg1 from "../../assets/imgs/productsImgs/product1.webp";
import productImg2 from "../../assets/imgs/productsImgs/product2.webp";
import productImg3 from "../../assets/imgs/productsImgs/product3.webp";
import productImg4 from "../../assets/imgs/productsImgs/product4.webp";

import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import SectionTitle from "../shared/SectionTitle";
import Item from "@mui/material/Grid";
import ProductCard from "../shared/ProductCard";

export default function Products() {
  return (
    <Box sx={{ paddingTop: 4 }}>
      <Container>
        <SectionTitle title={"New Arrivals"}>
          {/* children */}
          <Box sx={{ width: { xs: "5rem", sm: "5.5rem", md: "6rem" } }}>
            <Box
              component="img"
              sx={{
                width: "100%",
              }}
              alt="product_icon"
              src={titleIcon}
            ></Box>
          </Box>
        </SectionTitle>

        {/* product Cards */}
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Item>
              <ProductCard mainImage={productImg1} name="Happy Dino Toy" categoryName="Toys" status="Active" discount='0' isNew={true} price='300'/>
            </Item>
          </Grid>
           <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Item>
              <ProductCard mainImage={productImg2} name="Happy Dino Toy" categoryName="Toys" status="InActive" discount='10' isNew={true} price='100'/>
            </Item>
          </Grid>
           <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Item>
              <ProductCard mainImage={productImg3} name="Happy Dino Toy" categoryName="Toys" status="Active" discount='11' isNew={true} price='50'/>
            </Item>
          </Grid>
           <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Item>
              <ProductCard mainImage={productImg4} name="Happy Dino Toy" categoryName="Toys" status="Active" discount='50' isNew={true} price='1000'/>
            </Item>
          </Grid>
          
          
        </Grid>
      </Container>
    </Box>
  );
}
