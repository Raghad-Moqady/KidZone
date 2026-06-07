import React from "react";
import style from "./Login.module.css";
import { Box, Button, Card, Link, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import mainBgImg from "../../../assets/imgs/BG23.png";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SharedTitle from "../../../components/auth/sharedTitle/SharedTitle.jsx";
import SharedTextField from "../../../components/auth/sharedTextField/SharedTextField.jsx";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../../validations/Schema.js";
import { ErrorToast, SuccessToast } from "../../../toast/Toast.js";
import {Link as RouterLink } from "react-router-dom";
import axiosInstance from "../../../Api/axiosInstance.js";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const sendData = async (values) => {
    try {
      const response = await axiosInstance.post(`/auth/Account/Login`,values,);
      // console.log(response);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.accessToken);
        SuccessToast("Logged in successfully");
        navigate("/");
      }
    } catch (err) {
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
  };
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        minHeight={"100vh"}
        justifyContent={{ xs: "center", lg: "end" }}
        sx={{
          backgroundColor: "rgb(151, 128, 99)",
          backgroundImage: {
            xs: `linear-gradient(rgb(151, 128, 99),rgb(151, 128, 99),rgba(151, 128, 99, 0.71),rgba(151, 128, 99, 0.48), rgba(151, 128, 99, 0)), url(${mainBgImg})`,
          },
          backgroundPositionY: { xs: "-122px", sm: "170px", md: "-122px" },
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* form card */}
        <Box
          sx={{
            textAlign: "center",
            paddingY: { xs: 7, sm: 10 },
            margin: 2,
            width: { xs: "100%", sm: "80%", md: "60%", lg: "50%" },
            backgroundColor: { xs: "#ffffffcc", lg: "initial" },
            borderTopLeftRadius: "20%",
            borderBottomRightRadius: "20%",
          }}
        >
          <Box display={"flex"} justifyContent={"center"}>
            <PersonOutlineOutlinedIcon
              sx={{
                color: { xs: "#8B5E3C", lg: "white" },
                border: 1,
                borderRadius: "50%",
                width: "5rem",
                height: "5rem",
                p: 1,
              }}
            />
          </Box>
          <SharedTitle title={"Welcome Back! Login"} />

          <Box
            component={"form"}
            onSubmit={handleSubmit(sendData)}
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            alignItems={"center"}
            px={10}
            mt={3}
          >
            <SharedTextField
              type={"email"}
              label={"Email"}
              error={errors.email}
              register={register("email")}
            />
            <SharedTextField
              type={"password"}
              label={"Password"}
              error={errors.password}
              register={register("password")}
            />
           <Link component={RouterLink} to={'/auth/sendCode'} fontWeight="bold" color="#8B5E3C"> Forgot Password? </Link>

            {isSubmitting ? (
              <Button
                loading
                variant="outlined"
                loadingPosition="end"
                endIcon={<LoginOutlinedIcon />}
                sx={{
                  backgroundColor: "#7445247a",
                  mt: 2,
                  borderRadius: 50,
                  px: 8,
                  pt: 1,
                  pb: 1,
                }}
              >
                Sign In
              </Button>
            ) : (
              <Button
                type="submit"
                variant="contained"
                endIcon={<LoginOutlinedIcon />}
                sx={{
                  backgroundColor: "#E47221",
                  mt: 2,
                  borderRadius: 50,
                  px: 8,
                  pt: 1,
                  pb: 1,
                  "&.Mui-disabled": {
                    backgroundColor: "#7445247a",
                    color: "#fff",
                  },
                }}
                disabled={errors.email || errors.password}
              >
                Sign In
              </Button>
            )}
            
          </Box>
        </Box>
      </Box>
    </>
  );
}
