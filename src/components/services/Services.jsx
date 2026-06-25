import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Item from "@mui/material/Grid";
import ServiceCard from "../shared/ServiceCard.jsx";
import icon1 from "../../assets/imgs/icon1.svg";
import icon2 from "../../assets/imgs/icon2.svg";
import icon3 from "../../assets/imgs/icon3.svg";
import icon4 from "../../assets/imgs/icon4.svg";
import SectionTitle from "./../shared/SectionTitle";
import serviceIcon from "../../assets/imgs/serviceIcon.svg";
export default function Services() {
  const services = [
    {
      icon: icon1,
      title: "Free Shipping",
      paragraph:
        "Free shipping on all orders! Enjoy hassle-free delivery straight to your door.",
    },
    {
      icon: icon2,
      title: "Secured Payments",
      paragraph:
        "Shop safely! Our system protects your information for a smooth checkout experience.",
    },
    {
      icon: icon3,
      title: "Return Policy",
      paragraph:
        "Easy returns! Return items within 30 days for a refund or exchange. Satisfaction matters!",
    },
    {
      icon: icon4,
      title: "Online Support",
      paragraph:
        "We're here to help! Contact our support team 24/7 for assistance. Your satisfaction is!",
    },
  ];
  return (
    <Box sx={{ }}>
      <Container>
        <SectionTitle title={"Services"}>
          {/* children */}
          <Box sx={{ width: { xs: "5rem", sm: "5.5rem", md: "6rem" } }}>
            <Box
              component="img"
              sx={{
                width: "100%",
              }}
              alt="service_icon"
              src={serviceIcon}
            ></Box>
          </Box>
        </SectionTitle>
        <Grid container spacing={2}>
          {services.map((service) => (
            <Grid key={service.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Item>
                <ServiceCard service={service} />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
