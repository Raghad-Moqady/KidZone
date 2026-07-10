import { Box, Card, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle.jsx";
import Icon from "../../assets/imgs/categoryIcon.png";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import CategoryCard from "../shared/CategoryCard.jsx";
import axiosInstance from "./../../Api/axiosInstance";
import Loader from "../loader/Loader.jsx";
import ErrorAlert from "./../alert/ErrorAlert.jsx";
import useCategories from "../../hooks/useCategories.js";
import categoryBg from '../../assets/imgs/categoriesImg.png'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Categories() {
  const { isLoading, isError, data ,error} = useCategories();

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
        minHeight:'60vh',
        backgroundSize: "cover" ,
        backgroundAttachment:'fixed',
        backgroundImage:`url(${categoryBg})`,
        "&::before": {
      content: '""',
      position: "absolute",
      right:0,left:0,
      minHeight:'60vh',
      backgroundColor: {
        xs: "#17161662",
     
      },
      backdropFilter: {
        xs:"blur(2px)",
        
      }, 
      
        }}}>
        
        <Container sx={{paddingBottom:3,zIndex:4}}>
          <SectionTitle title={"Categories"} color={"white"}>
            {/* children */}
            <Box sx={{ width: { xs: "4rem", sm: "5rem" } }}>
              <Box
                component="img"
                sx={{
                  width: "100%",
                }}
                alt="Icon"
                src={Icon}
              ></Box>
            </Box>
          </SectionTitle>
          {isError ? (
            <ErrorAlert message={error.message} />
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
