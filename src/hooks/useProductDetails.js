import useFetch from "./useFetch.js";

export default function useProductDetails({id, lang = "en"}) {
  return useFetch(["product", { lang, id }], `/Products/${id}`);
}
