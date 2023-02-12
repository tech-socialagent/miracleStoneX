import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; 
import styled from "styled-components"

export const SlideWrap = styled.div`
    position: fixed;
    top: 0;
    right: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    height: 100vh;
    width: 100%;
    background: #fff;
    padding-top: 150px;
    z-index: 10;
    /* transition: .3s ease-in-out; */
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    display: flex;
    justify-content: center;
`;
export const Links = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const ItemProduct = styled(HashLink)`
    color: red;
    text-decoration:none ;
    margin-top: 70%;
    font-size: 24px;
    padding-left: 10px;

    &:hover{
        cursor: pointer;
        color: var(--secondary-color);
    }
`;
export const Item = styled(Link)`
    color: red;
    text-decoration:none ;
    margin-top: 70%;
    font-size: 24px;
    padding-left: 10px;

    &:hover{
        cursor: pointer;
        color: var(--secondary-color);
    }
`;
