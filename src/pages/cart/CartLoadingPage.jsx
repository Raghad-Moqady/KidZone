import { Box, Card, Grid, IconButton, Link, Skeleton, Typography } from "@mui/material";
import React from "react";
import Item from "@mui/material/Grid";

import { Link as RouterLink } from "react-router-dom";
export default function CartLoadingPage() {
  return (
    <Box
      sx={{ pt: "24px", pl: "32px", pr: "32px", pb: "40px" }}
      bgcolor="#FFF8F1"
    >
      {/* Links */}
      <Box>
        <Link component={RouterLink} variant="h6" to={"/"} color="#8B5E3C">
          Home
        </Link>
        <Typography component="span" variant="h6" mx={1}>
          /
        </Typography>

        <Typography
          component="span"
          variant="h6"
          sx={{
            color: "#8B5E3C",
            fontWeight: "bold",
          }}
        >
          Cart
        </Typography>
      </Box>
      <Box sx={{ pt: "16px", pb: "24px" }}>
        {/* Box 1 */}

        <Skeleton variant="text" width={"70%"} sx={{ fontSize: "2rem" }} />

        {/* Box 3 */}
        <Grid container spacing={2} sx={{ mt: "17px" }}>
          <Grid size={9}>
            <Item>
              {Array.from({ length: 3 }).map((_, index) => (
                <Card
                  key={index}
                  sx={{
                    boxShadow: "0px 1px 6px -1px rgba(0, 0, 0, 0.1)",
                    p: "20px 20px 20px 20px",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <Box sx={{ display: "flex", gap: 4 }}>
                    {/* img */}
                    <Skeleton
                      variant="rectangular"
                      width={"150px"}
                      height={"150px"}
                    />

                    {/* Product Info */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                        justifyContent: "space-between",
                      }}
                    >
                      <Skeleton
                        variant="text"
                        width={"100px"}
                        sx={{ fontSize: "2rem" }}
                      />

                      <Skeleton
                        variant="text"
                        width={"300px"}
                        sx={{ fontSize: "2rem" }}
                      />

                      <Skeleton
                        variant="text"
                        width={"50px"}
                        sx={{ fontSize: "2rem" }}
                      />

                      {/* Quantity */}
                      <Skeleton
                        variant="text"
                        width={"50%"}
                        sx={{ fontSize: "2rem" }}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "end",
                    }}
                  >
                    <Skeleton
                      variant="circular"
                      width={"40px"}
                      height={"40px"}
                      sx={{ fontSize: "2rem" }}
                    />

                    <Skeleton
                      variant="text"
                      width={"100px"}
                      sx={{ fontSize: "2rem" }}
                    />
                  </Box>
                </Card>
              ))}
            </Item>
          </Grid>
          <Grid size={3}>
            <Item>
              <Skeleton variant="rectangular" width={"100%"} height={300} />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
