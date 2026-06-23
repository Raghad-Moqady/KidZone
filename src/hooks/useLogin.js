import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../Api/axiosInstance";
import { ErrorToast, SuccessToast } from "../toast/Toast";
import useAuthStore from "../store/authStore";
import decoder from "../decoder";
 
export default function useLogin(){
  const setUserAccessToken = useAuthStore(state=> state.setUserAccessToken);
  const setUser = useAuthStore(state=>state.setUser); 
  const navigate = useNavigate();

  //Mutation : 
  const loginMutation = useMutation({
    mutationFn:async values=>await axiosInstance.post(`/auth/Account/Login`,values),
    onSuccess:(response)=>{
        setUserAccessToken(response.data.accessToken);
        const decoded= decoder(response.data.accessToken);
        const user= {
          name: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
          email: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'],
          role:decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
        };
        setUser(user);
        SuccessToast(`Welcome ${user.name}`);
        navigate("/");
    },
    onError:(err)=>{
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
    },
  });
  
  return {loginMutation}
}
