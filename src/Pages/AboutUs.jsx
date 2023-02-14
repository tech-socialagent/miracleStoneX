import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import AboutCom from '../Components/About/AboutUs/About'
import CompanyProcess from '../Components/About/CompanyProcess/CompanyProcess'
import Timeline from '../Components/About/Timeline/Timeline'
import Footer from '../Components/Footer/Footer'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AboutUs = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <NavBar />
      <AboutCom />
      <CompanyProcess />
      {/* <Timeline /> */}
      <Footer />
    </>
  )
}

export default AboutUs