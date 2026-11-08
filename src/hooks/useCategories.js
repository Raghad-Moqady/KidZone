import useFetch from "./useFetch";

export default function useCategories({ lang = "en" } = {}) {
  return useFetch(["categories", { lang }], "/Categories");
}
