import React from "react";
import style from "./Register.module.css";
import zebraImg from "../../../assets/imgs/zebra.webp";
import rainbowImg from "../../../assets/imgs/rainbow.png";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useForm } from "react-hook-form";
import axios from "axios";

//  steps:
/*
1. design => Done
2. handle form using react-hook-form , download axios =>Done
3. client side validation using Yup
4. server side validation using try, catch (without using react query)
5. loading 
6. Alerts
*/
export default function Register() {
  const {register, handleSubmit} =useForm({});

  const sendData=async(values)=>{
      //  console.log(values);
       try{
         const response= await axios.post(`https://knowledgeshop.runasp.net/api/Auth/Account/Register`,values);
         console.log(response);
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
           <Typography variant='h5' component={"h1"} >Create an Account</Typography>
           <Box component={"form"} onSubmit={handleSubmit(sendData)} display={"flex"} flexDirection={"column"} gap={2} alignItems={"center"} px={10}>
              <TextField color="none" type="email" id="email" label="Email" {...register('email')} variant="standard" fullWidth/>
              <TextField color="none" type="password" id="password" label="Password" {...register('password')} variant="standard"  fullWidth />
              <TextField color="none" type="text" id="fullName" label="Full Name" {...register('fullName')}  variant="standard"  fullWidth />
              <TextField color="none" type="text" id="userName" label="User Name" {...register('userName')}  variant="standard"  fullWidth />
              <TextField color="none" type="text" id="phone" label="Phone" {...register('phoneNumber')}  variant="standard"  fullWidth />

              <Button type="submit" variant="contained"  endIcon={<SendIcon/>} sx={{backgroundColor:"#f3720fff", mt:2}}>sign up</Button>
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
  );
}
