import React from "react";
import style from "./Register.module.css";
import zebraImg from "../../../assets/imgs/zebra.webp";
import rainbowImg from "../../../assets/imgs/rainbow.png";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from "../../../validations/RegisterSchema.js";

//  steps:
/*
1. design => Done
2. (form handling)handle form using react-hook-form , download axios =>Done
3. client side validation using Yup (level 1) (before send request)=> Done
4. server side validation using try, catch (without using react query) (after send request)
5. loading 
6. Alerts
*//////////////////////////////////////////////////////////////////////////////////////////////////////////

//Client Validation Steps(Yup): 1. create schema(import) , 2. validate schema (yup with ract hook form )(yup resolver)
// (yup resolver) :
// submitمعناها انه الهوك فورم رح يشغل السكيما تلقائيا عند كل عملية 
//errors وأي خطأ بطلع مع الهوك فورم ... بروح يضيفه على ال
 
 

export default function Register() {
  const {register, handleSubmit, formState:{errors}} =useForm({
    resolver: yupResolver(schema),
    //Submitبشكل افتراضي بتم استداعؤه عند ال
    // mode: "onSubmit"
    mode: "onBlur"
  });

  const sendData=async(values)=>{
      //  console.log(values);
       try{
         const response= await axios.post(`https://kidzonestore.runasp.net/api/auth/Account/Register`,values);
         console.log(response);
       }catch(err){
        //Validation (level 2): errors from backend (400,401,...,500)or from send operation 
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
         {/* ...register('email') === id */}
        <Box sx={{width:"40%", py:5 , textAlign:"center",  border: 1, borderColor:'orange' , borderRadius: '16px'}}>
           <Typography variant='h5' component={"h1"} >Create an Account</Typography>
           <Box component={"form"} onSubmit={handleSubmit(sendData)} display={"flex"} flexDirection={"column"} gap={2} alignItems={"center"} px={10}>
              <TextField color="none" type="email" id="email" label="Email" {...register('email')} variant="standard" fullWidth
              error={errors.email} helperText={errors.email?.message}
              />
              <TextField color="none" type="password" id="password" label="Password" {...register('password')} variant="standard"  fullWidth
              error={errors.password} helperText={errors.password?.message}
              />
              <TextField color="none" type="text" id="fullName" label="Full Name" {...register('fullName')}  variant="standard"  fullWidth 
              error={errors.fullName} helperText={errors.fullName?.message}
              />
              <TextField color="none" type="text" id="userName" label="User Name" {...register('userName')}  variant="standard"  fullWidth 
              error={errors.userName} helperText={errors.userName?.message}
              />
              <TextField color="none" type="text" id="phone" label="Phone" {...register('phoneNumber')}  variant="standard"  fullWidth 
              error={errors.phoneNumber} helperText={errors.phoneNumber?.message}
              />

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
