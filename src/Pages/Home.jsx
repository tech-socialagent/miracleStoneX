import React from 'react'
import Footer from '../Components/Footer/Footer'
import Banner from '../Components/Home/LandingBanner/Banner'
import Map from '../Components/Home/Map/Map'
import OurClients from '../Components/Home/OurClients/OurClients'
import OurProduct from '../Components/Home/OurProduct/OurProduct'
import SecondSection from '../Components/Home/SecondSection/SecondSection'
import Testimonials from '../Components/Home/Testimonials/Testimonials'
import NavBar from '../Components/NavBar/NavBar'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <NavBar />
      <Banner />
      <SecondSection />
      <OurProduct />
      <Map />
      {/* <Testimonials />
      <OurClients /> */}
      <Footer />
    </>
  )
}

export default Home