import React from 'react'
import Navbar from '../components/navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'
 

export default function AuthLayout() {
  return (
    <>
    <Navbar/>
     <Outlet/>
    </>
  )
}
