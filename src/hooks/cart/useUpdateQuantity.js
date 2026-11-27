import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstanceWithAUTHORIZATION from "../../Api/axiosInstanceWithAUTHORIZATION.js";
import { ErrorToast } from "../../toast/Toast.js";


export default function useUpdateQuantity() {
  const queryClient = useQueryClient();
  //mutaion
  const updateQuantityMutation = useMutation({
    mutationFn: async (values) =>
      await axiosInstanceWithAUTHORIZATION.patch(`/Carts/${values.productId}`, {
        NewCount:values.NewCount,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError:(err)=>{
      ErrorToast(err.response.data.message);
    }
  });
  return {updateQuantityMutation};
}
