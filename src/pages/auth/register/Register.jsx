import React, { useState } from "react";
import style from "./Register.module.css";
import zebraImg from "../../../assets/imgs/zebra.webp";
import rainbowImg from "../../../assets/imgs/rainbow.png";
import { Alert, Box, Button, Card, TextField, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterSchema } from "../../../validations/RegisterSchema.js";
import Logo from "../../../components/logo/Logo.jsx";

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
  const[serverValidationErrors,setServerValidationErrors]= useState({});
  const[serverLogicErrors,setServerLogicErrors] =useState([]);
  const[serverError,setServerError] =useState("");

  const {register, handleSubmit, formState:{errors}} =useForm({
    resolver: yupResolver(RegisterSchema),
    // //Submitبشكل افتراضي بتم استداعؤه عند ال
    // // mode: "onSubmit"
    mode: "onBlur"
  });

  const sendData=async(values)=>{
      //  console.log(values);
       try{
         const response= await axios.post(`https://kidzonestore.runasp.net/api/auth/Account/Register`,values);
         console.log(response);
       }catch(err){
        // console.log(err.response.status);
        //Validation (level 2): errors from backend (400,401,...,500)or from send operation (internet)
        // بالترتيب هاد الايرور ممكن يكون راجع من مرحلة الفالديشن 
        if(err.response.data.title){
          setServerValidationErrors(err.response.data.errors); 
        }
        //او من السيرفر => 500 : هاد الخطأ بكون راجع من الاكسبشن هاندلر بالباك
        else if(err.response.status==500){
          setServerError(err.response.data.message);
        }
        //او من الاخطاء التي تحدث بالservice =>try بال400,404.. (logic errors)
        else if(err.response.data.message){
           setServerLogicErrors(err.response.data.errors)
        }
       }
  }
  return (
    <> 
      <Box className={`${style.ragisterPage}`}  display={"flex"}  alignItems={"center"} justifyContent={"center"} height={"100vh"}>
        {/* img */}
        {/* <Box sx={{ width: "10rem" ,mt:"15rem"}}>
                <Box
                  component="img"
                  sx={{
                    width: "100%"
                  }}
                  alt="zebra img"
                  src={zebraImg}
                ></Box>
        </Box>  */}

         {/* form card */}
         {/* ...register('email') === id */}
        <Box sx={{width:"40%", py:5 , textAlign:"center",  border: 1, borderColor:'orange' , borderRadius: '16px', backgroundColor:'white'}}>
            <Box display={"flex"}  justifyContent={"center"} > <Logo/> </Box>
           <Typography variant='h5' component={"h1"} color="orange">Create an Account</Typography>
           {/* to show server errors */}
           {/* stop hear */}
           {Object.keys(serverValidationErrors).length > 0 && (
            <Alert severity="error" sx={{ textAlign: "start", mx: 5 }}>
              {Object.entries(serverValidationErrors).map(([field, messages]) => (
                <Box key={field} sx={{ mb: 1 }}>
                  <strong>{field}:</strong>
                  <ul style={{ margin: 0, paddingLeft: "20px" }}>
                    {messages.map((msg, index) => (
                      <li key={index}>{msg}</li>
                    ))}
                  </ul>
                </Box>
              ))}
            </Alert>
          )}
          
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
