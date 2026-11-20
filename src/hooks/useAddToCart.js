import { useMutation } from '@tanstack/react-query'
import React from 'react'
import axiosInstanceWithAUTHORIZATION from './../Api/axiosInstanceWithAUTHORIZATION.js';
import { useNavigate } from 'react-router-dom';
import { SuccessToast } from '../toast/Toast.js';

export default function useAddToCart() {
  const navigate =useNavigate();
  //Mutation : 
  const AddToCartMutation =useMutation({
     mutationFn: async values=> await axiosInstanceWithAUTHORIZATION.post('/Carts',values),
     onSuccess:(response)=>{
       SuccessToast('Product Added Successfully!');
       navigate("/cart");
     },
     onError:(err)=>{
      console.log(err.response);
     }
    });
  return {AddToCartMutation}
}
