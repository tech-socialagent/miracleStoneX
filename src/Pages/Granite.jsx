import React from 'react'
import TopSection from '../Components/Granite/TopSection/Granite'
import ProductList from '../Components/Granite/ProductList/ProductList'
import NavBar from '../Components/NavBar/NavBar'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Granite = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <>
    <NavBar />
    <TopSection />
    <ProductList page={'Granite'} />
    </>
  )
}

export default Granite