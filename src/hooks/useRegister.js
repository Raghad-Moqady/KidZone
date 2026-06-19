import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../Api/axiosInstance";
import { ErrorToast, SuccessToast } from "../toast/Toast";

export default function useRegister(){
        const navigate= useNavigate();
        // Mutation 
        const registerMutation = useMutation({
            mutationFn: async values=>await axiosInstance.post(`/auth/Account/Register`,values),
            onSuccess: (response)=>{
                SuccessToast("Account created successfully! Please confirm your email, then log in.");
                navigate("/auth/login");
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
        });

        return {registerMutation}
}