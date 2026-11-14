import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  InputBase,
  Link,
  Typography,
} from "@mui/material";
import Item from "@mui/material/Grid";
import Logo from "../logo/Logo.jsx";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link as RouterLink } from "react-router-dom";
import useAuthStore from "../../store/authStore.js";
import TeddyImg from "../.././assets/imgs/TeddyBear.png";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

export default function Footer() {
  const userAccessToken = useAuthStore((state) => state.userAccessToken);

  return (
    <Box
      sx={{
        backgroundColor: "#604D33",
        padding: "40px 56px 40px 56px",
      }}
    >
      <Grid container spacing={3} sx={{ paddingBottom: "40px" }}>
        <Grid size={4}>
          <Item>
            <Logo width={"8rem"} />
            <Typography
              sx={{ marginTop: "16px", color: "#DDC2A2", fontSize: "16px" }}
            >
              A nurturing boutique destination curating organic, safe, and
              thoughtfully crafted essentials for gentle beginnings and
              childhood wonders.
            </Typography>
            <Box
              sx={{
                marginTop: "16px",
                display: "flex",
                justifyContent: "start",
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  backgroundColor: "#7A654A",
                  padding: "6px 15px 6px 15px",
                  borderRadius: "50px",
                  color: "#FADEBC",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FavoriteBorderOutlinedIcon sx={{ marginRight: "6px" }} />
                Pure & Gentle
              </Typography>
              <Typography
                sx={{
                  backgroundColor: "#7A654A",
                  padding: "6px 15px 6px 15px",
                  borderRadius: "50px",
                  color: "#FADEBC",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <SecurityOutlinedIcon sx={{ marginRight: "6px" }} /> Certified
                Safe
              </Typography>
            </Box>
          </Item>
        </Grid>
        <Grid size={2}>
          <Item>
            <Typography sx={{ color: "#FFF8F1", fontSize: "18px" }}>
              Discover
            </Typography>
            <Box>
              <Link
                sx={{
                  display: "block",
                  width: "fit-content",
                  color: "#DDC2A2",
                  marginTop: "16px",
                }}
                underline="none"
                component={RouterLink}
                to={"/"}
              >
                Home
              </Link>
              <Link
                sx={{
                  display: "block",
                  width: "fit-content",
                  color: "#DDC2A2",
                  marginTop: "10px",
                }}
                underline="none"
                component={RouterLink}
                to={"/about"}
              >
                About us
              </Link>
              <Link
                sx={{
                  display: "block",
                  width: "fit-content",
                  color: "#DDC2A2",
                  marginTop: "10px",
                }}
                underline="none"
                component={RouterLink}
                to={"/products"}
              >
                Our Products
              </Link>
              {userAccessToken ? (
                <Link
                  sx={{
                    display: "block",
                    width: "fit-content",
                    color: "#DDC2A2",
                    marginTop: "10px",
                  }}
                  underline="none"
                  component={RouterLink}
                  to={"/cart"}
                >
                  Cart
                </Link>
              ) : (
                ""
              )}
            </Box>
          </Item>
        </Grid>
        <Grid size={4}>
          <Item>
            <Typography sx={{ color: "#FFF8F1", fontSize: "18px" }}>
              Join Our Village
            </Typography>
            <Typography
              sx={{ marginTop: "16px", color: "#DDC2A2", fontSize: "16px" }}
            >
              Subscribe for warm updates, seasonal arrivals, and mindful
              parenting inspirations.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                marginTop: "16px",
              }}
            >
              <InputBase
                fullWidth
                placeholder="Enter your warm email..."
                sx={{
                  backgroundColor: "#FFF8F1",
                  padding: "10px 16px 10px 16px",
                  borderRadius: "50px",
                  fontSize: "14px",
                }}
              />
              <Button
                endIcon={<SendOutlinedIcon />}
                sx={{
                  backgroundColor: "#E47221",
                  padding: "10px 30px 10px 30px",
                  borderRadius: "50px",
                  fontSize: "14px",
                  color: "#FFF8F1",
                  marginLeft: "4px",
                }}
              >
                {" "}
                Join
              </Button>
            </Box>
          </Item>
        </Grid>
        <Grid size={2}>
          <Item sx={{ display: "flex", justifyContent: "end" }}>
            <Box sx={{ width: "12rem" }}>
              <Box
                component="img"
                sx={{
                  width: "100%",
                }}
                alt="TeddyBear"
                src={TeddyImg}
              ></Box>
            </Box>
          </Item>
        </Grid>
      </Grid>
      <Divider
        sx={{
          borderColor: "#ddc4a284",
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "24px",
        }}
      >
        <Typography sx={{ color: "#DDC2A2" }}>
          © 2026 KidZone Store. All rights reserved. | Developed by Eng. Raghad
          Moqady.
        </Typography>
        <Box sx={{ display: "flex", gap: "24px" }}>
          <Typography sx={{ color: "#DDC2A2" }}>Privacy Policy</Typography>
          <Typography sx={{ color: "#DDC2A2" }}>Terms of Service</Typography>
          <Typography sx={{ color: "#DDC2A2" }}>Accessibility</Typography>
        </Box>
      </Box>
    </Box>
  );
}
