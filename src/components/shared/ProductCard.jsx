import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { Link as RouterLink } from "react-router-dom";
import useAddToCart from "../../hooks/useAddToCart.js";

export default function ProductCard({ product }) {
  const { AddToCartMutation } = useAddToCart();
  const addToCart = () => {
     AddToCartMutation.mutate({
      productId: product.id
    });
  }
  return (
    <Card
      variant="outlined"
      sx={{
        // backgroundColor: 'white',
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: "5px 5px 5px rgba(139, 94, 60, 0.12)",
        backgroundColor: "#FFFDF8",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-6px)",
        },
      }}
    >
      {/* img Card*/}
      <Card
        sx={{
          margin: 2,
          boxShadow: "none",
          backgroundColor: "inherit",
          position: "relative",
          border: 1,
          borderRadius: 4,
          borderColor: "#E47221",
          height: 220,
        }}
      >
        {/* image */}
        <CardMedia
          component="img"
          sx={{ height: "100%", objectFit: "cover" }}
          image={product.mainImage}
          title={product.name}
        />

        {/* Discount Badge */}
        {product.discount > 0 && (
          <Chip
            label={`-${product.discount} %`}
            size="small"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              backgroundColor: "#6aa385",
              color: "#fff",
              fontWeight: "bold",
              borderRadius: 0,
            }}
          />
        )}

        {/* status */}
        <Box
          sx={{
            position: "absolute",
            top: 25,
            right: -35,
            width: 140,
            textAlign: "center",
            backgroundColor:
              product.status === "Active" && product.quantity > 0
                ? "#4CAF50"
                : "red",
            color: "#fff",
            fontWeight: "bold",
            fontSize: 13,
            py: 0.5,
            transform: "rotate(45deg)",
            boxShadow: "0 4px 10px rgba(0,0,0,.2)",
          }}
        >
          {product.status === "Active" && product.quantity > 0
            ? "Available"
            : product.status === "Active" && product.quantity === 0
              ? "Out of Stock"
              : product.status === "InActive"
                ? "Unavailable"
                : ""}
        </Box>
      </Card>
      {/* content */}
      <CardContent>
        <Typography variant="body2" component="span" sx={{ color: "gray" }}>
          {product.categoryName}
        </Typography>
        <Typography
          gutterBottom
          component="div"
          sx={{
            fontSize: { xs: "24px", sm: "21px", lg: "20px" },
            fontWeight: "bold",
            color: "#8B5E3C",
          }}
        >
          {product.name}
        </Typography>
        <Rating
          name="read-only"
          value={product?.rate ?? 0}
          readOnly
          precision={0.1}
        />
        <Typography
          gutterBottom
          component="div"
          sx={{
            fontSize: { xs: "24px", sm: "21px", lg: "20px" },
            fontWeight: "bold",
            color: "#6aa385",
          }}
        >
          ${product.price}
        </Typography>
      </CardContent>
      {/* links */}
      <CardActions sx={{ justifyContent: "space-between", paddingBottom: 3 }}>
        <Button
          component={RouterLink}
          variant="contained"
          endIcon={<ReadMoreIcon />}
          to={`/products/${product.id}`}
          sx={{
            fontSize: { xs: "14px", sm: "16px" },
            backgroundColor: "#E47221",
            width: "90%",
            borderRadius: 50,
            boxShadow: 0,
          }}
        >
          Details
        </Button>
        <Button
          onClick={addToCart}
          disabled={product.status !== "Active" || product.quantity <= 0}
          size="large"
          sx={{
            color: "#E47221",
            borderRadius: 50,
            backgroundColor: "whitesmoke",
          }}
        >
          <AddShoppingCartIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
