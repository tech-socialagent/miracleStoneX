import React, { useState, useEffect, useContext } from 'react'
import { NavWrap, NavList, ItemHome, ItemAbout, ItemProduct, LogoWrap, Logo, Btn, MobileView, LogoWrapMobile, LogoMobile, Hamburger } from './NavBarElement'
import logo from '../../assets/navLogo.png'
import { useLocation } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import SlideBar from '../SlideBar/SlideBar';


const NavBar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <NavWrap>
        <NavList  >
          <ItemHome pathname={pathname} to='/'>HOME</ItemHome>
          <ItemAbout pathname={pathname} to='/aboutUs'>ABOUT US</ItemAbout>
          <LogoWrap>
            <Logo src={logo} alt="Logo" />
          </LogoWrap>
          <ItemProduct to='/#products'
            smooth={true}
            duration={500}
            spy={true.toString()}
          >PRODUCTS</ItemProduct>
          <Btn>GET IN TOUCH</Btn>
        </NavList>
      </NavWrap>
      <MobileView >
        <LogoWrapMobile>
          <LogoMobile src={logo} alt="Logo" />
        </LogoWrapMobile >
        <Hamburger onClick={() => setIsOpen(!isOpen)} >
          {isOpen ? <GrClose /> : <GiHamburgerMenu />}
        </Hamburger>
      </MobileView>
      <SlideBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default NavBar