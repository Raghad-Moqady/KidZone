import React, { useState } from "react";
import style from "./Register.module.css";
import zebraImg from "../../../assets/imgs/zebra.webp";
import rainbowImg from "../../../assets/imgs/rainbow.png";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterSchema } from "../../../validations/RegisterSchema.js";
import Logo from "../../../components/logo/Logo.jsx";
import mainBgImg from "../../../assets/imgs/BG23.png";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import SharedTextField from "../../../components/auth/sharedTextField/SharedTextField.jsx";
import SharedTitle from "../../../components/auth/sharedTitle/SharedTitle.jsx";
import { useNavigate } from "react-router-dom";
import { ErrorToast, SuccessToast } from "../../../toast/Toast.js";

//  steps:
/*
1. design => Done
2. (form handling)handle form using react-hook-form , download axios =>Done
3. client side validation using Yup (level 1) (before send request)=> Done

change auth button style when it disabled=>Done
create env file=> Done
handling isSubmitting (add loader button when request is submiting)=>Done
handel if response.status is success =>Done

4. server side validation (level 2)using try, catch (without using react query) (after send request)=>done
5. loading =>Done
6. toast=> Done
*//////////////////////////////////////////////////////////////////////////////////////////////////////////

//Client Validation Steps(Yup): 1. create schema(import) , 2. validate schema (yup with ract hook form )(yup resolver)
// (yup resolver) :
// submitمعناها انه الهوك فورم رح يشغل السكيما تلقائيا عند كل عملية 
//errors وأي خطأ بطلع مع الهوك فورم ... بروح يضيفه على ال
 

export default function Register() {
  const navigate= useNavigate();

  const {register, handleSubmit, formState:{errors,isSubmitting}} =useForm({
    resolver: yupResolver(RegisterSchema),
    // //Submitبشكل افتراضي بتم استداعؤه عند ال
    // // mode: "onSubmit" يتم تغيير الخطأ امام اليوزر بشكل مباشر
    mode: "onBlur"
  });

  const sendData=async(values)=>{
       try{
         const response= await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Register`,values);
         if(response?.data?.success===true){
           SuccessToast("Account created successfully! Please confirm your email, then log in.");
           navigate("/auth/login");
         }
       }catch (err) {
        
        //1.network error
        //2. 400: 1.validation response from asp 2.BaseResopnse 
        //3. 500 

        //رد الباك اند بكون هون
        // console.log(err.response.data);
            const response = err.response;

            // 1. No response (network error)
            if (!response) {
              ErrorToast("Network error. Please try again.");
              return;
            }
 
            // 2. Validation & logic errors (400)
            if (response.status === 400) {
              const data = response.data;
              //validation: false
              //logic: true
              if(data?.unexpectedErrorFlag==false){
                //logic: 
//     "success": false,
//     "unexpectedErrorFlag": false,
//     "message": "User Creation Failed",
//     "errors": [
//         "Username 'Eng.Raghad' is already taken.",
//         "Email 'raghadmoqady@gmail.com' is already taken."
//     ]
// }
                 if(data?.errors.length!==0){
                   data.errors.forEach(err=> ErrorToast(err));
                 }
                 return;
              }else{
                //validation: 
//     "type": "https://tools.ietf.org/html/rfc9110#section-15.5.1",
//     "title": "One or more validation errors occurred.",
//     "status": 400,
//     "errors": {
//         "FullName": [
//             "Full Name Is Required"
//         ],
//         "UserName": [
//             "UserName Is Required",
//             "username must be at least 4 characters"
//         ]
//     },
//     "traceId": "00-646801cbd122c9b377b5bbf8161cb72b-aa7f4f3bcebac8ed-00"
// }
               if (data?.errors) {
                // errors object (field-based)
                Object.values(data.errors).forEach((messages) => {
                  messages.forEach((msg) => ErrorToast(msg));
                });
              } 
              return;
              }
            }
 
            // 3. Server errors (500)
            if (response.status >= 500) {
              ErrorToast("Server error. Please try later.");
              return;
            }
            
            // fallback
            ErrorToast("Something went wrong");
          }
  }
  return (
    <> 
      <Box display={"flex"} alignItems={"center"}  minHeight={"100vh"} justifyContent={{xs:"center",lg:"end"}}
       sx={{backgroundColor:"rgb(151, 128, 99)" ,backgroundImage:{
       xs: `linear-gradient(rgb(151, 128, 99),rgb(151, 128, 99),rgba(151, 128, 99, 0.71),rgba(151, 128, 99, 0.48), rgba(151, 128, 99, 0)), url(${mainBgImg})`},backgroundPositionY:{xs:"-122px",sm:"170px",md:"-122px"},backgroundRepeat:"no-repeat"}}>
          {/* form card */}
         
          <Box   sx={{ textAlign:"center",paddingY:{xs:7,sm:10},margin:2, width:{xs:"100%",sm:"80%",md:"60%",lg:"50%"},backgroundColor:{xs:"#ffffffcc",lg:"initial"}, borderTopLeftRadius:"20%", borderBottomRightRadius:"20%" }}>
              <Box display={"flex"}  justifyContent={"center"} >
                <PersonAddAltOutlinedIcon sx={{color:{xs:"#8B5E3C",lg:"white"},border:1,borderRadius:"50%",width:"5rem",height:"5rem",p: 1}}/>
              </Box>
              <SharedTitle title={"Create a New Account"}/>
           
            
            <Box component={"form"} onSubmit={handleSubmit(sendData)} display={"flex"} flexDirection={"column"} gap={2} alignItems={"center"} px={10} mt={3}>
                <SharedTextField type={"email"} label={"Email"} error={errors.email} register={register('email')}/>
                <SharedTextField type={"password"} label={"Password"} error={errors.password} register={register('password')}/>
                <SharedTextField type={"text"} label={"Full Name"} error={errors.fullName} register={register('fullName')}/>
                <SharedTextField type={"text"} label={"User Name"} error={errors.userName} register={register('userName')}/>
                <SharedTextField type={"text"} label={"Phone"} error={errors.phoneNumber} register={register('phoneNumber')}/>
 
                {isSubmitting? 
                 <Button loading variant="outlined" loadingPosition="end" endIcon={<SendIcon/>}
                 sx={{backgroundColor:"#7445247a", mt:2, borderRadius:50,px:8,pt:1,pb:1}}
                 >Sign Up </Button>
                :
                  <Button type="submit" variant="contained"  endIcon={<SendIcon/>}
                 sx={{backgroundColor:"#E47221", mt:2, borderRadius:50,px:8,pt:1,pb:1,
                  "&.Mui-disabled": {
                      backgroundColor: "#7445247a",
                      color: "#fff"
                    }}}
                disabled={errors.email||errors.password||errors.fullName||errors.userName||errors.phoneNumber}
                >Sign Up </Button>
                } 
            </Box>
          </Box> 
      </Box>
    </>
  );
}
