import styled from "styled-components";
import { Link } from 'react-router-dom'
import { HashLink } from "react-router-hash-link";


export const NavWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95px;
    /* background: ${({ dark }) => (dark ? '' : '')}; */
    background:#FFFFFF;
    font-weight: 500;
    font-size: 16px;   
    position: sticky;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    transition: 2s;

    @media screen and (max-width: 750px){
        display: none;
    }

`;
export const NavList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
`;

export const ItemHome = styled(Link)`
    margin: 0px 2%;
    color: ${({ pathname }) => (pathname == '/' ? 'var(--secondary-color)' : 'var(--primary-color)')} ;
    text-decoration:  none;    
`;
export const ItemAbout = styled(Link)`
    margin: 0px 2%;
    color: ${({ pathname }) => (pathname == '/aboutUs' ? 'var(--secondary-color)' : 'var(--primary-color)')} ;
    text-decoration:  none;    
`;


export const ItemProduct = styled(HashLink)`
    margin: 0px 2%;
    color: var(--primary-color);
    text-decoration:  none;
    cursor: pointer;
    
`;

export const LogoWrap = styled(Link)`
    margin: 0px 6%;
`;
export const Logo = styled.img`
    height: 95px;
`;

export const Btn = styled.button`
    margin: 0px 2%;
    background: transparent;
    width: max-content;
    height: 30px;
    padding-top: 2px;
    color: var(--primary-color);
    border-color: var(--primary-color);
    border: 1px;
    border-style: solid;

    &:hover{
        cursor: pointer;
        color: var(--secondary-color);
    }
`;

export const MobileView = styled.div`
    display: none;
    padding: 20px;
    font-size: 30px;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 999;
    background:#FFFFFF;
    height: 30px;
    align-items: center;

    @media screen and (max-width: 750px){
        display: flex;
    }

`;
export const LogoWrapMobile = styled(Link)`
    padding: 0px 6%;
    width: 70%;
`;

export const LogoMobile = styled.img`
    height: 60px;
`;

export const Hamburger = styled.div`
    width: 30%;
    display: flex;
    justify-content: end;
    align-items: center;
    font-size: 40px;
`;
