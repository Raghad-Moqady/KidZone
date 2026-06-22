import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';
 
 

//صفحات تظهر للمستخدم المسجل دخوله
export default function ProtectedRouter({children}) {
   const userAccessToken= useAuthStore(state=>state.userAccessToken);
  
   if(!userAccessToken){
    return <Navigate to='/auth/login' />;
   } 
   
  return children
}
