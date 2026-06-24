import { Box, Card, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle.jsx";
import sunIcon from "../../assets/imgs/sunIcon.svg";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import CategoryCard from "../shared/CategoryCard.jsx";
import axiosInstance from "./../../Api/axiosInstance";
import Loader from "../loader/Loader.jsx";
import ErrorAlert from "./../alert/ErrorAlert.jsx";
import { useQuery } from "@tanstack/react-query";
import useCategories from "../../hooks/useCategories.js";
import categoryBg from '../../assets/imgs/categoryBG2.png'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Categories() {
  const { isLoading, isError, data } = useCategories();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Box sx={{
        display:"flex",
        alignItems:'center',
        // backgroundPositionY: '-55px',
        backgroundRepeat: 'no-repeat',
        minHeight:'50vh',
        backgroundSize: "cover" ,
        backgroundAttachment:'fixed',
        backgroundImage:`url(${categoryBg})`}}>
        
        <Container sx={{paddingBottom:3}}>
          <SectionTitle title={"Categories"}>
            {/* children */}
            <Box sx={{ width: { xs: "5rem", sm: "5.5rem", md: "6rem" } }}>
              <Box
                component="img"
                sx={{
                  width: "100%",
                }}
                alt="sun_icon"
                src={sunIcon}
              ></Box>
            </Box>
          </SectionTitle>
          {isError ? (
            <ErrorAlert message={"Error"} />
          ) : (
            //   <Box className="categoriesBox">
            //   <Grid container spacing={3}>
            //     {data?.map(category=>
            //     <Grid key={category?.id} size={{ xs: 12,sm:6,md:4,lg:3}} sx={{ overflow: "hidden", borderRadius: 50 }}>
            //       {/* component */}
            //       <Item>
            //         <CategoryCard content={category?.name} />
            //       </Item>
            //     </Grid>

            //     )}
            //   </Grid>
            // </Box>

            <Swiper
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: 500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={5000}
              spaceBetween={20}
              breakpoints={{
                0: {
                  slidesPerView: 1.5,
                },
                600: {
                  slidesPerView: 2.5,
                },
                900: {
                  slidesPerView: 3.5,
                },
                1200: {
                  slidesPerView: 4.5,
                },
              }}
            >
              {data?.map((category) => (
                <SwiperSlide key={category.id}>
                  <Box sx={{ overflow: "hidden" , borderRadius:50}}>
                    <CategoryCard content={category.name} />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Container>
      </Box>
    </>
  );
}
