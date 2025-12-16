import React from "react";
import style from "./Register.module.css";
import zebraImg from "../../../assets/imgs/zebra.webp";
import rainbowImg from "../../../assets/imgs/rainbow.png";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

 
export default function Register() {
  return (
    <>
      {/* <img src={zebraImg} alt="" />
    <img src={rainbowImg} alt="" /> */}

      <Box className="ragisterPage" display={"flex"}  alignItems={"center"} justifyContent={"center"} height={"100vh"}>
        {/* img */}
        <Box sx={{ width: "10rem" ,mt:"15rem"}}>
                <Box
                  component="img"
                  sx={{
                    width: "100%"
                  }}
                  alt="zebra img"
                  src={zebraImg}
                ></Box>
        </Box> 
        
         {/* form card */}
        <Box  sx={{width:"40%", py:5 , textAlign:"center",  border: 1, borderColor:'orange' , borderRadius: '16px'}}>
           <Typography variant='h5' component={"h1"} >Create an Account</Typography>
           <Box component={"form"} display={"flex"} flexDirection={"column"} gap={2} alignItems={"center"} px={10}>
              <TextField color="none" type="email" id="email" label="Email" name="email" variant="standard" fullWidth/>
              <TextField color="none" type="password" id="password" label="Password" name="password" variant="standard"  fullWidth />
              <TextField color="none" type="text" id="fullName" label="Full Name" name="fullName"  variant="standard"  fullWidth />
              <TextField color="none" type="text" id="userName" label="User Name" name="userName" variant="standard"  fullWidth />
              <TextField color="none" type="text" id="phone" label="Phone" name="phoneNumber" variant="standard"  fullWidth />

              <Button type="submit" variant="contained"  endIcon={<SendIcon/>} sx={{backgroundColor:"#f3720fff", mt:2}}>sign up</Button>
           </Box>
        </Box>

         {/* img */}
        {/* <Box sx={{ width: "8rem" }}>
                <Box
                  component="img"
                  sx={{
                    width: "100%"
                  }}
                  alt="rainbow img"
                  src={rainbowImg}
                ></Box>
        </Box> */}
       
      </Box>
    </>
  );
}
