import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import errorImg from "../../assets/imgs/404-error-page.png";

export default function NotFound() {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        bgcolor: "#F8F8F8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        px: 2,
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          maxWidth: 600,
        }}
      >
        <Box
          component="img"
          src={errorImg}
          alt="404 Not Found"
          sx={{
            width: {
              xs: "85%",
              sm: "65%",
              md: "55%",
            },
            mb: 3,
          }}
        />

        <Typography
          variant="h2"
          fontWeight="bold"
          color="#E47221"
        >
          404
        </Typography>

        <Typography
          variant="h5"
          fontWeight={600}
          mt={1}
        >
          Oops! Page Not Found
        </Typography>

        <Typography
          color="text.secondary"
          mt={2}
          mb={4}
        >
          The page you're looking for doesn't exist or has been moved.
        </Typography>

        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{
            bgcolor: "#E47221",
            borderRadius: "30px",
            px: 4,
            py: 1.2,
            "&:hover": {
              bgcolor: "#cf6418",
            },
          }}
        >
          Back to Home
        </Button>
      </Box>
    </Box>
  );
}