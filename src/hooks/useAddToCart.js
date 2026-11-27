import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import axiosInstanceWithAUTHORIZATION from "./../Api/axiosInstanceWithAUTHORIZATION.js";
import { useNavigate } from "react-router-dom";
import { ErrorToast, SuccessToast } from "../toast/Toast.js";

export default function useAddToCart() {
  const queryClient= useQueryClient();
  const navigate = useNavigate();
  //Mutation :
  const AddToCartMutation = useMutation({
    mutationFn: async (values) =>
      await axiosInstanceWithAUTHORIZATION.post("/Carts", values),
    onSuccess: (response) => {
      SuccessToast(response.data.message);
      //بغض النظر عن اللغة 
      queryClient.invalidateQueries({queryKey: ['cart']});

      navigate("/cart");
    },   
    onError: (err) => {
      //1.network error
      //2. 400: BaseResopnse
      //3. 500

      //رد الباك اند بكون هون
      // console.log(err.response.data);
      const response = err.response;

      // 1. No response (network error)
      if (!response) {
        ErrorToast("Network error. Please try again.");
        return;
      }
      //401 :Unauthorized 
       if (response.status === 401) { 
          ErrorToast('Please log in to continue.');
          navigate("/auth/login");
          return;
      } 
      // 2.logic errors (400)
      if (response.status === 400 ||response.status === 404 ) {
        const data = response.data; 
          ErrorToast(data.message);
          return;
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
  return { AddToCartMutation };
}
