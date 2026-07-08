import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../Api/axiosInstance";

export default function useProducts() {
  const getProducts = async () => {
    const response = await axiosInstance.get(`/Products`);
    return response.data.response.data;
  };

  const query = useQuery({
    queryKey: ["products"],
    staleTime: 5 * 60 * 1000,
    queryFn: getProducts,
  });

  return query;
}
