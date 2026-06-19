import { Box, Button } from "@mui/material";
import React from "react";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import SharedTitle from "../../../components/auth/sharedTitle/SharedTitle.jsx";
import SharedTextField from "../../../components/auth/sharedTextField/SharedTextField.jsx";
import { useForm } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
import mainBgImg from "../../../assets/imgs/BG23.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { ResetPasswordSchema } from "../../../validations/Schema.js";
import useResetPassword from "../../../hooks/useResetPassword.js";

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(ResetPasswordSchema),
  });

  const {ResetPasswordMutation}=useResetPassword();
  
  const sendData = async (values) => {
    await ResetPasswordMutation.mutateAsync(values);
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
            <PasswordOutlinedIcon
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
          <SharedTitle title={"Reset Password"} />

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
              type={"password"}
              label={"New Password"}
              error={errors.newPassword}
              register={register("newPassword")}
            />
            <SharedTextField
              type={"text"}
              label={"Code"}
              error={errors.code}
              register={register("code")}
            />

            {isSubmitting ? (
              <Button
                loading
                variant="outlined"
                loadingPosition="end"
                endIcon={<SendIcon />}
                sx={{
                  backgroundColor: "#7445247a",
                  mt: 2,
                  borderRadius: 50,
                  boxShadow: 0,
                  px: 8,
                  pt: 1,
                  pb: 1,
                }}
              >
                Reset{" "}
              </Button>
            ) : (
              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                sx={{
                  backgroundColor: "#E47221",
                  mt: 2,
                  borderRadius: 50,
                  boxShadow: 0,
                  px: 8,
                  pt: 1,
                  pb: 1,
                  "&.Mui-disabled": {
                    backgroundColor: "#7445247a",
                    color: "#fff",
                  },
                }}
                disabled={errors.newPassword || errors.code}
              >
                Reset{" "}
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}
