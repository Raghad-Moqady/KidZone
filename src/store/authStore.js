import { create } from "zustand";

const useAuthStore= create((set)=>({
   userAccessToken: localStorage.getItem("userAccessToken"),
   user:JSON.parse(localStorage.getItem("decodedUserInfo")),

   //use this action after login:
   setUserAccessToken: (userAccessToken)=>{
    localStorage.setItem("userAccessToken",userAccessToken);
    set({userAccessToken});
   },

   //logout:
   logout:()=>{
    localStorage.removeItem("userAccessToken");
    localStorage.removeItem("decodedUserInfo");
    set({userAccessToken:null});
    set({user:null});
   },

   //set decoded user Informaion after login,
   //to use it in another components
   setUser:(user)=>{
      localStorage.setItem("decodedUserInfo",JSON.stringify(user));
      set({user});
   }




}));


export default useAuthStore;