import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../Api/axiosInstance";
import { ErrorToast, SuccessToast } from "../toast/Toast";

export default function useSendCode(){
  const navigate = useNavigate();
 //  Mutation
  const SendCodeMutation = useMutation({
    mutationFn: async (values) =>
      await axiosInstance.post(`/auth/Account/SendCode`, values),
    onSuccess: (response,values) => {
      localStorage.setItem("email", values.email);
      SuccessToast(response.data.message);
      navigate("/auth/resetPassword");
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

  return {SendCodeMutation}
}