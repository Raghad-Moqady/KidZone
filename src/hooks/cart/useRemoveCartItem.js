import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstanceWithAUTHORIZATION from "../../Api/axiosInstanceWithAUTHORIZATION";
import { ErrorToast, SuccessToast } from "../../toast/Toast";


export default function useRemoveCartItem() {
    const queryClient=useQueryClient();
  //Mutation 
  const removeCartItemMutation=useMutation({
    mutationFn:async(productId)=>await axiosInstanceWithAUTHORIZATION.delete((`/Carts/${productId}`)),
    onSuccess:(response)=>{
      SuccessToast(response.data.message);
      queryClient.invalidateQueries({queryKey: ['cart']});
    },
    onError:(err)=>{
     ErrorToast(err.response.data.message);
    }
  })
  return ({removeCartItemMutation})
}
