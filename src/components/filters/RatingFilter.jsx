import React from "react";
import { Checkbox, Rating, Stack, Typography } from "@mui/material";

export default function RatingFilter({
  rating,
  setRating,
}) {

  return (
    <Stack spacing={1}>
      <Typography
        fontSize={15}
        fontWeight={600}
        color="#8B5E3C"
      >
        Rating
      </Typography>


      {[5,4,3].map((item)=>(
        <Stack 
          key={item}
          direction="row"
          alignItems="center"
          spacing={1}
        >

          <Rating
            value={item}
            readOnly
            size="small"
          />

          <Typography fontSize={13}>
            & up
          </Typography>

          <Checkbox
            checked={rating===item}
            onChange={()=>setRating(item)}
            sx={{
              color:"#8B5E3C",
              "&.Mui-checked":{
                color:"#8B5E3C"
              }
            }}
          />

        </Stack>
      ))}

    </Stack>
  );
}