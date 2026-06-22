import React from 'react'
import useAuthStore from '../store/authStore'
import { Navigate } from 'react-router-dom';

//صفحات تظهر للمستخدم الغير مسجل دخوله

export default function GuestRouter({children}) {
 const userAccessToken= useAuthStore(state=> state.userAccessToken);

 if(userAccessToken){
    return <Navigate to={'/'}/>
 }

  return children;
}
