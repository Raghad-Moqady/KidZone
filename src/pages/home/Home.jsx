import React from 'react'
import style from './Home.module.css'
import Hero from '../../components/hero/Hero.jsx'
import Categories from '../../components/categories/Categories.jsx'
import AboutUs from '../../components/aboutUs/AboutUs.jsx'
import WhatWeOffer from '../../components/whatWeOffer/WhatWeOffer.jsx'
import Services from '../../components/services/Services.jsx'
import Products from '../../components/products/Products.jsx'


export default function Home() {
  return (
    <>
    <Hero/>
    <Services/>
    <AboutUs/>
    <Categories/>
    {/* <Services/> */}
    <WhatWeOffer/>
    <Products/>
   </>
   
  )
}
