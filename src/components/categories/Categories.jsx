import { Box, Card, Container} from '@mui/material'
import React, { useEffect, useState } from 'react'
import SectionTitle from '../shared/SectionTitle.jsx'
import sunIcon from '../../assets/imgs/sunIcon.svg'
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import CategoryCard from '../shared/CategoryCard.jsx';
import axiosInstance from './../../Api/axiosInstance';
import Loader from '../loader/Loader.jsx';
import ErrorAlert from './../alert/ErrorAlert.jsx';
import { useQuery } from '@tanstack/react-query';
import useCategories from '../../hooks/useCategories.js';



export default function Categories() {
 
const {isLoading,isError,data} = useCategories();

 if(isLoading){
  return <Loader/>;
 }
  return (
    <>
      <Container>
        <SectionTitle title={"Categories"}>
          {/* children */}
          <Box sx={{ width: "6rem" }}>
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
        {isError?
        <ErrorAlert message={'Error'}/>
        :
          <Box className="categoriesBox">
          <Grid container spacing={3}>
            {data?.map(category=>
            <Grid key={category?.id} size={{ xs: 12,sm:6,md:4,lg:3}} sx={{ overflow: "hidden", borderRadius: 50 }}>
              {/* component */}
              <Item>
                <CategoryCard content={category?.name} />
              </Item>
            </Grid> 

            )}
          </Grid>
        </Box>
        }
      
      </Container>
    </>
  );
}
