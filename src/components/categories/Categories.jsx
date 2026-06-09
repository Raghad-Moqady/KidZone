import { Box, Card, Container} from '@mui/material'
import React from 'react'
import SectionTitle from '../shared/SectionTitle'
import sunIcon from '../../assets/imgs/sunIcon.svg'
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import CategoryCard from '../shared/CategoryCard';



export default function Categories() {
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

        <Box className="categoriesBox">
          <Grid container spacing={3}>
            <Grid size={{ xs: 12,sm:6,md:4,lg:3}} sx={{ overflow: "hidden", borderRadius: 50 }}>
              {/* component */}
              <Item>
                <CategoryCard content={"Baby Bottles"} />
              </Item>
            </Grid>
             <Grid size={{ xs: 12,sm:6,md:4,lg:3}} sx={{ overflow: "hidden", borderRadius: 50 }}>
              {/* component */}
              <Item>
                <CategoryCard content={"Baby Bottles"} />
              </Item>
            </Grid>
             <Grid size={{ xs: 12,sm:6,md:4,lg:3}} sx={{ overflow: "hidden", borderRadius: 50 }}>
              {/* component */}
              <Item>
                <CategoryCard content={"Baby Bottles"} />
              </Item>
            </Grid>
             <Grid size={{ xs: 12,sm:6,md:4,lg:3}} sx={{ overflow: "hidden", borderRadius: 50 }}>
              {/* component */}
              <Item>
                <CategoryCard content={"Baby Bottles"} />
              </Item>
            </Grid>
             <Grid size={{ xs: 12,sm:6,md:4,lg:3}} sx={{ overflow: "hidden", borderRadius: 50 }}>
              {/* component */}
              <Item>
                <CategoryCard content={"Baby Bottles"} />
              </Item>
            </Grid>
             <Grid size={{ xs: 12,sm:6,md:4,lg:3}} sx={{ overflow: "hidden", borderRadius: 50 }}>
              {/* component */}
              <Item>
                <CategoryCard content={"Baby Bottles"} />
              </Item>
            </Grid>
             <Grid size={{ xs: 12,sm:6,md:4,lg:3}} sx={{ overflow: "hidden", borderRadius: 50 }}>
              {/* component */}
              <Item>
                <CategoryCard content={"Baby Bottles"} />
              </Item>
            </Grid>
             <Grid size={{ xs: 12,sm:6,md:4,lg:3}} sx={{ overflow: "hidden", borderRadius: 50 }}>
              {/* component */}
              <Item>
                <CategoryCard content={"Baby Bottles"} />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
