import { Box, Button } from '@mui/material'
import React from 'react'
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import SharedTitle from '../../../components/auth/sharedTitle/SharedTitle.jsx';
import SharedTextField from '../../../components/auth/sharedTextField/SharedTextField.jsx';
import { useForm } from 'react-hook-form';
import SendIcon  from '@mui/icons-material/Send';
import mainBgImg from "../../../assets/imgs/BG23.png";
import { yupResolver } from '@hookform/resolvers/yup';
import { ResetPasswordSchema } from '../../../validations/Schema.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ErrorToast, SuccessToast } from '../../../toast/Toast.js';

export default function ResetPassword() {
  const navigate = useNavigate();
  const{register,handleSubmit,formState:{errors,isSubmitting}} =useForm({
       resolver: yupResolver(ResetPasswordSchema),
  });

  const sendData=async(values)=>{
    const email= localStorage.getItem("email");
    const payload={email,...values};
    try{
      const response= await axios.patch(`${import.meta.env.VITE_BURL}/auth/Account/ResetPassword`,payload);
      if(response?.data?.success===true){
         SuccessToast(response?.data?.message);
         navigate("/auth/login");
      }
    }catch(err){
          //1.network error
          //2. 400: 1.validation response from asp 2.BaseResopnse
          //3. 500 

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
            if (data?.unexpectedErrorFlag == false) {
              //logic:
             ErrorToast(data.message);
              return;
            } else {
              //validation:
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
                <PasswordOutlinedIcon sx={{color:{xs:"#8B5E3C",lg:"white"},border:1,borderRadius:"50%",width:"5rem",height:"5rem",p: 1}}/>
              </Box>
              <SharedTitle title={"Reset Password"}/>
           
            
            <Box component={"form"} onSubmit={handleSubmit(sendData)} display={"flex"} flexDirection={"column"} gap={2} alignItems={"center"} px={10} mt={3}>
                 <SharedTextField type={"password"} label={"New Password"} error={errors.newPassword} register={register('newPassword')}/>
                 <SharedTextField type={"text"} label={"Code"} error={errors.code} register={register('code')}/>
                 
 
                {isSubmitting? 
                 <Button loading variant="outlined" loadingPosition="end" endIcon={<SendIcon/>}
                 sx={{backgroundColor:"#7445247a", mt:2, borderRadius:50,px:8,pt:1,pb:1}}
                 >Reset </Button>
                :
                  <Button type="submit" variant="contained"  endIcon={<SendIcon/>}
                 sx={{backgroundColor:"#E47221", mt:2, borderRadius:50,px:8,pt:1,pb:1,
                  "&.Mui-disabled": {
                      backgroundColor: "#7445247a",
                      color: "#fff"
                    }}}
                disabled={errors.newPassword||errors.code}
                >Reset  </Button>
                } 
            </Box>
          </Box> 
      </Box>
    </>
  )
}
