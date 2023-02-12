import styled from "styled-components";

export const CardWrap = styled.div`
    padding: 2%;
    flex: 1 1 16rem;
    margin: 10px 20px;
    box-shadow: 0 0 15px rgba(0,0,0,0.4);
    height: max-content;
    align-self: normal;
    border: 1px #000 solid;
    max-width: 300px;
    min-width: 200px;
    @media screen and (max-width: 750px){
        min-width: 35%;
        max-width: 42%;
        flex: 1 1 10rem;
        margin: 5px;
    }
        
`;

export const Image = styled.img`
    width: 100%;
    border-radius: 10px;
`;

export const Title = styled.div`
    font-weight: 500;
    font-size: 32px;
    color: var(--secondary-color);
    text-align: center;
    margin-top: 3px;
    margin-bottom: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 750px){
        font-size: 20px;
    }

`;

export const Desc = styled.div`
    font-weight: 400;
    font-size: 14px;
    @media screen and (max-width: 750px){
        font-size: 12px;
    }
`;

export const Btn = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;

    button{
        width: 160px;
        height: 48px;
        background: var(--secondary-color);
        border: none;
        border-radius: 15px;
    }
    @media screen and (max-width: 750px){
        margin-top: 3px;
        button{
        width: 80%;
        height: 35px;
        background: var(--secondary-color);
        border: none;
        border-radius: 15px;
    }
    }
`;

