import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../Api/axiosInstance";

export default function useHomeProducts(path) {
  const getProducts = async () => {
    const response = await axiosInstance.get(`/${path}`);
    return response.data.response.data;
  };

  const query = useQuery({
    queryKey: ["homeProducts"],
    staleTime: 5 * 60 * 1000,
    queryFn: getProducts,
  });

  return query;
}
