import styled from "styled-components";
import { Link } from 'react-router-dom'
import { HashLink } from "react-router-hash-link";

export const FooterWrap= styled.div`
    display: flex;
    justify-content: space-between; 
    padding-left: 8%;
    padding-right: 8%;
    align-items: center;
    @media screen and (max-width: 750px){
        display: none;
    }

`;

export const LogoSection = styled.div`
    img{
        width: 200px;
    }
    @media screen and (max-width: 750px){
        img{
        width: 150px;
    }
    }

`;

export const LinkSection = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 150%;

    @media screen and (max-width: 750px){
       align-items: center;
    }

`;

export const PagewLink =styled(Link)`
        text-decoration: none;
        color: rgba(0, 0, 0, 0.5);
        margin-top: 5px;
        transition: 0.3s;

        &:hover{
         cursor: pointer; 
         color: var(--primary-color);
        }
`;
export const PagewLinkProduct =styled(HashLink)`
        text-decoration: none;
        color: rgba(0, 0, 0, 0.5);
        margin-top: 5px;
        transition: 0.3s;

        &:hover{
         cursor: pointer; 
         color: var(--primary-color);
        }
`;

export const SocialIcon = styled.div`
    display: flex;
    color: rgba(0, 0, 0, 0.5);
    a{
        margin: 5px;
        font-size: 30px;
    }

`;

export const ContactCard = styled.div`
    max-width: 430px;
    background: #000;
    color: #fff;
    padding: 10px;
    padding-left: 20px;
    background: #202020;
    border-radius: 5px;
    font-size: 14px;
    @media screen and (max-width: 750px){
        background: #F6F6F6;
        color: #000;
        margin-top: 30px;
    }

`;
export const MobileView = styled.div`
    display: none;

    @media screen and (max-width: 750px){
       display: flex;
       flex-direction: column;
       align-items: center;
    }

`;