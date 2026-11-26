import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import axiosInstanceWithAUTHORIZATION from "../Api/axiosInstanceWithAUTHORIZATION";
import { SuccessToast } from "../toast/Toast";

export default function useClearCart() {
    const queryClient=useQueryClient();
    //Mutation:
  const ClearCartMutaion = useMutation({
    mutationFn: async ()=> await axiosInstanceWithAUTHORIZATION.delete('/Carts/clear'),
    onSuccess: ()=>{
       SuccessToast("Cart Deleted Successfully!");
       queryClient.invalidateQueries({queryKey: ['cart']});
    }
  })
  return {ClearCartMutaion}
}
