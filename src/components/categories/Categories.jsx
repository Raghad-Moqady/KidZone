import { Box, Card, Container} from '@mui/material'
import React, { useEffect, useState } from 'react'
import SectionTitle from '../shared/SectionTitle'
import sunIcon from '../../assets/imgs/sunIcon.svg'
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import CategoryCard from '../shared/CategoryCard';
import axiosInstance from './../../Api/axiosInstance';
import Loader from '../loader/Loader.jsx';
import ErrorAlert from '../alert/errorAlert.jsx';



export default function Categories() {
const [categories,setCategories]= useState([]);
const [serverError,setServerError]=useState(null);
const [loader,setLoader]=useState(false);
  

const getCategories=async()=>{
     try{
      setLoader(true);
      const response= await axiosInstance.get(`/Categories?lang=en`);
      setCategories(response.data.categories);
     }catch(err){
      setServerError(err.message);
     }finally{
      setLoader(false);
     }
}

 useEffect(()=>{
    getCategories();
 },[]);

 if(loader){
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
        {serverError?
        <ErrorAlert message={serverError}/>
        :
          <Box className="categoriesBox">
          <Grid container spacing={3}>
            {categories.map(category=>
            <Grid key={category.id} size={{ xs: 12,sm:6,md:4,lg:3}} sx={{ overflow: "hidden", borderRadius: 50 }}>
              {/* component */}
              <Item>
                <CategoryCard content={category.name} />
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
