import { Box, Button } from "@mui/material";
import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SharedTitle from "../../../components/auth/sharedTitle/SharedTitle.jsx";
import SharedTextField from "../../../components/auth/sharedTextField/SharedTextField.jsx";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SendCodeSchema } from "../../../validations/Schema.js";
import mainBgImg from "../../../assets/imgs/BG23.png";
import useSendCode from "../../../hooks/useSendCode.js";

export default function SendCode() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(SendCodeSchema),
  });

  const {SendCodeMutation}=useSendCode();

  const sendData = async (values) => {
    await SendCodeMutation.mutateAsync(values);
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
            <EmailOutlinedIcon
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
          <SharedTitle title={"Send Code"} />

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
                Send Code
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
                disabled={errors.email}
              >
                Send Code
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}
