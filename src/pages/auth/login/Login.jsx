import React from 'react'
import style from './Login.module.css'
import zebraImg from "../../../assets/imgs/zebra.webp";
import rainbowImg from "../../../assets/imgs/rainbow.png";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const {register,handleSubmit}= useForm({});
  const navigate= useNavigate();

  const sendData=async(values)=>{
  //  console.log(values);
   try{
      const response= await axios.post(`knowledgeshop.runasp.net/api/auth/Account/Login`,values);
      // console.log(response);
      if(response.status === 200){
        localStorage.setItem("token",response.data.accessToken);
        navigate("/");
      };
   }catch(err){
    console.log(err);
   }
  }
  return (
       <> 
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
        <Box sx={{width:"40%", py:5 , textAlign:"center",  border: 1, borderColor:'orange' , borderRadius: '16px'}}>
           <Typography variant='h5' component={"h1"} >Sign in to your account</Typography>
           <Box component={"form"} onSubmit={handleSubmit(sendData)} display={"flex"} flexDirection={"column"} gap={2} alignItems={"center"} px={10}>
              <TextField color="none" type="email" id="email" label="Email" {...register('email')} variant="standard" fullWidth/>
              <TextField color="none" type="password" id="password" label="Password" {...register('password')} variant="standard"  fullWidth />
 
              <Button type="submit" variant="contained"  endIcon={<SendIcon/>} sx={{backgroundColor:"#f3720fff", mt:2}}>sign in</Button>
           </Box>
        </Box>

         {/* img */}
        <Box sx={{ width: "8rem" }}>
                <Box
                  component="img"
                  sx={{
                    width: "100%"
                  }}
                  alt="rainbow img"
                  src={rainbowImg}
                ></Box>
        </Box>
       
      </Box>
    </>
  )
}
