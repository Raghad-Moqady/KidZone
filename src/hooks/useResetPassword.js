import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../Api/axiosInstance";
import { ErrorToast, SuccessToast } from "../toast/Toast";

export default function useResetPassword(){
  const navigate = useNavigate();

   // Mutation
  const ResetPasswordMutation = useMutation({
    mutationFn: async values =>{
      const email = localStorage.getItem("email");
      const payload = { email, ...values };
      return  await axiosInstance.patch(`/auth/Account/ResetPassword`, payload);
    },
    onSuccess: (response) => {
      SuccessToast(response?.data?.message);
      navigate("/auth/login");
    },
    onError: (err) => {
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
    },
  });

  return {ResetPasswordMutation}

}