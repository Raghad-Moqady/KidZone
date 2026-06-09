import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import heroImg from '../../assets/imgs/heroImg2.png'
import SendIcon  from '@mui/icons-material/Send';
import Logo from './../logo/Logo.jsx';

export default function Hero() {
  return (
     <Box sx={{
      backgroundImage:`url(${heroImg})`,
      minHeight: "80vh",
      backgroundSize: "cover" ,
      backgroundPosition:{xs:'right',sm:'top'},
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      display:'flex', alignItems:'center', justifyContent:{xs:'center',sm:'unset'},
        "&::before": {
      content: '""',
      position: "absolute",
      right:0,left:0,
      minHeight:'80vh',
      backgroundColor: {
        xs: "#171616a1",
        sm: "transparent",
      },
      backdropFilter: {
        xs:"blur(4px)",
        sm:'none'
      },
      zIndex: 1,
    },
     
    }}
      >
        <Box sx={{
          textAlign:{xs:'center',sm:'start'},
          position: "relative",
          zIndex: 2,
          marginLeft:{sm:4,md:12,lg:20}}}>
           <Box display={'flex'} justifyContent={{xs:'center',sm:'start'}}>
              <Logo  width={{xs:"11rem",sm:"12rem",md:"12.5rem",lg:"13rem"}} theme='lightBg'/>
           </Box>
           
          <Typography component={'h1'} sx={{fontWeight:'bold',fontSize:{xs:'40px',sm:'45px',md:'50px',lg:'60px'},color:{xs:'#ffffff',sm:'#8B5E3C'},mt:1}}>
            Everything Your <br/>Child Needs
            </Typography>  
          <Typography component={'p'} sx={{fontSize:{xs:'20px',sm:'22px',md:'23px',lg:'24px'},color:{xs:'#ffffff',sm:'#8B5E3C'},mt:1}} >
            Clothes, Toys, Learning & More
          </Typography>
          <Button type="submit" variant="contained"  endIcon={<SendIcon/>} sx={{fontSize:{xs:'14px',sm:'16px'}, backgroundColor:"#E47221",px:7,py:1, mt:2, borderRadius:50}}>shop Now</Button>
        </Box>
    </Box>
  )
}
