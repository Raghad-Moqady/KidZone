import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../Api/axiosInstance";

export default function useProducts({
  lang = "en",
  search = "",
  categoryId = null,
  minPrice = null,
  maxPrice = null,
  sortBy = null,
  asc = true,
  page = 1,
  limit = 4,
} = {}) {
  const getProducts = async () => {
    const response = await axiosInstance.get("/Products", {
      params: {
        lang,
        search: search || undefined,
        categoryId: categoryId ?? undefined,
        minPrice: minPrice ?? undefined,
        maxPrice: maxPrice ?? undefined,
        sortBy: sortBy || undefined,
        asc,
        page,
        limit,
      },
    });

    return response.data.response.data;
  };

  const query= useQuery({
    queryKey: [
      "products",
      {
        lang,
        search,
        categoryId,
        minPrice,
        maxPrice,
        sortBy,
        asc,
        page,
        limit,
      },
    ],
    queryFn: getProducts,
    staleTime: 5 * 60 * 1000,
  });
  return query;
}
