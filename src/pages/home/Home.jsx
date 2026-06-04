import React from 'react'
import style from './Home.module.css'
import { Box, Button } from '@mui/material'
import heroImg from '../../assets/imgs/hero1.png'
import SendIcon  from '@mui/icons-material/Send';
export default function Home() {
  return (
    <Box sx={{backgroundImage:`url(${heroImg})`,height:"70vh", backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
              {/* <Button type="submit" variant="contained"  endIcon={<SendIcon/>} sx={{backgroundColor:"#E47221", mt:2, borderRadius:50}}>sign up</Button> */}
    </Box>
  )
}
