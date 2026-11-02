import React from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import SectionHero from "../../components/shared/SectionHero";
import useProducts from "../../hooks/useProducts";
import Loader from "../../components/loader/Loader.jsx";
import FilterDrower from "../../components/filteDrower/FilterDrower.jsx";


export default function Products() {
  const { id, content } = useParams();
  const { isLoading, isError, data, error } = useProducts(
    id ? `Products?categoryId=${id}&limit=6` : "Products?limit=6",
  );
  console.log(data);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Box>
        <SectionHero title={" Our Products"}>
          {id ? (
            <>
              <Typography component="span" mx={1}>
                &gt;
              </Typography>
              <Typography
                variant="span"
                sx={{
                  color: "#8B5E3C",
                  fontWeight: "bold",
                }}
              >
                {content}
              </Typography>
            </>
          ) : (
            ""
          )}
        </SectionHero>
        <Container>
          <Box sx={{ mt: 6 }}>
            <FilterDrower/>
          </Box>
        </Container>
      </Box>
    </>
  );
}
