import { Box, Container, Typography } from "@mui/material";
import React from "react";
import SectionTitle from "../shared/SectionTitle";
import aboutUsImg from "../../assets/imgs/aboutUsImg.avif";
export default function AboutUs() {
  return (
    <>
      <Box sx={{ width: { xs: "0rem", sm: "5.5rem",md:"6rem" }, position: "absolute",mt:1 }}>
        <Box
          component="img"
          sx={{
            width: "100%",
          }}
          alt="aboutUs_img"
          src={aboutUsImg}
        ></Box>
      </Box>
      <Box sx={{ paddingBottom: 7, paddingTop: 4 }}>
        <Container>
          <SectionTitle
            title={"Inspiring Kids' Creativity"}
            childMovable={false}
          >
            {/* children */}
            <Typography
              sx={{
                color: "#8B5E3C",
                fontSize: '16px',
              }}
            >
              About us
            </Typography>
          </SectionTitle>
          <Typography
            component={"p"}
            sx={{
              textAlign: "center",
              color: "#8B5E3C",
              fontSize: { xs: "16px", sm: "19px", md: "21px" },
            }}
          >
            Choosing the right clothes and toys for our little ones goes beyond
            style. It’s about nurturing their growth and sparking their
            imagination. Every outfit and toy can inspire creativity and build
            confidence, making each moment of childhood truly magical. Endless
            possibilities await as they explore their world, learn through play,
            and express themselves freely. By providing thoughtful choices, we
            empower them to dream big and discover their unique passions.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
