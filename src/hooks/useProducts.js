import useFetch from "./useFetch";

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
  return useFetch(
    [
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
    "/Products",
    {
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
  );
}
