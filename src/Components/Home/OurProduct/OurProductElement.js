import styled from "styled-components";


export const OurProductWrap = styled.div`
    padding: 8%;
    padding-top: 5%;
    padding-bottom: 5%;
    border-bottom: solid 1px;

    @media screen and (max-width: 650px){
        padding-top: 10%;
        padding: 5%;
    }
`;
export const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    color: #fff;
    h1{
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        margin: 0;
        opacity: 100%;
    }
    h1:hover{
        opacity: 0;
        color: #000;
    }

    button{
        background: #FF9634;
        border-radius: 10px;    
        height: 40px;
        width: 100px;
        border: none;
        color: #fff;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
    }

    button:hover{
        background: #FBAE17;
        cursor: pointer;
    }
    @media screen and (max-width: 750px){
       flex-direction: column;
    }

`;

export const Granite = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 50%;
    height: max-content;
    margin-right: 10px;

    img{
        width: 100%;
        height: 340px;
        object-fit: cover;
        border-radius: 10px;
    }

    &:hover{
       h1{
        opacity: 0;
       }
    }
    @media screen and (max-width: 750px){
        width: 100%;
    }

`;

export const Marble = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 50%;
    height: max-content;
    margin-right: 10px;

    img{
        width: 100%;
        border-radius: 10px;
        object-fit: cover;
        height: 340px;
    }

    h1{
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        margin: 0;
    }
    &:hover{
       h1{
        opacity: 0;
       }
    }
    @media screen and (max-width: 750px){
        width: 100%;
        margin-top: 20px;
    }
`;

export const GContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: 0.3s;
    border-radius: 10px;
    

    &:hover{
        opacity: 100%;
        background: rgba(0, 0, 0, 0.51);
        h1{
            opacity: 0;
        }
    }
`;

export const MContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: 0.3s;
    border-radius: 10px;

    &:hover{
        opacity: 100%;
        background: rgba(0, 0, 0, 0.51);
    }
`;