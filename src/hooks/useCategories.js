import { useQuery } from "@tanstack/react-query";
import React from "react";
import axiosInstance from "../Api/axiosInstance";

export default function useCategories() {
  const getCategories = async () => {
    const response = await axiosInstance.get(`/Categories?lang=en`);
    return response.data.categories;
  };

  const query = useQuery({
    queryKey: ["categories"],
    staleTime: 5 * 60 * 1000,
    queryFn: getCategories,
  });

  return query;
}
