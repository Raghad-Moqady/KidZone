import { Box, Container, Grid, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import mainImg from '../../assets/imgs/WhatCanWeOffer.avif'
import icon1 from '../../assets/imgs/icon-check1.avif'
import icon2 from '../../assets/imgs/icon-check2.avif'
import icon3 from '../../assets/imgs/icon-check3.avif'

import SectionTitle from '../shared/SectionTitle'
import  Item  from '@mui/material/Grid';
import WhatWeOfferCard from '../shared/WhatWeOfferCard'
 

export default function WhatWeOffer() {
  const items= [
      {
        icon: icon1,
        title: "Kids’ Clothing",
        paragraph:
          "Discover our comfy kids' clothing, made from soft, breathable fabrics. Featuring vibrant colors and fun patterns, our outfits are perfect for every adventure and allow little ones to play freely!",
      },
      {
        icon: icon2,
        title: "Toys and Games",
        paragraph:
          "Explore our diverse toys and games collection! Designed to inspire creativity and learning, each item promises endless fun and entertainment for kids of all ages.",
      },
      {
        icon: icon3,
        title: "Baby Essentials and gift",
        paragraph:
          "From soft blankets to practical feeding items, each product combines comfort and functionality, making them perfect for new parents and delightful gifts for any occasion.",
      },
    ];
  return (
    <Box sx={{paddingTop:4}}>
      <Grid sx={{alignItems:'center'}} container spacing={0}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Item >
            <Box
              component="img"
              sx={{
                width: "100%",
              }}
              alt="WhatWeOffer_img"
              src={mainImg}
            ></Box>
          </Item>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Item>
            <Container>
            <SectionTitle title={"What Can We offer"} childMovable={false}>
              {/* children */}
              <Typography
                sx={{
                  color: "#8B5E3C",
                  fontSize: '16px',
                }}
              >
                KID GIFT CARDS
              </Typography>
            </SectionTitle>
            {items.map(item=>
            <Fragment key={item.title}>
              <WhatWeOfferCard item={item}/>
            </Fragment>
            )}
            </Container>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
