import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Card,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputBase,
  Link,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import useProducts from "../../hooks/useProducts";
import Loader from "../../components/loader/Loader.jsx";
import { Link as RouterLink } from "react-router-dom";
import Item from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import SortIcon from "@mui/icons-material/Sort";
import ErrorAlert from "../../components/alert/ErrorAlert.jsx";
import ProductCard from "../../components/shared/ProductCard.jsx";
//Page
//معالجة حالة في حال كان عدد المنتجات 0 ايش لازم نعرض ؟
export default function Products() {
  const { id, content } = useParams();

  const { isLoading, isError, data, error } = useProducts({
    categoryId: id ? id : null,
    limit: 6,
  });

  //مؤقت
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Box
        sx={{ pt: "24px", pl: "32px", pr: "32px", pb: "72px" }}
        bgcolor="#FFF8F1"
      >
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
              fontWeight: id ? "" : "bold",
            }}
          >
            Products
          </Typography>
          {id ? (
            <>
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
                {content}
              </Typography>
            </>
          ) : (
            ""
          )}
        </Box>
        <Typography
          sx={{
            fontSize: { xs: "30px", md: "36px" },
            color: "#6F4627",
            fontWeight: "bold",
            paddingTop: "12px",
            paddingBottom: "12px",
          }}
        >
          Our Products
        </Typography>
        <Typography component="p" variant="p" color="#51443C" width="50%">
          Thoughtfully curated essentials, gentle organic apparel, and
          imagination-sparking toys crafted with love for your little ones.
        </Typography>
        <Card
          sx={{
            mt: "32px",
            mb: "32px",
            boxShadow: "0px 1px 6px -1px rgba(0, 0, 0, 0.1)",
            p: "20px 20px 20px 20px",
            borderRadius: "10px",
          }}
        >
          <Grid container spacing={2}>
            <Grid size={9}>
              <Item>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#F8F1E8",
                    borderRadius: "12px",
                    px: 2,
                    height: "48px",
                  }}
                >
                  <SearchIcon sx={{ color: "#8B5E3C" }} />

                  <InputBase
                    fullWidth
                    placeholder="Search products by name or description..."
                    sx={{
                      ml: 1.5,
                      fontSize: "14px",
                    }}
                  />

                  <IconButton size="small">
                    <CloseIcon sx={{ fontSize: 19 }} />
                  </IconButton>
                </Box>
              </Item>
            </Grid>
            <Grid size={3}>
              <Item>
                <Grid container spacing={2}>
                  <Grid size={4}>
                    <Item>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          height: "48px",
                        }}
                      >
                        <SortIcon sx={{ color: "#6F4627" }} />
                        <Typography color="#51443C">Sorted By:</Typography>
                      </Box>
                    </Item>
                  </Grid>
                  <Grid size={8}>
                    <Item>
                      {/* 
                      Price: Low to High.

                        Price: High to Low.

                        Name: A to Z.

                        Name: Z to A.

                        Highest Rated.

                        Lowest Rated. */}
                      <FormControl sx={{ width: "100%" }}>
                        <Select
                          value={age}
                          onChange={handleChange}
                          displayEmpty
                          sx={{
                            height: "48px",
                            borderRadius: "12px",
                            backgroundColor: "#F8F1E8",
                            "& .MuiOutlinedInput-notchedOutline": {
                              border: "none",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              border: "none",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              border: "none",
                            },
                          }}
                        >
                          <MenuItem value="">SortedBy</MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </Item>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
          </Grid>

          <Box sx={{ mt: "16px" }}>
            <Typography color="#51443C">ACTIVE FILTERS:</Typography>
          </Box>
        </Card>

        <Grid  container spacing={2}>
          <Grid size={2.5}>
            <Item>
              <Card
                sx={{
                 
                  boxShadow: "0px 1px 6px -1px rgba(0, 0, 0, 0.1)",
                  p: "20px 20px 20px 20px",
                  borderRadius: "10px",
                }}
              >
                filters
              </Card>
            </Item>
          </Grid>
          <Grid size={9.5}>
            <Item>
              {isError ? (
                <ErrorAlert message={error.message} />
              ) : (
                <>
                  {/* product Cards */}
                  <Grid container spacing={3}>
                    {data?.map((product) => (
                      <Grid key={product.id} size={{ xs: 12, sm: 6, md: 3 }}>
                        <Item>
                          <ProductCard product={product} />
                        </Item>
                      </Grid>
                    ))}
                  </Grid>
                </>
              )}
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
