import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../Api/axiosInstance";

// public custom hook
export default function useFetch(queryKey, url, params = {}) {
  const fetchData = async () => {
    const response = await axiosInstance.get(url, {
      params,
    });
    return response.data;
  };

  const query = useQuery({
    queryKey,
    staleTime: 5 * 60 * 1000,
    queryFn: fetchData,
  });

  return query;
}
