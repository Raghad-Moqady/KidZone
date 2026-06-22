import { create } from "zustand";

const useAuthStore= create((set)=>({
   userAccessToken: localStorage.getItem("userAccessToken"),
   
   //use this action after login:
   setUserAccessToken: (userAccessToken)=>{
    localStorage.setItem("userAccessToken",userAccessToken);
    set({userAccessToken});
   },

   //logout:
   logout:()=>{
    localStorage.removeItem("userAccessToken");
    set({userAccessToken:null});
   }

}));


export default useAuthStore;