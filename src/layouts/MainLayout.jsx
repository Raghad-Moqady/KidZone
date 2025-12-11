import React from 'react'
import Navbar from './../components/navbar/Navbar.jsx';
import Footer from '../components/footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
