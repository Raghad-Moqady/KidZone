import { Box, keyframes, Typography } from '@mui/material'
import React from 'react'

export default function SectionTitle({title, children, childMovable=true,color="#8B5E3C"}) {
 const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
`;
  return (
  <>
  <Box sx={{marginTop:4, marginBottom:5,display:'flex',justifyContent:'center'}}>
    <Box >
      <Box sx={{
        display:'flex',
        justifyContent:'center',
        animation:childMovable? `${float} 2s ease-in-out infinite`:''}}>
          {children}
      </Box>
      <Typography component={'h2'}  sx={{color:{color}, fontWeight:'bold',fontSize:{xs:'26px',sm:'27px',md:'30px',textAlign:'center',letterSpacing:5}}}>{title}</Typography>
    </Box>
  </Box>
  </>
  )
}
