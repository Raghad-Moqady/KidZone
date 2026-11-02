import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../Api/axiosInstance";

export default function useProducts(path) {
  const getProducts = async () => {
    const response = await axiosInstance.get(`/${path}`);
    return response.data.response.data;
  };

  const query = useQuery({
    queryKey: ["products"],
    staleTime: .1 * 60 * 1000,
    queryFn: getProducts,
  });

  return query;
}
