import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Alert,
  Box,
  Card,
  FormControl,
  Grid,
  IconButton,
  InputBase,
  Link,
  MenuItem,
  Select,
  Skeleton,
  Typography,
} from "@mui/material";
import useProducts from "../../hooks/useProducts";
import { Link as RouterLink } from "react-router-dom";
import Item from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import SortIcon from "@mui/icons-material/Sort";
import ErrorAlert from "../../components/alert/ErrorAlert.jsx";
import ProductCard from "../../components/shared/ProductCard.jsx";
import TuneIcon from "@mui/icons-material/Tune";
//Page
export default function Products() {
  const { id, content } = useParams();
  const [searchInput, setSearchInput] = useState("");
  const [sortValue, setSortValue] = useState("default");
  const sortOptions = {
    default: { sortBy: null, asc: true },
    priceAsc: { sortBy: "price", asc: true },
    priceDesc: { sortBy: "price", asc: false },
    nameAsc: { sortBy: "name", asc: true },
    nameDesc: { sortBy: "name", asc: false },
    rateDesc: { sortBy: "rate", asc: false },
    rateAsc: { sortBy: "rate", asc: true },
  };
  const handelSortChange = (e) => {
    setSortValue(e.target.value);
    setActiveFilters((prev) => ({
      ...prev,
      sortBy: sortOptions[e.target.value].sortBy,
      asc: sortOptions[e.target.value].asc,
      page: 1,
    }));
  };
  const [activeFilters, setActiveFilters] = useState({
    lang: "en",
    search: "",
    categoryId: id ? Number(id) : null,
    minPrice: null,
    maxPrice: null,
    sortBy: null,
    asc: true,
    page: 1,
    limit: 6,
  });
  const { isLoading, isError, data, error } = useProducts(activeFilters);

  // لحل مشكلة الدخول اولا على هذه الصفحة من خلال تصنيف معين ثم الانتقال الى نفس الصقحة من خلال البروداكت الموجودة بالنافبار لان بدون هاد الكود ما رح يحدَث البيانات
  useEffect(() => {
    setActiveFilters((prev) => ({
      ...prev,
      categoryId: id ? Number(id) : null,
      page: 1,
    }));
  }, [id]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveFilters((prev) => ({
        ...prev,
        search: searchInput.trim(),
        page: 1,
      }));
    }, 700);

    return () => clearTimeout(timer);
  }, [searchInput]);

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
                  <SearchIcon
                    sx={{
                      color:
                        isLoading || data?.response.data.length == 0
                          ? "#8b5e3c7e"
                          : "#8B5E3C",
                    }}
                  />

                  <InputBase
                    value={searchInput}
                    onChange={(e) => {
                      setSearchInput(e.target.value);
                    }}
                    fullWidth
                    placeholder="Search products by name or description..."
                    sx={{
                      ml: 1.5,
                      fontSize: "14px",
                    }}
                  />

                  <IconButton
                    disabled={searchInput == ""}
                    size="small"
                    onClick={() => {
                      setSearchInput("");
                    }}
                  >
                    <CloseIcon
                      sx={{
                        fontSize: 19,
                        color: searchInput == "" ? "#8b5e3c7e" : "#8b5e3c",
                      }}
                    />
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
                      <FormControl sx={{ width: "100%" }}>
                        <Select
                          value={sortValue}
                          onChange={handelSortChange}
                          displayEmpty
                          disabled={
                            isLoading || data?.response.data.length == 0
                          }
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
                          }}
                        >
                          <MenuItem value="default">Default sorting</MenuItem>
                          <MenuItem value="priceAsc">
                            Price: Low to High
                          </MenuItem>
                          <MenuItem value="priceDesc">
                            Price: High to Low
                          </MenuItem>
                          <MenuItem value="nameAsc">Name: A to Z</MenuItem>
                          <MenuItem value="nameDesc">Name: Z to A</MenuItem>
                          <MenuItem value="rateDesc">Highest Rated</MenuItem>
                          <MenuItem value="rateAsc">Lowest Rated</MenuItem>
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

        <Grid container spacing={2}>
          {/* filters */}
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
          {/* show all products */}
          <Grid size={9.5}>
            <Item>
              {isLoading ? (
                <Grid container spacing={3}>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                      <Skeleton
                        variant="rounded"
                        animation="wave"
                        height={300}
                      />
                    </Grid>
                  ))}
                </Grid>
              ) : isError ? (
                <ErrorAlert message={error?.message} />
              ) : data.response.data.length == 0 ? (
                <Alert
                  severity="info"
                  sx={{
                    margin: "auto",
                    width: "80%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Data Not Found!
                </Alert>
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
                </>
              )}
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
