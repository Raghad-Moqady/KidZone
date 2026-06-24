import { Box, keyframes, Typography } from '@mui/material'
import React from 'react'

export default function SectionTitle({title, children, childMovable=true}) {
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
  <Box sx={{marginTop:4, marginBottom:5,textAlign:'center',display:'flex',justifyContent:'center'}}>
    <Box sx={{}}>
      <Box sx={{
        display:'flex',
        justifyContent:'center',
        animation:childMovable? `${float} 2s ease-in-out infinite`:''}}>
          {children}
      </Box>
      <Typography component={'h2'}  sx={{color:'#8B5E3C', fontWeight:'bold',fontSize:{xs:'26px',sm:'27px',md:'30px'}}}>{title}</Typography>
    </Box>
  </Box>
  </>
  )
}
////