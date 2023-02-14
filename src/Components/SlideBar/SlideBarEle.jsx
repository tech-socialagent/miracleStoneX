import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components"

export const SlideWrap = styled.div`
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    height: 100vh;
    width: 100%;
    background: #fff;
    padding-top: 10%;
    z-index: 10;
    transition: .3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    display: flex;
    justify-content: center;
    align-items: center;
    
`;
export const Links = styled.div`
   display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align:  center;
    padding-left: 0px;
`;
export const ItemProduct = styled(HashLink)`
    color: var(--primary-color);
    text-decoration:none ;
    /* margin-top: 50%; */
    font-size: 24px;
    padding-left: 10px;

    &:hover{
        cursor: pointer;
        color: var(--secondary-color);
    }
`;
export const Item = styled(Link)`
    color: var(--primary-color);
    text-decoration:none ;
    /* margin-top: 50%; */
    font-size: 24px;
    padding-left: 10px;

    &:hover{
        cursor: pointer;
        color: var(--secondary-color);
    }
`;
export const GetInTouch = styled(Link)`
   /* margin-top: 50%; */
    font-size: 24px;
    padding-left: 10px;
`;
export const Btn = styled.button`
    color: var(--primary-color);
    
    border: 2px var(--primary-color) solid;
    background: transparent;

    &:hover{
        cursor: pointer;
        color: var(--secondary-color);
    }
`;
