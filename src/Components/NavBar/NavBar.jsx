import React, { useState, useEffect, useContext } from 'react'
import { NavWrap, NavList, ItemHome, ItemAbout, ItemProduct, LogoWrap, Logo, Btn, MobileView, LogoWrapMobile, LogoMobile, Hamburger } from './NavBarElement'
import logo from '../../assets/navLogo.png'
import { useLocation } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import SlideBar from '../SlideBar/SlideBar';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false)

  const HandleHome = () => {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <NavWrap>
        <NavList  >
          <ItemHome onClick={() => HandleHome()} pathname={pathname} to='/'>HOME</ItemHome>
          <ItemAbout pathname={pathname} to='/aboutUs'>ABOUT US</ItemAbout>
          <LogoWrap onClick={() => HandleHome()} to='/' >
            <Logo src={logo} alt="Logo" />
          </LogoWrap>
          <ItemProduct to='/#products'
            smooth={true}
            duration={500}
            spy={true.toString()}
          >PRODUCTS</ItemProduct>
          <Link to='/GetInTouch'>
            <Btn>GET IN TOUCH</Btn>
          </Link>
        </NavList>
      </NavWrap>
      <MobileView >
        <LogoWrapMobile onClick={() => HandleHome()} to='/' >
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