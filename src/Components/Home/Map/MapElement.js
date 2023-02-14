import styled from "styled-components";

export const MapWrap = styled.div`
    padding: 8%;
    padding-top: 3%;
    padding-bottom: 5%;
    border-bottom: solid 1px;
    @media screen and (max-width: 750px){
      padding: 3%;
    }
    
`;

export const Title = styled.h1`
    font-weight: 500;
    font-size: 36px;
    color: var(--primary-color);
    font-style: italic;
`;

export const Desc = styled.div`
    font-weight: 400;
    line-height: 24px;
    font-size: 18px;
    font-style: normal;
    width: 65%;
    @media screen and (max-width: 750px){
       width: 100%;
       font-size: 15px;
    }

`;

export const IndiaMap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: max-content;
    position: relative;
    margin-top: 5%;
    img {
        width: 80%;
    }
`;

export const Mark = styled.img`
    
`;