import React, { useState, useEffect, useContext } from 'react'
import { NavWrap, NavList, ItemHome, ItemAbout, ItemProduct, LogoWrap, Logo, Btn } from './NavBarElement'
import logo from '../../assets/navLogo.png'
import { useLocation } from "react-router-dom";


const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <NavWrap>
      <NavList  >
        <ItemHome pathname={pathname} to='/'>HOME</ItemHome>
        <ItemAbout pathname={pathname} to='/aboutUs'>ABOUT US</ItemAbout>
        <LogoWrap>
          <Logo src={logo} alt="Logo" />
        </LogoWrap>
        <ItemProduct  to='/#products'
          smooth={true}
          duration={500}
          spy={true.toString()}
        >PRODUCTS</ItemProduct>
        <Btn>GET IN TOUCH</Btn>
      </NavList>
    </NavWrap>
  )
}

export default NavBar