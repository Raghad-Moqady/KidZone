import useFetch from "./useFetch";
import axiosInstanceWithLangAndHeaders from './../Api/axiosInstanceWithLangAndHeaders';

export default function useCart({ lang = "en" } = {}) {
  return useFetch(["cart", { lang }], "/Carts",{},axiosInstanceWithLangAndHeaders );
}
