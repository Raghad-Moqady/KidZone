import React from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import SectionHero from "../../components/shared/SectionHero";
import useProducts from "../../hooks/useProducts";
import Loader from "../../components/loader/Loader.jsx";

//Page
export default function Products() {
  const { id, content } = useParams();

  const { isLoading, isError, data, error } = useProducts({
    categoryId: id ? id : null,
    limit: 6,
  });
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
          {/* stop hear */}
        </Container>
      </Box>
    </>
  );
}
