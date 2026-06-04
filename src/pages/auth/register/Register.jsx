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
import mainBgImg from "../../../assets/imgs/BG23.png";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import SharedTextField from "../../../components/auth/sharedTextField/SharedTextField.jsx";
import SharedTitle from "../../../components/auth/sharedTitle/SharedTitle.jsx";

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
  // ,md:`url(${mainBgImg})`
  return (
    <> 
      <Box display={"flex"} alignItems={"center"}  minHeight={"100vh"} justifyContent={{xs:"center",lg:"end"}}
       sx={{backgroundColor:"rgb(151, 128, 99)" ,backgroundImage:{
       xs: `linear-gradient(rgb(151, 128, 99),rgb(151, 128, 99),rgba(151, 128, 99, 0.71),rgba(151, 128, 99, 0.48), rgba(151, 128, 99, 0)), url(${mainBgImg})`},backgroundPositionY:{xs:"-122px",sm:"170px",md:"-122px"},backgroundRepeat:"no-repeat"}}>
          {/* form card */}
          {/* ...register('email') === id */}
          <Box   sx={{ textAlign:"center",paddingY:{xs:7,sm:10},margin:2, width:{xs:"100%",sm:"80%",md:"60%",lg:"50%"},backgroundColor:{xs:"#ffffffcc",lg:"initial"}, borderTopLeftRadius:"20%", borderBottomRightRadius:"20%" }}>
              <Box display={"flex"}  justifyContent={"center"} >
                <PersonAddAltOutlinedIcon sx={{color:{xs:"#8B5E3C",lg:"white"},border:1,borderRadius:"50%",width:"5rem",height:"5rem",p: 1}}/>
              </Box>
              <SharedTitle title={"Create a New Account"}/>
            {/* to show server errors */}
            {/* stop hear */}
            {/* {Object.keys(serverValidationErrors).length > 0 && (
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
            )} */}
            
            <Box component={"form"} onSubmit={handleSubmit(sendData)} display={"flex"} flexDirection={"column"} gap={2} alignItems={"center"} px={10} mt={3}>
                <SharedTextField type={"email"} id={"email"} label={"Email"} error={errors.email} register={register('email')}/>
                <SharedTextField type={"password"} id={"password"} label={"Password"} error={errors.password} register={register('password')}/>
                <SharedTextField type={"text"} id={"fullName"} label={"Full Name"} error={errors.fullName} register={register('fullName')}/>
                <SharedTextField type={"text"} id={"userName"} label={"User Name"} error={errors.userName} register={register('userName')}/>
                <SharedTextField type={"text"} id={"phone"} label={"Phone"} error={errors.phoneNumber} register={register('phoneNumber')}/>

                <Button type="submit" variant="contained"  endIcon={<SendIcon/>} sx={{backgroundColor:"#E47221", mt:2, borderRadius:50}}>sign up</Button>
            </Box>
          </Box> 
      </Box>
    </>
  );
}
