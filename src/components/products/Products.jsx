import React from "react";
import titleIcon from "../../assets/imgs/productsIcon.webp";

import {
  Box,
  Button,
  Container,
  Grid,
} from "@mui/material";
import SectionTitle from "../shared/SectionTitle";
import Item from "@mui/material/Grid";
import ProductCard from "../shared/ProductCard";
import Loader from "../loader/Loader.jsx";
import ErrorAlert from "../alert/ErrorAlert.jsx";
import { Link as RouterLink } from "react-router-dom";
import useProducts from "../../hooks/useProducts.js";

//Home
export default function Products() {
 const { isLoading, isError, data, error } = useProducts();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Box sx={{ paddingTop: 4,marginBottom:'50px' }}>
      <Container>
        <SectionTitle title={"Our Products"}>
          {/* children */}
          <Box sx={{ width: { xs: "4rem", sm: "5rem" } }}>
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
        {isError ? (
          <ErrorAlert message={error.message} />
        ) : (
          <>
            {/* product Cards */}
            <Grid container spacing={3}>
              {data.response.data?.map((product) => (
                <Grid key={product.id} size={{ xs: 12, sm: 6, md: 3 }}>
                  <Item>
                    <ProductCard product={product} />
                  </Item>
                </Grid>
              ))}
            </Grid>

            {/* Show All Products Button */}
            <Box sx={{ textAlign: "center", marginTop: 4 }}>
              <Button
                variant="contained"
                component={RouterLink}
                to={'/products'}
                sx={{
                  fontSize: { xs: "14px", sm: "16px" },
                  fontWeight: "bold",
                  backgroundColor: "white",
                  border: 1,
                  borderColor: "#E47221",
                  color: "#E47221",
                  px: 7,
                  py: 1,
                  borderRadius: 50,
                  boxShadow: 0,
                  transition: " .8s ease",
                  "&:hover": {
                    backgroundColor: "#E47221",
                    color: "white",
                  },
                }}
              >
                More Products
              </Button>
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
}
