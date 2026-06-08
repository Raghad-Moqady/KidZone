import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import heroImg from '../../assets/imgs/heroImg2.png'
import SendIcon  from '@mui/icons-material/Send';
import Logo from './../logo/Logo.jsx';

export default function Hero() {
  return (
     <Box sx={{
      backgroundImage:`url(${heroImg})`,
      minHeight: "88vh",
      backgroundSize: "cover" ,
      backgroundPosition:"start",
      backgroundRepeat: "no-repeat",
      display:'flex', alignItems:'center'}}
      >
        <Container sx={{}}>
           
          <Logo width={"13rem"} theme='lightBg'/>
           
          <Typography component={'h1'}  variant='h2' sx={{fontWeight:'bold',color:'#8B5E3C',mt:1}}>
            Everything Your <br/>Child Needs
            </Typography>  
          <Typography component={'p'} variant='h5' sx={{color:'#8B5E3C',mt:1}} >
            Clothes, Toys, Learning & More
          </Typography>
          <Button type="submit" variant="contained"  endIcon={<SendIcon/>} sx={{fontSize:'16px', backgroundColor:"#E47221",px:7,py:1, mt:2, borderRadius:50}}>shop Now</Button>
        </Container>
    </Box>
  )
}
